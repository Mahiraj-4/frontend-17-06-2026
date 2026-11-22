const fs = require("fs");
const path = require("path");

function loadFileConfig(filePath) {
  const config = {};

  if (!fs.existsSync(filePath)) {
    return config;
  }

  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const eqIndex = trimmed.indexOf("=");
    if (eqIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, eqIndex).trim();
    const value = trimmed.slice(eqIndex + 1).trim();
    config[key] = value;
  }

  return config;
}

const configFilePath = path.join(__dirname, "fee.config");
const fileConfig = loadFileConfig(configFilePath);

// Environment variable wins when both exist
const token = process.env.FEE_ADMIN_TOKEN || fileConfig.FEE_ADMIN_TOKEN;
const port = process.env.FEE_PORT || fileConfig.FEE_PORT || "4000";

if (!token || token.trim() === "") {
  console.error("Error: FEE_ADMIN_TOKEN is missing in both environment and fee.config.");
  process.exit(1);
}

const cleanToken = token.trim();
const maskedToken =
  "*".repeat(Math.max(0, cleanToken.length - 3)) + cleanToken.slice(-3);

console.log(`Fee Server Port: ${port}`);
console.log(`Admin Token: ${maskedToken}`);
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Welcome to Gulmohar Enclave, Pune Notice Board");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
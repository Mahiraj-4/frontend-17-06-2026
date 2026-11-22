const http = require("http");

const notices = [
  { id: 1, title: "Water tank cleaning scheduled", date: "2026-11-18", block: "A" },
  { id: 2, title: "Monthly maintenance fee of ₹2,500 due", date: "2026-11-20", block: "B" },
  { id: 3, title: "Lift inspection and servicing", date: "2026-11-21", block: "C" },
  { id: 4, title: "Cultural night contribution of ₹500 per flat", date: "2026-11-22", block: "B" },
  { id: 5, title: "Visitor parking gate rules update", date: "2026-11-24", block: "A" }
];

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, "http://localhost:3000");

  if (req.method === "GET" && parsedUrl.pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Welcome to Gulmohar Enclave, Pune Notice Board");
    return;
  }

  if (req.method === "GET" && parsedUrl.pathname === "/notices") {
    const blockFilter = parsedUrl.searchParams.get("block");
    const result = blockFilter
      ? notices.filter((n) => n.block.toUpperCase() === blockFilter.toUpperCase())
      : notices;

    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(result));
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Notice not found");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
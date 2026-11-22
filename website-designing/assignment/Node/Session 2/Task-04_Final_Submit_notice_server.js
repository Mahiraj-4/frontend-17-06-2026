const http = require("http");

const notices = [
  { id: 1, title: "Water tank cleaning scheduled", date: "2026-11-18", block: "A" },
  { id: 2, title: "Monthly maintenance fee of ₹2,500 due", date: "2026-11-20", block: "B" },
  { id: 3, title: "Lift inspection and servicing", date: "2026-11-21", block: "C" },
  { id: 4, title: "Cultural night contribution of ₹500 per flat", date: "2026-11-22", block: "B" },
  { id: 5, title: "Visitor parking gate rules update", date: "2026-11-24", block: "A" }
];

function sendResponse(req, res, statusCode, contentType, body) {
  const time = new Date().toTimeString().split(" ")[0];
  console.log(`${time} ${req.method} ${req.url} ${statusCode}`);

  res.writeHead(statusCode, { "Content-Type": contentType });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, "http://localhost:3000");

  if (req.method === "GET" && parsedUrl.pathname === "/") {
    sendResponse(
      req,
      res,
      200,
      "text/plain; charset=utf-8",
      "Welcome to Gulmohar Enclave, Pune Notice Board"
    );
    return;
  }

  if (req.method === "GET" && parsedUrl.pathname === "/notices") {
    const blockFilter = parsedUrl.searchParams.get("block");
    const result = blockFilter
      ? notices.filter((n) => n.block.toUpperCase() === blockFilter.toUpperCase())
      : notices;

    sendResponse(
      req,
      res,
      200,
      "application/json; charset=utf-8",
      JSON.stringify(result)
    );
    return;
  }

  sendResponse(req, res, 404, "text/plain; charset=utf-8", "Notice not found");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

/*
Terminal Request Logs:
15:46:10 GET / 200
15:46:18 GET /notices 200
15:46:25 GET /notices?block=A 200
15:46:33 GET /missing 404
*/
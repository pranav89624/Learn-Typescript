import http, { IncomingMessage, ServerResponse } from "http";
import "dotenv/config"; // Load env first
import { env } from "./05-type-safe-env.js"; // Import validated env

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (!req.url) return;

    if (req.url === "/" && req.method === "GET") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello from TypeScript + Node HTTP Server!");
    } 
    else if (req.url === "/json" && req.method === "GET") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "Hello JSON!", time: new Date() }));
    } 
    else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("404 Not Found");
    }
  }
);

server.listen(env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${env.PORT}`);
});

import express, { Request, Response, NextFunction } from "express";
import "dotenv/config";
import { env } from "./05-type-safe-env.js";

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// GET /
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript!");
});

// GET /json
app.get("/json", (req: Request, res: Response) => {
  res.json({ message: "Hello JSON from Express!", time: new Date() });
});

// POST /echo
app.post("/echo", (req: Request, res: Response) => {
  res.json({ received: req.body });
});

// 404 Handler (must be last)
app.use((req: Request, res: Response) => {
  res.status(404).send("Route not found");
});

// Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(env.PORT, () => {
  console.log(`🚀 Express server running on http://localhost:${env.PORT}`);
});

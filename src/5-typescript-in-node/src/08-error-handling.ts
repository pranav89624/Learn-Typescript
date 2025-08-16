import express, { Request, Response, NextFunction } from "express";
import "dotenv/config";
import { env } from "./05-type-safe-env.js";

// Custom Error Class
class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}

const app = express();
app.use(express.json());

// Synchronous route with error
app.get("/sync-error", (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new AppError("Synchronous error occurred!", 400);
  } catch (err) {
    next(err); // Pass to error handler
  }
});

// Async route with error
app.get("/async-error", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Promise.reject(new AppError("Async error occurred!", 422));
  } catch (err) {
    next(err);
  }
});

// Normal route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TS with structured error handling!");
});

// 404 fallback
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found" });
});

// Error-handling middleware
app.use(
  (err: Error | AppError, req: Request, res: Response, next: NextFunction) => {
    console.error("❌ Error:", err.message);

    if (err instanceof AppError) {
      res.status(err.statusCode).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

app.listen(env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${env.PORT}`);
});

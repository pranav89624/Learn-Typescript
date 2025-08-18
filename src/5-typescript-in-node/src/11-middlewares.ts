import express, { Request, Response, NextFunction } from "express";

const app = express();
app.use(express.json());

// --- Logger Middleware ---
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
};

// --- Validation Middleware (for POST /users) ---
const validateUser = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "Name is required" });
  }
  next();
};

// --- Routes ---
app.get("/api/users", logger, (req: Request, res: Response) => {
  res.json([{ id: 1, name: "Pranav" }]);
});

app.post("/api/users", logger, validateUser, (req: Request, res: Response) => {
  res.status(201).json({ id: 2, name: req.body.name });
});

// --- Error Handling Middleware ---
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Error caught by middleware:", err.message);
  res.status(500).json({ error: "Something went wrong" });
});

// --- Start Server ---
app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});

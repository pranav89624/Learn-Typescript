import express, { Request, Response } from "express";
import "dotenv/config";
import { env } from "./05-type-safe-env.js";

const app = express();
app.use(express.json());

// --- User Router ---
const userRouter = express.Router();

// In-memory demo "database"
const users: { id: number; name: string }[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// GET /users → list all users
userRouter.get("/", (req: Request, res: Response) => {
  res.json(users);
});

// POST /users → add a new user
userRouter.post("/", (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Mount the userRouter at /api/users
app.use("/api/users", userRouter);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TS with modular routing!");
});

// 404 fallback
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${env.PORT}`);
});

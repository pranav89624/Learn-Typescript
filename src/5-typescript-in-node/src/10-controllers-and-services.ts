import express, { Request, Response } from "express";

const app = express();
app.use(express.json()); // to parse JSON request body

// 🗄️ In-memory "DB" for demo
let users: { id: number; name: string }[] = [
  { id: 1, name: "Pranav" },
  { id: 2, name: "Alice" },
];

// -------------------------
// Service Layer (Business logic)
// -------------------------
const userService = {
  getAllUsers: () => users,

  createUser: (name: string) => {
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    return newUser;
  },
};

// -------------------------
// Controller Layer (Handles req/res)
// -------------------------
const userController = {
  getUsers: (req: Request, res: Response) => {
    const data = userService.getAllUsers();
    res.json(data);
  },

  addUser: (req: Request, res: Response) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    const newUser = userService.createUser(name);
    res.status(201).json(newUser);
  },
};

// -------------------------
// Routes
// -------------------------
app.get("/api/users", userController.getUsers);
app.post("/api/users", userController.addUser);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Controllers & Services Demo 🚀");
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).send("Route not found");
});

// -------------------------
// Start Server
// -------------------------
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

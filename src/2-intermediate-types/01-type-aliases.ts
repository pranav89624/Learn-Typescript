export {}; // Ignore this line for now.

// 🧩 Type Aliases – Examples
// ✅ Primitives
type Username = string;
type Age = number;

const name1: Username = "Pranav";
const age1: Age = 20;

// ✅ Object Type
type User = {
  name: string;
  age: number;
};

const user1: User = {
  name: "Alice",
  age: 25,
};

// ✅ Function Type
type Greet = (name: string) => string;

const greet: Greet = (name) => `Hello, ${name}`;

console.log(greet("Dev"));

// ✅ Union Type Alias
type Status = "loading" | "success" | "error";

let apiStatus: Status = "loading";
// apiStatus = "failed"; ❌ Error

// ✅ Intersection
type Base = { id: string };
type WithRole = Base & { role: string };

const adminUser: WithRole = {
  id: "123",
  role: "admin",
};


// -----------------------------
// 🧪 Mini Challenges Solutions
// -----------------------------

// 1. Product Type
type Product = {
  id: number;
  title: string;
  price: number;
  isAvailable: boolean;
};

const product: Product = {
  id: 1,
  title: "TypeScript Hoodie",
  price: 1299,
  isAvailable: true,
};

// 2. Status Union
type OrderStatus = "pending" | "shipped" | "delivered";

let order: OrderStatus = "pending";
// order = "cancelled"; ❌ Error

// 3. BlogPost with nested object
type BlogPost = {
  title: string;
  content: string;
  author: {
    name: string;
    email: string;
  };
};

const post: BlogPost = {
  title: "Why TypeScript > JavaScript in Teams",
  content: "Because safety nets matter.",
  author: {
    name: "Pranav",
    email: "vermapranav@example.com",
  },
};

// 4. Extend BaseUser
type BaseUser = { id: number };
type AdminUser = BaseUser & { role: "admin" };

const admin: AdminUser = {
  id: 404,
  role: "admin",
};

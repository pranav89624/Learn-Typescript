export {};

// 🔹 09 – Common OOP Patterns in TypeScript

// ✅ 1. Singleton Pattern
class Logger {
  private static instance: Logger;
  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
}

// Usage:
const log1 = Logger.getInstance();
const log2 = Logger.getInstance();

log1.log("App started");
console.log("Same instance:", log1 === log2); // ✅ true



// ✅ 2. Factory Pattern
interface UserRole {
  describe(): void;
}

class Admin implements UserRole {
  describe() {
    console.log("Admin: Full access");
  }
}

class Editor implements UserRole {
  describe() {
    console.log("Editor: Can modify content");
  }
}

class Viewer implements UserRole {
  describe() {
    console.log("Viewer: Read-only access");
  }
}

type RoleType = "admin" | "editor" | "viewer";

class RoleFactory {
  static createRole(role: RoleType): UserRole {
    switch (role) {
      case "admin":
        return new Admin();
      case "editor":
        return new Editor();
      case "viewer":
        return new Viewer();
      default:
        throw new Error("Invalid role");
    }
  }
}

// Usage:
const roles = ["admin", "editor", "viewer"] as RoleType[];

roles.forEach((role) => {
  const user = RoleFactory.createRole(role);
  user.describe();
});



// ✅ 3. Observer Pattern
type Listener = () => void;

class ObservableCounter {
  private count = 0;
  private listeners: Listener[] = [];

  addListener(fn: Listener) {
    this.listeners.push(fn);
  }

  increment() {
    this.count++;
    this.listeners.forEach((l) => l());
  }

  get value() {
    return this.count;
  }
}

// Usage:
const counter = new ObservableCounter();

counter.addListener(() => {
  console.log("Listener 1: Counter is now", counter.value);
});

counter.addListener(() => {
  console.log("Listener 2: Updated count:", counter.value);
});

counter.increment();
counter.increment();

// 📦 Namespaces in TypeScript

// ✅ Basic Example
namespace Logger {
  export function log(message: string): void {
    console.log("[LOG]:", message);
  }

  export function warn(message: string): void {
    console.warn("[WARN]:", message);
  }
}

Logger.log("Namespaces are kinda old-school.");
Logger.warn("But still useful in some contexts!");


// --------------------------------------------------
// 🧪 Mini Challenges 
// --------------------------------------------------

// 1: MathUtils Namespace
namespace MathUtils {
  export const PI = 3.14159;

  export function areaOfCircle(radius: number): number {
    return PI * radius * radius;
  }
}

console.log("Area of circle with radius 5:", MathUtils.areaOfCircle(5)); // 78.53975


// 2: Auth Namespace
namespace Auth {
  export interface User {
    name: string;
    password: string;
  }

  export function login(user: User): boolean {
    if (user.name.trim() && user.password.trim()) {
      console.log(`Welcome, ${user.name}!`);
      return true;
    } else {
      console.error("Login failed: Invalid credentials.");
      return false;
    }
  }
}

const user1: Auth.User = { name: "Pranav", password: "typescript" };
const user2: Auth.User = { name: "", password: "" };

Auth.login(user1); // ✅
Auth.login(user2); // ❌

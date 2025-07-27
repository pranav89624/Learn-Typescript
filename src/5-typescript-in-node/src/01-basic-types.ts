// ✅ String
const projectName: string = "TypeScript in Node";
console.log("Project:", projectName);

// ✅ Number
const port: number = 3000;
console.log("Server will run on port:", port);

// ✅ Boolean
const isProduction: boolean = false;
console.log("Production mode:", isProduction);

// ✅ Array
const skills: string[] = ["TypeScript", "Node.js", "Zod"];
skills.forEach((skill) => console.log("Skill:", skill));

// ✅ Object
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

const user: User = {
  id: 1,
  name: "Pranav",
  isAdmin: true,
};

console.log("User:", user);

// ✅ Union Types
type Role = "admin" | "editor" | "viewer";
const role: Role = "admin";
console.log("Assigned Role:", role);

// ✅ Function with typed params and return
function greet(userName: string): string {
  return `Hello, ${userName}!`;
}

console.log(greet("Pranav"));

// ✅ Null / Undefined
const optionalData: string | undefined = undefined;
console.log("Optional data:", optionalData);

// ✅ Tuple
const coords: [number, number] = [10, 20];
console.log("Coordinates:", coords);

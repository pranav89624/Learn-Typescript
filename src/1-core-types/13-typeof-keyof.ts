// ✅ typeof — Infer type from value
const userType = {
  name: "Pranav",
  age: 21,
  isAdmin: false,
};

type UserType = typeof userType; // inferred as: { name: string; age: number; isAdmin: boolean }

const newUser: UserType = {
  name: "Verma",
  age: 22,
  isAdmin: true,
};


// ✅ keyof — Get union of object keys
type UserKeys = keyof UserType; // "name" | "age" | "isAdmin"

const key: UserKeys = "name"; // ✅ Only "name", "age", or "isAdmin" allowed

// const badKey: UserKeys = "email"; // ❌ Error: not assignable


// ✅ keyof typeof — keys of an existing value
const roles = {
  admin: "ADMIN",
  user: "USER",
  guest: "GUEST",
};

type RoleType = keyof typeof roles; // "admin" | "user" | "guest"

function assignRole(role: RoleType) {
  console.log(`Assigned role: ${roles[role]}`);
}

assignRole("admin");


// ✅ Real Use Case: Dynamic Property Access
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const personType = { name: "Alice", age: 30, city: "Delhi" };

const nameValue = getProp(personType, "name"); // inferred as string
console.log("Name:", nameValue);

// const invalid = getProp(person, "email"); // ❌ Error: "email" doesn't exist on type


// ---------------------------------------------
// 🧪 Mini Challenges
// ---------------------------------------------

// 1. typeof object → type
const configType = {
  darkMode: true,
  fontSize: 16,
};
type Config = typeof configType; // inferred as: { darkMode: boolean; fontSize: number }

const appConfig: Config = {
  darkMode: false,
  fontSize: 18,
};

// 2. keyof from object type
type ConfigKeys = keyof Config; // "darkMode" | "fontSize"
const setting: ConfigKeys = "fontSize";

// 3. Function that takes a key of an object
function logConfig<T, K extends keyof T>(obj: T, key: K) {
  console.log(`${String(key)}:`, obj[key]);
}

logConfig(appConfig, "darkMode");

// 4. keyof typeof from a constant object
const colors = {
  primary: "#3498db",
  secondary: "#2ecc71",
  danger: "#e74c3c",
};

type ColorKey = keyof typeof colors; // "primary" | "secondary" | "danger"

function getColor(key: ColorKey): string {
  return colors[key];
}

console.log("Danger Color:", getColor("danger"));

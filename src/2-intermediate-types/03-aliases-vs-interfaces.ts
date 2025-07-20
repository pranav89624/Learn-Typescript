export {};

// ⚔️ Type Aliases vs Interfaces

// ✅ Basic Object Definitions
// Using type alias
type UserType = {
  name: string;
  age: number;
};

// Using interface
interface UserInterface {
  name: string;
  age: number;
}

// ✅ Extension
// type with intersection
type AdminType = UserType & {
  role: string;
};

const admin1: AdminType = {
  name: "Pranav",
  age: 20,
  role: "admin",
};
console.log("Admin 1 (type):", admin1);

// interface with extends
interface AdminInterface extends UserInterface {
  role: string;
}

const admin2: AdminInterface = {
  name: "Verma",
  age: 21,
  role: "super-admin",
};
console.log("Admin 2 (interface):", admin2);

// ✅ Declaration Merging — Only works with interfaces
interface Theme {
  darkMode: boolean;
}

interface Theme {
  fontSize: number;
}

const appTheme: Theme = {
  darkMode: true,
  fontSize: 16,
};
console.log("App Theme:", appTheme);

// type ThemeDup = { darkMode: boolean };
// type ThemeDup = { fontSize: number }; // ❌ Error: Duplicate identifier

// ✅ Union Types, Only works with type
type Status = "pending" | "shipped" | "delivered";
const currentStatus: Status = "pending";
console.log("Current Status: (union type)", currentStatus);

// interface StatusInterface = "pending" | "shipped"; // ❌ Not allowed

// ✅ Conditional Utility Type
type Maybe<T> = T | null | undefined;

const maybeString: Maybe<string> = null;
const maybeNumber: Maybe<number> = undefined;
console.log("Maybe String:", maybeString);
console.log("Maybe Number:", maybeNumber);


// -----------------------------
// 🧪 Mini Challenge Solutions
// -----------------------------

// 1. Create a User using both type and interface + extend it
// Using type alias
type UserA = {
  username: string;
};

type ExtendedUserA = UserA & {
  email: string;
};

const u1: ExtendedUserA = {
  username: "Pranav",
  email: "pranav@example.com",
};
console.log("User A (type):", u1);

// Using interface
interface UserB {
  username: string;
}

interface ExtendedUserB extends UserB {
  email: string;
}

const u2: ExtendedUserB = {
  username: "Verma",
  email: "verma@example.com",
};
console.log("User B (interface):", u2);

// 2. Duplicate declarations
// ✅ interface merging (already done above with Theme)

// ❌ type duplication throws error (commented)
// type Duplicate = { name: string };
// type Duplicate = { age: number };

// 3. Union using type (✅)
type PaymentMethod = "credit" | "debit" | "upi";


// 4. Maybe<T> already shown above

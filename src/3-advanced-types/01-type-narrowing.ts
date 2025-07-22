export {};

// ----------- typeof Narrowing -----------
function logValue(val: string | number) {
  if (typeof val === "string") {
    console.log(val.toUpperCase()); // narrowed to string
  } else {
    console.log(val.toFixed(2)); // narrowed to number
  }
}

logValue("hello"); // HELLO
logValue(42); // 42.00

// ----------- in Operator Narrowing -----------
type Admin = { name: string; role: string };
type User = { name: string; email: string };

function printPerson(person: Admin | User) {
  if ("role" in person) {
    console.log("Admin:", person.name, person.role);
  } else {
    console.log("User:", person.name, person.email);
  }
}

printPerson({ name: "Alice", role: "Admin" }); // Admin: Admin
printPerson({ name: "Bob", email: "bob@example.com" }); // User: bob@example.com

// ----------- instanceof Narrowing -----------
function printDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

printDate(new Date()); // Current date in UTC
printDate("2025-07-22"); // Parsed date in UTC

// ----------- Equality Narrowing -----------
function compare(x: string | number, y: string | boolean) {
  if (x === y) {
    // both must be string
    console.log(x.toUpperCase());
  }
  else {
    throw new Error("Types do not match");
  }
}

compare("hello", "hello"); // HELLO
// compare(42, true); // ❌ Error: Type 'number' is not assign
// compare("hello", true); // ❌ Error: Type 'boolean' is not assignable to type 'string'

// ----------- Control Flow Analysis -----------
function doSomething(x?: string | null) {
  if (!x) return;
  console.log(x.toUpperCase()); // x is string here
}

doSomething("pranav"); // HELLO
doSomething(); // No output

// ----------- Custom Type Guard -----------
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function isDog(animal: Dog | Cat): animal is Dog {
  return "bark" in animal;
}

function handlePet(pet: Dog | Cat) {
  if (isDog(pet)) {
    pet.bark();
  } else {
    pet.meow();
  }
}

handlePet({ bark: () => console.log("Woof!") }); // Woof!
handlePet({ meow: () => console.log("Meow!") }); // Meow


// =====================
// ✅ Mini Challenge Solutions
// =====================

// 1. Handle string | number | boolean
function handlePrimitive(value: string | number | boolean) {
  if (typeof value === "string") {
    console.log("STR");
  } else if (typeof value === "boolean") {
    console.log(value ? 1 : 0);
  } else {
    console.log(value * 2);
  }
}

handlePrimitive("hello"); // STR
handlePrimitive(true); // 1
handlePrimitive(42); // 84

// 2. Custom type guard: isAdmin
type SuperUser = User | Admin;

function isAdmin(user: SuperUser): user is Admin {
  return "role" in user;
}

function printSuperUser(user: SuperUser) {
  if (isAdmin(user)) {
    console.log(`Admin role: ${user.role}`);
  } else {
    console.log(`User email: ${user.email}`);
  }
}

printSuperUser({ name: "Alice", role: "Admin" }); // Admin role: Admin
printSuperUser({ name: "Bob", email: "bob@example.com" }); // User email: bob@example.com
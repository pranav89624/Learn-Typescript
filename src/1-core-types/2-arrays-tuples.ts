// 1. Arrays (Type Annotation)
const scores: number[] = [100, 95, 90];
const names: Array<string> = ["Pranav", "Kunal", "Aman"];

console.log("Scores:", scores);
console.log("Names:", names);


// 2. Array Methods
scores.push(88);
console.log("Updated Scores:", scores);
scores.pop();
console.log("Scores after pop:", scores);

names.push("Riya");
console.log("Updated Names:", names);
names.shift();
console.log("Names after shift:", names);


// 3. Type-safe push
scores.push(85);
// scores.push("99"); // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'


// 4. Multidimensional Arrays
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Matrix:", matrix);


// 5. Array of Objects
type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 30 },
];

users.push({ name: "Charlie", age: 28 });

console.log("Users:", users);


// 6. Tuples – Fixed Size & Types
const userInfo: [string, number] = ["Pranav", 21];
// userInfo[0] = 100; // ❌ Error
// userInfo[2] = "extra"; // ❌ Error: Tuple has only 2 elements

console.log("Tuple:", userInfo);


// 7. Function Returning a Tuple
function getResponse(): [number, string] {
  return [200, "OK"];
}

const response = getResponse();
console.log("Status:", response[0], "| Message:", response[1]);


// 8. Destructuring Tuple
const [statusCode, statusMessage] = getResponse();
console.log(`Destructured → Code: ${statusCode}, Message: ${statusMessage}`);


// ---------------------------------------------
// ✅ Mini Challenges
// ---------------------------------------------

// 1. Create an array of numbers and try pushing a string
const marks: number[] = [80, 85, 90];
// marks.push("A+"); // ❌ Error

// 2. Define an array of objects with `name` and `age`
const students: { name: string; age: number }[] = [
  { name: "Riya", age: 20 },
  { name: "Dev", age: 23 },
];

// 3. Write a function that returns a tuple of [boolean, string]
function login(user: string, pass: string): [boolean, string] {
  if (user === "admin" && pass === "1234") {
    return [true, "Login successful"];
  } else {
    return [false, "Invalid credentials"];
  }
}

const [isLoggedIn, message] = login("admin", "1234");
console.log("Login Result:", isLoggedIn, "|", message);

// 4. Destructure a tuple returned from a function
const [success, msg] = login("admin", "wrong");
console.log(`Success: ${success}, Message: ${msg}`);

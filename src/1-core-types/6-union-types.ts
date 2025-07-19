// 1. Basic Union Types
let value: string | number;

value = "Hello";
value = 42;
// value = true; // ❌ Error: Type 'boolean' is not assignable to 'string | number'

console.log("Value:", value);


// 2. Union in Function Parameters
function printId(id: string | number): void {
  console.log("ID is:", id);
}

printId(101);
printId("A1B2C3");


// 3. Type Narrowing using typeof
function double(input: string | number): string | number {
  if (typeof input === "number") {
    return input * 2;
  } else {
    return input + input; // string duplication
  }
}

console.log("Double 10:", double(10));
console.log("Double 'Hi':", double("Hi"));


// 4. Discriminated Union in Objects
type SuccessResponse = {
  status: "success";
  data: string;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse) {
  if (response.status === "success") {
    console.log("✅ Data:", response.data);
  } else {
    console.log("❌ Error:", response.message);
  }
}

handleResponse({ status: "success", data: "User created" });
handleResponse({ status: "error", message: "Email already exists" });


// ---------------------------------------------
// ✅ Mini Challenges
// ---------------------------------------------

// 1. Declare a variable that can be string or null
let username: string | null = null;
username = "pranav89624";
console.log("Username:", username);

// 2. Function with boolean | "loading" | "error"
function showStatus(state: boolean | "loading" | "error"): void {
  if (state === "loading") {
    console.log("⏳ Loading...");
  } else if (state === "error") {
    console.log("❌ Something went wrong");
  } else {
    console.log(state ? "✅ Success" : "⚠️ Failed");
  }
}

showStatus("loading");
showStatus("error");
showStatus(true);

// 3. Union-based response type
type Result = { status: "ok"; user: string } | { status: "fail"; reason: string };

const res1: Result = { status: "ok", user: "Pranav" };
const res2: Result = { status: "fail", reason: "Not found" };

function processResult(result: Result): void {
  if (result.status === "ok") {
    console.log("Logged in as:", result.user);
  } else {
    console.log("Failed:", result.reason);
  }
}

processResult(res1);
processResult(res2);

// 4. typeof safety
function describeInput(input: string | number) {
  if (typeof input === "string") {
    console.log(`It's a string with length ${input.length}`);
  } else {
    console.log(`It's a number doubled: ${input * 2}`);
  }
}

describeInput("Typescript");
describeInput(99);

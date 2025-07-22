export {}

// ----------- Generic Function -----------
function identity<T>(value: T): T {
  return value;
}

const a = identity<number>(42);
const b = identity("Hello");

console.log("Generic Function - identity:");
console.log("a:", a); // 42
console.log("b:", b); // Hello

// ----------- Using any vs Generics -----------
function wrapAny(val: any) {
  return val;
}

function wrapGeneric<T>(val: T): T {
  return val;
}

const val1 = wrapAny("test");
const val2 = wrapGeneric("test");

console.log("\nAny vs Generics:");
console.log("wrapAny:", typeof val1);    // string but loses type info
console.log("wrapGeneric:", typeof val2); // string ✅

// ----------- Generic Merge Function -----------
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const mergedObj1 = merge({ name: "Alice" }, { age: 25 });
const mergedObj2 = merge({ name: "Pranav" }, { age: 20 });

console.log("\nGeneric Merge Function:");
console.log(mergedObj1); // { name: 'Alice', age: 25 }
console.log(mergedObj2); // { name: 'Alice', age: 25 }

// ----------- Generic Interface -----------
interface ApiResponse<T> {
  status: number;
  data: T;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  status: 200,
  data: { id: 1, name: "John" },
};

console.log("\nGeneric Interface:");
console.log(userResponse);

// ----------- Generic Constraint -----------
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log("\nGeneric Constraint:");
console.log(getLength("hello"));         // 5
console.log(getLength([1, 2, 3]));        // 3
console.log(getLength({ length: 42 }));  // 42

// ----------- Generic Class -----------
class Box<T> {
  content: T;
  constructor(value: T) {
    this.content = value;
  }
}

const numberBox = new Box<number>(999);
const stringBox = new Box("Generics");

console.log("\nGeneric Class:");
console.log("numberBox:", numberBox.content); // 999
console.log("stringBox:", stringBox.content); // Generics

// ----------- Default Type Parameter -----------
type Nullable<T = string> = T | null;

const n1: Nullable = "test";
const n2: Nullable<number> = 42;

console.log("\nDefault Type Parameter:");
console.log("n1:", n1); // "test"
console.log("n2:", n2); // 42

// =====================
// ✅ Mini Challenge Solutions
// =====================

// 1. firstElement<T>
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const first = firstElement([1, 2, 3]);

console.log("\nMini Challenge 1 - firstElement:");
console.log("First element:", first); // 1

// 2. ApiResult<T> interface
interface ApiResult<T> {
  success: boolean;
  payload: T;
}

const res: ApiResult<string[]> = {
  success: true,
  payload: ["apple", "banana"],
};

console.log("\nMini Challenge 2 - ApiResult:");
console.log(res);

// 3. Pair<T, U> class
class Pair<T, U> {
  first: T;
  second: U;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }
}

const pair = new Pair<number, string>(1, "one");

console.log("\nMini Challenge 3 - Pair Class:");
console.log("First:", pair.first);   // 1
console.log("Second:", pair.second); // "one"

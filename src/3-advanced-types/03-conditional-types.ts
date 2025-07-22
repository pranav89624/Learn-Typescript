export {}

// ----------- Basic Conditional Type -----------
type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<string>; // "Yes"
type B = IsString<number>; // "No"

console.log("IsString<string>:", "Yes");
console.log("IsString<number>:", "No");

// ----------- Nested Conditional Types -----------
type TypeLabel<T> = 
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  "unknown";

type Test1 = TypeLabel<true>;    // "boolean"
type Test2 = TypeLabel<123>;     // "number"
type Test3 = TypeLabel<string>;  // "string"

console.log("\nTypeLabel<true>:", "boolean");
console.log("TypeLabel<123>:", "number");
console.log("TypeLabel<string>:", "string");

// ----------- Required vs Optional -----------
type IsRequired<T> = undefined extends T ? "Optional" : "Required";

type R1 = IsRequired<string>;              // "Required"
type R2 = IsRequired<string | undefined>;  // "Optional"

console.log("\nIsRequired<string>:", "Required");
console.log("IsRequired<string | undefined>:", "Optional");

// ----------- Conditional Types with Generics -----------
type Response<T> = T extends string ? string[] : number[];

let res1: Response<"hello"> = ["h", "e", "l"];
let res2: Response<123> = [1, 2, 3];

console.log("\nGeneric Conditional Types:");
console.log("res1:", res1); // [ 'h', 'e', 'l' ]
console.log("res2:", res2); // [ 1, 2, 3 ]

// ----------- NonNullable (Recreation) -----------
type MyNonNullable<T> = T extends null | undefined ? never : T;

type NN1 = MyNonNullable<string | null>;      // string
type NN2 = MyNonNullable<number | undefined>; // number
type NN3 = MyNonNullable<null | undefined>;   // never

console.log("\nMyNonNullable<string | null>:", "string");
console.log("MyNonNullable<null | undefined>:", "never");

// =====================
// ✅ Mini Challenge Solutions
// =====================

// 1. IsArray<T>
type IsArray<T> = T extends any[] ? true : false;

type Arr1 = IsArray<string[]>;   // true
type Arr2 = IsArray<number>;     // false

console.log("\nIsArray<string[]>:", true);
console.log("IsArray<number>:", false);

// 2. Flatten<T>
type Flatten<T> = T extends (infer U)[] ? U : T;

type Flat1 = Flatten<string[]>;  // string
type Flat2 = Flatten<number>;    // number

console.log("Flatten<string[]>:", "string");
console.log("Flatten<number>:", "number");

// 3. IsUnion<T>
// Trick: Distribute over T, then compare each piece to original
type IsUnion<T, U = T> = 
  T extends any
    ? [U] extends [T]
      ? false
      : true
    : never;

type U1 = IsUnion<string>;            // false
type U2 = IsUnion<string | number>;   // true
type U3 = IsUnion<"a" | "b" | "c">;    // true
type U4 = IsUnion<never>;             // false

console.log("IsUnion<string>:", false);
console.log("IsUnion<string | number>:", true);

export {}

// ----------- ReturnType Recreation -----------
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type R1 = MyReturnType<() => string>;  // string
type R2 = MyReturnType<() => number>;  // number

console.log("MyReturnType<() => string>:", "string");
console.log("MyReturnType<() => number>:", "number");

// ----------- Extract Element Type of Array -----------
type ElementType<T> = T extends (infer U)[] ? U : T;

type E1 = ElementType<string[]>;  // string
type E2 = ElementType<number>;    // number

console.log("\nElementType<string[]>:", "string");
console.log("ElementType<number>:", "number");

// ----------- Extract Function Parameters -----------
type Params<T> = T extends (...args: infer P) => any ? P : never;

type P1 = Params<(a: number, b: string) => void>;  // [number, string]

console.log("\nParams<(a: number, b: string)>:", "[number, string]");

// ----------- Extract Object Property Type -----------
type PropertyType<T> = T extends { prop: infer R } ? R : never;

type O1 = PropertyType<{ prop: number }>;  // number
type O2 = PropertyType<{}>;                // never

console.log("\nPropertyType<{ prop: number }>: ", "number");
console.log("PropertyType<{}>: ", "never");

// =====================
// ✅ Mini Challenge Solutions
// =====================

// 1. FirstArg<T> — extracts first parameter type
type FirstArg<T> = T extends (arg1: infer A, ...rest: any[]) => any ? A : never;

type F1 = FirstArg<(a: number, b: string) => void>; // number
type F2 = FirstArg<() => void>; // never

console.log("\nFirstArg<(a: number, b: string)>:", "number");
console.log("FirstArg<() => void>:", "never");

// 2. PromiseResult<T> — extracts resolved value from Promise
type PromiseResult<T> = T extends Promise<infer R> ? R : never;

type PR1 = PromiseResult<Promise<string>>; // string
type PR2 = PromiseResult<Promise<number>>; // number
type PR3 = PromiseResult<string>;          // string (unchanged)

console.log("\nPromiseResult<Promise<string>>:", "string");
console.log("PromiseResult<string>:", "string");

// 3. UnpackArray<T> — recursively unwraps nested arrays
type UnpackArray<T> = T extends (infer U)[] ? UnpackArray<U> : T;

type UA1 = UnpackArray<string[][][]>; // string
type UA2 = UnpackArray<number[]>;     // number
type UA3 = UnpackArray<number>;       // number

console.log("\nUnpackArray<string[][][]>:", "string");

// 4. RemoveReadonly<T> — strips readonly from all properties
type RemoveReadonly<T> = {
  -readonly [K in keyof T]: T[K];
};

type ReadonlyUser = {
  readonly id: number;
  readonly name: string;
};

type MutableUser = RemoveReadonly<ReadonlyUser>; // { id: number; name: string }

const user: MutableUser = {
  id: 1,
  name: "Alice",
};

user.name = "Bob"; // ✅ Works — no readonly

console.log("\nRemoved readonly from user:", user);

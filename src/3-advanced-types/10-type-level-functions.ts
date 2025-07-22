// 🎯 Type-Level Functions (Simulated using types)

// Base type examples for testing
type SampleTuple = [string, number, boolean];
type NestedTuple = [1, [2, [3, 4]], 5];

// ✅ First<T> — Get first element of a tuple
type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never;

type F1 = First<[1, 2, 3]>; // 1
type F2 = First<[]>;        // never

console.log("First:", {} as F1);

// ✅ Length<T> — Get length of a tuple
type Length<T extends any[]> = T["length"];

type L1 = Length<[1, 2, 3]>; // 3
type L2 = Length<[]>;        // 0

console.log("Length:", {} as L1);

// ✅ Reverse<T> — Reverse a tuple
// Uses recursion to build new tuple in reverse
type Reverse<T extends any[]> = T extends [infer F, ...infer R]
  ? [...Reverse<R>, F]
  : [];

type R1 = Reverse<[1, 2, 3]>; // [3, 2, 1]
console.log("Reverse:", {} as R1);

// ✅ ToArray<T> — Wrap any type in an array
type ToArray<T> = T extends any ? T[] : never;

type Arr1 = ToArray<number>;       // number[]
type Arr2 = ToArray<"hello">;      // string[]
type Arr3 = ToArray<SampleTuple>;  // SampleTuple[]

console.log("ToArray:", {} as Arr1);

// ---------------------------------------------------
// ✅ Mini Challenges 
// ---------------------------------------------------

// 1: Last<T> — Last item of a tuple
type Last<T extends any[]> = T extends [...any[], infer L] ? L : never;

type Last1 = Last<[1, 2, 3]>;     // 3
type Last2 = Last<[]>;           // never

console.log("Last:", {} as Last1);

// 2: Push<T, U> — Add item at end
type Push<T extends any[], U> = [...T, U];

type P1 = Push<[1, 2], 3>;  // [1, 2, 3]
console.log("Push:", {} as P1);

// 3: Includes<T, U>
type Includes<T extends any[], U> = T extends [infer F, ...infer R]
  ? Equal<F, U> extends true
    ? true
    : Includes<R, U>
  : false;

// Helper type for deep comparison
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2)
    ? true
    : false;

type Inc1 = Includes<[1, 2, 3], 2>;     // true
type Inc2 = Includes<[1, 2, 3], 4>;     // false

console.log("Includes:", {} as Inc1);

// 4: Flatten<T> — Flattens one level of nesting in a tuple
type Flatten<T extends any[]> = T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...F, ...Flatten<R>]
    : [F, ...Flatten<R>]
  : [];

type Flat1 = Flatten<[1, [2, 3], 4]>; // [1, 2, 3, 4]
type Flat2 = Flatten<NestedTuple>;   // [1, 2, [3, 4], 5]

console.log("Flatten:", {} as Flat1);

// ---------------------------------------------------
// 🧠 Summary
// These are not "real" functions — just type-level simulations
// They enable advanced transformations at compile-time
// Useful for framework internals, generic libraries, safe APIs
// ---------------------------------------------------

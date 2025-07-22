export {};

//  🔧 Custom Utility Types — Implementation

// Base type for examples
type User = {
  name: string;
  age: number;
  isAdmin?: boolean;
  greet?: () => void;
};

// ---------------------------------------------
// ✅ MyPartial<T>
// Makes all fields optional
// ---------------------------------------------
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

type PartialUser = MyPartial<User>;
const pUser: PartialUser = { name: "Pranav" };
console.log("MyPartial:", pUser);

// ---------------------------------------------
// ✅ MyRequired<T>
// Makes all fields required
// ---------------------------------------------
type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

type RequiredUser = MyRequired<User>;
const rUser: RequiredUser = {
  name: "Pranav",
  age: 20,
  isAdmin: false,
  greet: () => console.log("Hello!"),
};
console.log("MyRequired:", rUser);

// ---------------------------------------------
// ✅ MyReadonly<T>
// Makes all fields readonly
// ---------------------------------------------
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type ReadonlyUser = MyReadonly<User>;
const roUser: ReadonlyUser = {
  name: "Pranav",
  age: 20,
  isAdmin: true,
};
// roUser.name = "Another"; ❌ Error
console.log("MyReadonly:", roUser);

// ---------------------------------------------
// ✅ MyPick<T, K>
// Picks subset of keys
// ---------------------------------------------
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Picked = MyPick<User, "name" | "age">;
const pickedUser: Picked = { name: "Pranav", age: 20 };
console.log("MyPick:", pickedUser);

// ---------------------------------------------
// ✅ MyOmit<T, K>
// Omits keys
// ---------------------------------------------
type MyOmit<T, K extends keyof any> = MyPick<T, Exclude<keyof T, K>>;

type Omitted = MyOmit<User, "isAdmin">;
const omUser: Omitted = { name: "Pranav", age: 20, greet: () => {} };
console.log("MyOmit:", omUser);

// ---------------------------------------------
// ✅ MyRecord<K, V>
// Creates object from keys and values
// ---------------------------------------------
type MyRecord<K extends keyof any, V> = {
  [P in K]: V;
};

type Role = "admin" | "user" | "guest";
type AccessMap = MyRecord<Role, boolean>;
const access: AccessMap = {
  admin: true,
  user: true,
  guest: false,
};
console.log("MyRecord:", access);

// ---------------------------------------------
// ✅ Mutable<T> — Removes readonly
// ---------------------------------------------
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

// ---------------------------------------------
// ✅ Nullable<T> — Makes all props nullable
// ---------------------------------------------
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// ---------------------------------------------
// ✅ DeepPartial<T> — Recursively optional
// ---------------------------------------------
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

type Complex = {
  id: number;
  info: {
    email: string;
    address: {
      street: string;
    };
  };
};

type PartialComplex = DeepPartial<Complex>;
const c: PartialComplex = {
  info: {
    address: {},
  },
};
console.log("DeepPartial:", c);

// ---------------------------------------------
// ✅ SelectByType<T, U>
// Keep only keys of type U
// ---------------------------------------------
type SelectByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
};

type BooleanFields = SelectByType<User, boolean>;
const boolFields: BooleanFields = { isAdmin: true };
console.log("SelectByType:", boolFields);

// ---------------------------------------------
// 🧪 Mini Challenges 
// ---------------------------------------------

// 1: Remove all function fields
type NonFunctionProps<T> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K];
};

type DataOnly = NonFunctionProps<User>;
const dataOnly: DataOnly = {
  name: "Pranav",
  age: 20,
  isAdmin: false,
};
console.log("NonFunctionProps:", dataOnly);

// 2: Recreate Exclude<T, U>
type MyExclude<T, U> = T extends U ? never : T;

type MyEx = MyExclude<"a" | "b" | "c", "a">; // "b" | "c"

// 3: DeepReadonly<T>
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? DeepReadonly<T[K]>
    : T[K];
};

const deep: DeepReadonly<Complex> = {
  id: 1,
  info: {
    email: "pv@example.com",
    address: {
      street: "Lane 51",
    },
  },
};
// deep.info.email = "test"; ❌ Error
console.log("DeepReadonly:", deep);

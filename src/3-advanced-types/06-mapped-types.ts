export {}

// 🔁 Basic Mapped Type Example
type User = {
  id: number;
  name: string;
  email: string;
};

//  Manually convert to optional (not scalable)
type OptionalUserManual = {
  id?: number;
  name?: string;
  email?: string;
};

// 🔁 Same using Mapped Type
type OptionalUser = {
  [K in keyof User]?: User[K];
};

const user1: OptionalUser = {
  email: "user@example.com",
};


// 🔐 Readonly Type using Mapped Type
type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};

const user2: ReadonlyUser = {
  id: 1,
  name: "John",
  email: "john@example.com",
};

// user2.name = "Jack"; ❌ Error - it's readonly

// -----------------------------------
// 🧪 Mini Challenges 
// -----------------------------------

// 1: DeepReadonly
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

type Complex = {
  id: number;
  profile: {
    username: string;
    social: {
      twitter: string;
    };
  };
};

const obj: DeepReadonly<Complex> = {
  id: 1,
  profile: {
    username: "pranav",
    social: {
      twitter: "@pv",
    },
  },
};

// obj.profile.username = "changed"; ❌ Not allowed

// 2: Flags<T> Type
type Flags<T> = {
  [K in keyof T]: true | "pending" | false;
};

type Permission = {
  read: boolean;
  write: boolean;
  execute: boolean;
};

const permissionFlags: Flags<Permission> = {
  read: true,
  write: "pending",
  execute: false,
};

console.log("Permission Flags:", permissionFlags);

// 3: Clone<T> — basic practice
type Clone<T> = {
  [K in keyof T]: T[K];
};

type ClonedUser = Clone<User>;

const u: ClonedUser = { id: 1, name: "Clone", email: "clone@me.com" };
console.log("Cloned User:", u);


// -----------------------------------
// 🧠 Bonus: Value transformation with mapped types
// -----------------------------------

type Stringify<T> = {
  [K in keyof T]: string;
};

type StringifiedUser = Stringify<User>;

const u2: StringifiedUser = {
  id: "1",
  name: "String",
  email: "text@example.com",
};
console.log("Stringified User:", u2);

// -----------------------------------
// ✅ Summary
// -----------------------------------
// Mapped types help:
// - Avoid duplication
// - Enable powerful type reuse
// - Power many built-in TypeScript utility types

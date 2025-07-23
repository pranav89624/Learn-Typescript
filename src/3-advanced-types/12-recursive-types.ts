export {};

// 🔁 Recursive Types in TypeScript

// ✅ 1. TreeNode — Recursive structure for trees
type TreeNode = {
  value: string;
  children?: TreeNode[];
};

const fileTree: TreeNode = {
  value: "root",
  children: [
    {
      value: "src",
      children: [
        { value: "index.ts" },
        { value: "app.ts" },
      ],
    },
    {
      value: "README.md",
    },
  ],
};

console.log("Tree Root:", fileTree.value);

// ✅ 2. NestedObject — Recursive key-value object
type NestedObject = {
  [key: string]: string | NestedObject;
};

const nestedConfig: NestedObject = {
  database: {
    host: "localhost",
    credentials: {
      user: "admin",
      pass: "1234",
    },
  },
};

console.log("Nested DB Host:", (nestedConfig.database as NestedObject).host);

// ✅ 3. DeepPartial<T> — Recursive utility type
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

type AppConfig = {
  db: {
    host: string;
    port: number;
  };
  featureFlags: {
    beta: boolean;
    newUI: boolean;
  };
};

const partialUpdate: DeepPartial<AppConfig> = {
  db: {
    port: 5432,
  },
};

// ---------------------------------------------
// 🧪 Mini Challenges
// ---------------------------------------------

// 1: Nested Comment Thread
type Comment = {
  id: number;
  text: string;
  replies?: Comment[];
};

const thread: Comment = {
  id: 1,
  text: "Top-level comment",
  replies: [
    {
      id: 2,
      text: "Reply 1",
      replies: [
        {
          id: 3,
          text: "Reply to reply",
        },
      ],
    },
  ],
};

console.log("Thread root:", thread.text);

// 2: Flatten<T> — Recursive flattening of arrays
type Flatten<T> = T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...Flatten<F>, ...Flatten<R>]
    : [F, ...Flatten<R>]
  : [];

type Nested = [1, [2, [3, [4]]]];
type FlatResult = Flatten<Nested>; // Expected: [1, 2, 3, 4]

console.log("Flattened:", {} as FlatResult);

// 3: NestedArray<T>
// Allows arbitrary depth of nesting
type NestedArray<T> = T | NestedArray<T>[];

const deepNumbers: NestedArray<number> = [1, [2, [3, [4]]]];
const mixedNested: NestedArray<string> = ["a", ["b", ["c", ["d"]]]];

console.log("Nested numbers:", deepNumbers);


// ---------------------------------------------
// ✅ Summary
// Recursive types are key to handling deeply nested data.
// Use them for JSON, trees, deep updates, and complex type transformations.
// ---------------------------------------------

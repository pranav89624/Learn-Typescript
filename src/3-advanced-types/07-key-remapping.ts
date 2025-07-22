export {}

// 🔁 1. Basic Key Remapping with Prefix
type Config = {
  host: string;
  port: number;
};

// 🔁 Prefix all keys with "db_"
type Prefixed<T> = {
  [K in keyof T as `db_${string & K}`]: T[K];
};

type DBConfig = Prefixed<Config>;

const dbConfig: DBConfig = {
  db_host: "localhost",
  db_port: 5432,
};

console.log("DB Config:", dbConfig);

// 🧼 2. Strip Private Fields
type Person = {
  name: string;
  age: number;
  _token: string;
};

type PublicProps<T> = {
  [K in keyof T as K extends `_${string}` ? never : K]: T[K];
};

type PublicPerson = PublicProps<Person>;

const publicPerson: PublicPerson = {
  name: "Pranav",
  age: 20,
  // _token: "secret", ❌ Not allowed
};

console.log("Public Person:", publicPerson);

// --------------------------------------
// 🧪 Mini Challenges 
// --------------------------------------

// 1: Getters<T>
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type Product = {
  id: number;
  name: string;
};

type ProductGetters = Getters<Product>;

const productGetters: ProductGetters = {
  getId: () => 101,
  getName: () => "Typescript Course",
};

console.log("Product Getters:", productGetters.getName());

// 2: RemoveFunctions<T>

type Sample = {
  id: number;
  name: string;
  update: () => void;
};

type RemoveFunctions<T> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K];
};

type WithoutFunctions = RemoveFunctions<Sample>;

const sample: WithoutFunctions = {
  id: 123,
  name: "Clean Object",
  // update: () => {}, ❌ Function removed
};

console.log("Sample Without Functions:", sample);

// --------------------------------------
// ⚠️ Advanced: Optional Challenge 3
// SnakeCase conversion, requires template literal logic
// (This is just illustrative and not full conversion logic)
type SnakeCaseProps<T> = {
  [K in keyof T as K extends string
    ? `snake_${K}`
    : never]: T[K];
};

type MixedCase = {
  userName: string;
  userAge: number;
};

type SnakeCased = SnakeCaseProps<MixedCase>;

const snakeObj: SnakeCased = {
  snake_userName: "Pranav",
  snake_userAge: 20,
};

console.log("Snake Cased:", snakeObj);


// --------------------------------------
// ✅ Summary
// --------------------------------------
// - Key remapping is powerful when transforming API/DTO types
// - You can rename, filter, or add prefixes dynamically
// - Combine with conditional types to filter keys (e.g., remove private or function keys)

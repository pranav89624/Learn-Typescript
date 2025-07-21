export {};

// 🧩 Optional & Readonly in TypeScript

// ✅ Optional Property Example
interface User {
  name: string;
  age?: number; // optional
}

const user1: User = {
  name: "Pranav",
};

const user2: User = {
  name: "Verma",
  age: 20,
};

console.log(user1, user2);


// ✅ Readonly Property Example
interface Account {
  readonly id: number;
  email: string;
}

const acc: Account = {
  id: 1001,
  email: "pranav@example.com",
};

// acc.id = 2002; ❌ Error: Cannot assign to 'id' because it is a read-only property.


// ✅ Combined Example
interface Config {
  readonly apiKey?: string;
}

const config1: Config = {};
const config2: Config = { apiKey: "ABC123" };

// config2.apiKey = "NEWKEY"; ❌ Error if key exists and readonly


// --------------------------------------------------
// 🧪 Mini Challenges 
// --------------------------------------------------

// 1: Product Interface
interface Product {
  readonly id: number;
  name: string;
  description?: string;
}

const item: Product = {
  id: 1,
  name: "Tea Mug",
};

// item.id = 99; ❌ Error: Cannot reassign readonly id

console.log(item);


// 2: Settings Interface
interface Settings {
  theme?: string;
  readonly version: number;
}

const appSettings: Settings = {
  version: 2,
  theme: "dark",
};

// appSettings.version = 3; ❌ Error: Cannot reassign readonly version

console.log(appSettings);

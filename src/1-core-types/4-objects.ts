// 1. Basic Object Typing
const user: { name: string; age: number } = {
  name: "Pranav",
  age: 20,
};

console.log("User:", user.name, "| Age:", user.age);


// 2. Optional Properties
const product: { name: string; price?: number } = {
  name: "Laptop",
};

console.log("Product:", product.name, "| Price:", product.price); // price is undefined


// 3. Extra Property Check (Freshness Check)
function printUser(user: { name: string }) {
  console.log("User name:", user.name);
}

// printUser({ name: "Ravi", age: 25 }); // ❌ Error: Object literal may only specify known properties

const person = { name: "Ravi", age: 25 };
printUser(person); // ✅ Allowed


// 4. Object as Function Parameter with Inline Type
function greetUserInline(user: { name: string; isLoggedIn: boolean }) {
  return `Hello, ${user.isLoggedIn ? user.name : "Guest"}`;
}

console.log(greetUserInline({ name: "Aman", isLoggedIn: true }));


// 5. Object Typing with Type Alias
type LoggedInUser = {
  name: string;
  isLoggedIn: boolean;
};

function welcome(user: LoggedInUser): string {
  return `Welcome back, ${user.name}`;
}

console.log(welcome({ name: "Riya", isLoggedIn: true }));


// 6. Readonly Properties
const config: { readonly port: number } = {
  port: 8080,
};

// config.port = 3000; // ❌ Error: Cannot assign to 'port' because it is a read-only property
console.log("Config Port:", config.port);


// 7. Nested Object
type Address = {
  city: string;
  zip: number;
};

type Customer = {
  name: string;
  address: Address;
};

const customer: Customer = {
  name: "Asha",
  address: {
    city: "Delhi",
    zip: 110001,
  },
};

console.log(`${customer.name} lives in ${customer.address.city}`);


// ---------------------------------------------
// ✅ Mini Challenges
// ---------------------------------------------

// 1. Blog Post Object
const blogPost: { title: string; content: string; tags?: string[] } = {
  title: "Understanding TypeScript",
  content: "TypeScript adds type safety to JavaScript...",
};

console.log("Blog Title:", blogPost.title);

// 2. Function accepting User object
function logUser(user: { name: string }) {
  console.log("Logged in user:", user.name);
}
logUser({ name: "Pranav" });

// 3. Passing extra properties to a function
// logUser({ name: "Rahul", age: 23 }); // ❌ Error due to excess property

const tempUser = { name: "Rahul", age: 23 };
logUser(tempUser); // ✅ Works via variable reference

// 4. Nested Order Object
type Order = {
  items: string[];
  shippingAddress: {
    street: string;
    city: string;
    zip: number;
  };
};

const order: Order = {
  items: ["Book", "Pen"],
  shippingAddress: {
    street: "MG Road",
    city: "Mumbai",
    zip: 400001,
  },
};

console.log("Shipping to:", order.shippingAddress.city);

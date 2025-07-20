export {};

// 🔹 01 – Classes & Objects in TypeScript

// ⚠️ We're using `!` (Definite Assignment Assertion) to bypass TS error for now,
// this will be improved in the next section using constructors.
// (The limitation I am talking about in the notes.)

// This tells TypeScript: “I promise I’ll assign this before using it.”

class User {
  name!: string; // NOTE: Definite assignment assertion used here
  age!: number;

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const user1 = new User();
user1.name = "Pranav";
user1.age = 20;
user1.greet(); // Hello, my name is Pranav and I am 20 years old.

// ⚠️ No constructor, manual property assignment after instantiation
class Product {
  title!: string; // NOTE: Will move to constructor next section
  price!: number;

  displayInfo() {
    console.log(`${this.title} costs ₹${this.price}`);
  }
}

const item1 = new Product();
item1.title = "Tea Mug";
item1.price = 150;
item1.displayInfo(); // Tea Mug costs ₹150


// ------------------------------------------------
// 🧪 Mini Challenges – Solutions
// ------------------------------------------------

class Book {
  title!: string; // All properties asserted with !
  author!: string;
  pages!: number;

  summary() {
    console.log(`"${this.title}" by ${this.author}, ${this.pages} pages.`);
  }
}

const book1 = new Book();
book1.title = "Atomic Habits";
book1.author = "James Clear";
book1.pages = 320;
book1.summary(); // "Atomic Habits" by James Clear, 320 pages.

const book2 = new Book();
book2.title = "The Subtle Art of Not Giving a Fuck";
book2.author = "Mark Manson";
book2.pages = 224;
book2.summary(); // "The Subtle Art of Not Giving a Fuck" by Mark Manson, 224 pages.

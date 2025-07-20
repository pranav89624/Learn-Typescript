export {};

// 🔹 02 – Constructors in TypeScript

// ✅ Basic constructor example
class User {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const user1 = new User("Pranav", 20);
user1.greet(); // Hello, my name is Pranav and I am 20 years old.

// ✅ Shortcut constructor syntax
class Product {
  constructor(public title: string, public price: number) {}

  displayInfo() {
    console.log(`${this.title} costs ₹${this.price}`);
  }
}

const item1 = new Product("Tea Mug", 150);
item1.displayInfo(); // Tea Mug costs ₹150


// ------------------------------------------------
// 🧪 Mini Challenge Solutions
// ------------------------------------------------

// 1. Rewrite the Book class with a constructor
class Book {
  constructor(
    public title: string,
    public author: string,
    public pages: number
  ) {}

  summary() {
    console.log(`"${this.title}" by ${this.author}, ${this.pages} pages.`);
  }
}

const book1 = new Book("Atomic Habits", "James Clear", 320);
book1.summary();

const book2 = new Book("Zero to One", "Peter Thiel", 224);
book2.summary();

// 2. Movie class with shortcut constructor
class Movie {
  constructor(
    public title: string,
    public director: string,
    public rating: number
  ) {}

  print() {
    console.log(`${this.title} by ${this.director} rated ${this.rating}/10`);
  }
}

const m1 = new Movie("Inception", "Christopher Nolan", 9.2);
m1.print();

// 3. Circle class with area calculation
class Circle {
  constructor(public radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const c1 = new Circle(5);
console.log("Circle Area:", c1.area()); // ~78.54

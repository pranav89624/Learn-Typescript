export {};

// 🔹 06 – Getters & Setters in TypeScript

// ✅ Basic usage of getter and setter
class User {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      throw new Error("Age cannot be negative.");
    }
    this._age = value;
  }
}

const u = new User();
u.age = 25;
console.log("User age:", u.age); // User age: 25

// u.age = -10; // ❌ Throws error


// ------------------------------------------------
// 🧪 Mini Challenge 
// ------------------------------------------------

// 1: Product class with price
class Product {
  private _price: number;

  constructor(initialPrice: number) {
    this._price = initialPrice;
  }

  get price(): string {
    return `₹${this._price}`;
  }

  set price(value: number) {
    if (value < 0) {
      throw new Error("Price cannot be negative.");
    }
    this._price = value;
  }
}

const p = new Product(100);
console.log(p.price); // ₹100
p.price = 250;
console.log(p.price); // ₹250

// p.price = -50; // ❌ Throws error


// 2: Temperature class
class Temperature {
  private _celsius: number;

  constructor(celsius: number) {
    this._celsius = celsius;
  }

  get fahrenheit(): number {
    return this._celsius * 1.8 + 32;
  }

  set fahrenheit(value: number) {
    this._celsius = (value - 32) / 1.8;
  }

  get celsius(): number {
    return this._celsius;
  }
}

const t = new Temperature(0);
console.log("Fahrenheit:", t.fahrenheit); // 32
t.fahrenheit = 100;
console.log("Celsius after setting Fahrenheit to 100:", t.celsius); // ~37.78

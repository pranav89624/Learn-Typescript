export {};

// 🔹 07 – Static Members in TypeScript

// ✅ Basic Example of Static Property & Method
class AppConfig {
  static appName: string = "SynCodeX";
  static version: string = "1.0.0";

  static logDetails() {
    console.log(`🔧 ${AppConfig.appName} v${AppConfig.version}`);
  }
}

AppConfig.logDetails(); // 🔧 SynCodeX v1.0.0
// console.log(AppConfig.appName); // ✅ Access without instance


// ✅ Static members vs instance members
class Dog {
  name: string;
  static numLegs = 4;

  constructor(name: string) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} barks 🐶`);
  }
}

const dog1 = new Dog("Charlie");
dog1.bark();
console.log(`${dog1.name} has ${Dog.numLegs} legs.`); // ✅ static accessed via class


// ------------------------------------------------
// 🧪 Mini Challenge 
// ------------------------------------------------

// 1: MathUtil class
class MathUtil {
  static add(a: number, b: number): number {
    return a + b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }
}

console.log("Add:", MathUtil.add(5, 7));       // 12
console.log("Multiply:", MathUtil.multiply(3, 4)); // 12


// 2: User counter with static property
class User {
  static totalUsers: number = 0;
  name: string;

  constructor(name: string) {
    this.name = name;
    User.totalUsers++; // increment on each creation
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const u1 = new User("Pranav");
const u2 = new User("Rohit");
const u3 = new User("Virat");
const u4 = new User("Dhoni");

console.log("Total users created:", User.totalUsers); // 4

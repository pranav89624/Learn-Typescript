export {}; // Ignore this line for now.

// 🧩 Interfaces – Examples
// Basic interface
interface User {
  name: string;
  age: number;
}

const user1: User = {
  name: "Alice",
  age: 30,
};

console.log("user1 : \n", user1);

// Interface extension
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}

const emp1: Employee = {
  name: "Bob",
  employeeId: 101,
};

console.log("emp1 : \n", emp1);

// Declaration merging
interface User {
  name: string;
}

interface User {
  age: number;
}

// Resulting User interface has both name and age
const user: User = { name: "Bob", age: 25 };

console.log("user : \n", user);

// -----------------------------
// 🧪 Mini Challenges Solutions
// -----------------------------

// 1. Define an interface for a Car
interface Car {
  make: string;
  model: string;
  year: number;
}

// 2. Extend the Car interface to ElectricCar
interface ElectricCar extends Car {
  batteryCapacity: number; // in kWh
}

// 3. Use declaration merging to add a method getAge(): number to Car
interface Car {
  getAge(): number;
}

// 4. Create a variable with your merged Car interface and implement the method
const myCar: Car = {
  make: "Tesla",
  model: "Model 3",
  year: 2020,
  getAge() {
    let age = new Date().getFullYear() - this.year;
    return age;
  },
};

console.log("myCar : \n", myCar);
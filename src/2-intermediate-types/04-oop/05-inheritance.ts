export {};

// 🔹 05 – Inheritance in TypeScript

// ✅ Basic Inheritance with `extends`
class Animal {
  move() {
    console.log("Animal is moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog is barking 🐶");
  }
}

const d = new Dog();
d.move(); // ✅ inherited method
d.bark(); // ✅ subclass method


// ✅ Constructor Inheritance using `super(...)`
class Vehicle {
  constructor(public brand: string) {}

  drive() {
    console.log(`${this.brand} vehicle is moving...`);
  }
}

class Car extends Vehicle {
  constructor(brand: string, public model: string) {
    super(brand); // ✅ Call parent constructor first
  }

  displayInfo() {
    console.log(`Car: ${this.brand} ${this.model}`);
  }
}

const car1 = new Car("Tesla", "Model 3");
car1.drive(); // Tesla vehicle is moving...
car1.displayInfo(); // Car: Tesla Model 3


// ✅ Method Overriding & Calling `super` logic
class Bike extends Vehicle {
  constructor(brand: string) {
    super(brand);
  }

  drive() {
    super.drive(); // ✅ include base logic
    console.log(`${this.brand} bike is zipping through traffic 🏍️`);
  }
}

const bike1 = new Bike("Yamaha");
bike1.drive();
// Yamaha vehicle is moving...
// Yamaha bike is zipping through traffic 🏍️


// ------------------------------------------------
// 🧪 Mini Challenge 
// ------------------------------------------------

// 1: Base + Subclass
class Transport {
  drive() {
    console.log("Transport is moving...");
  }
}

class Truck extends Transport {
  loadCargo() {
    console.log("Truck is loading cargo 🚚");
  }
}

const t = new Truck();
t.drive(); // ✅ inherited
t.loadCargo(); // ✅ own method


// 2: Constructor in Base + Child
class Appliance {
  constructor(public brand: string) {}

  turnOn() {
    console.log(`${this.brand} appliance is now ON`);
  }
}

class WashingMachine extends Appliance {
  constructor(brand: string, public capacity: number) {
    super(brand);
  }

  wash() {
    console.log(`${this.brand} washing ${this.capacity}kg of clothes`);
  }
}

const wm = new WashingMachine("LG", 7);
wm.turnOn();
wm.wash();


// 3: Override & use `super.drive()`
class Scooter extends Vehicle {
  constructor(brand: string) {
    super(brand);
  }

  drive() {
    super.drive();
    console.log(`${this.brand} scooter is eco-friendly 🛴`);
  }
}

const sc = new Scooter("Ather");
sc.drive();
// Ather vehicle is moving...
// Ather scooter is eco-friendly 🛴

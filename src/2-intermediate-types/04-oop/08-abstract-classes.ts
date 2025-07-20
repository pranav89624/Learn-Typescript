export {};

// 🔹 08 – Abstract Classes in TypeScript

// ✅ Basic Example of Abstract Class
abstract class Animal {
  abstract makeSound(): void; // must be implemented by subclasses

  move(): void {
    console.log("Animal is moving...");
  }
}

// const a = new Animal(); //❌ Error: Cannot create an instance of abstract class

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow!");
  }
}

const d = new Dog();
d.makeSound(); // Woof!
d.move();      // Animal is moving...

const c = new Cat();
c.makeSound(); // Meow!
c.move();      // Animal is moving...


// --------------------------------------------------
// 🧪 Mini Challenge 1: Shape base + subclasses
// --------------------------------------------------

abstract class Shape {
  constructor(public name: string) {}

  abstract getArea(): number;

  describe(): void {
    console.log(`This is a ${this.name}`);
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super("Circle");
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super("Rectangle");
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(4, 6),
];

shapes.forEach((shape) => {
  shape.describe();
  console.log("Area:", shape.getArea());
});

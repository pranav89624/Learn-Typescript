# 🧠 Object-Oriented Programming in TypeScript

Welcome to the most important section of intermediate TypeScript, **Object-Oriented Programming** (OOP).  
This isn't just an academic detour, this is how you write **production-grade code**.

---

## 🧭 What You’ll Learn

By the end of this section, you’ll be able to:

✅ Structure applications using **classes and objects**  
✅ Create **constructors** to initialize objects  
✅ Use **`this` keyword** accurately  
✅ Use **access modifiers** (`public`, `private`, `protected`) to protect logic  
✅ Build powerful hierarchies with **inheritance**   
✅ Work with **getters, setters, static members**, and **abstract classes**  
✅ Apply real-world **OOP patterns** that are useful in backend services, libraries, and even frontend apps

---
## 🎯 What is Object Oriented Programming?

Object Oriented Programming (OOP) is a **programming paradigm** built around the concept of **objects**, real-world entities that group both **data** (properties) and **behavior** (methods).

---

## 🧩 Why OOP in TypeScript?

While JavaScript supports prototypes and class syntax, TypeScript makes OOP **strict, safe, and scalable**.

> TS brings true OOP like capabilities, enforced by types and supported by tooling.

This makes it ideal for:

- Larger teams
- API-heavy applications
- Systems with business logic and permission models
- Real-world roles like **auth systems**, **ORMs**, **domain-driven design**

---

## 💬 In Dev Terms

> OOP helps you build **scalable, maintainable, and testable applications** by giving structure to your code and hiding unnecessary complexity.

TypeScript adds type safety and compiler checks to this making it feel like writing Java, C#, or Swift, but in JavaScript’s ecosystem.

---

### 🗂️ How This Folder Is Structured

I'll break OOP into multiple bite-sized files.  
Follow them **in order** each builds on the previous:

```plaintext
04-oop/
├── 01-classes-objects.ts
├── 02-constructors.ts
├── 03-this-keyword.ts
├── 04-access-modifiers.ts
├── 05-inheritance.ts
├── 06-getters-setters.ts
├── 07-static-members.ts
├── 08-abstract-classes.ts
├── 09-oop-patterns.ts
└── oop-notes.md
```
---

## 🚀 Start Now

Begin with [`01-classes-objects.ts`](./01-classes-objects.ts) to learn how to create and use classes and objects in TypeScript, the building block of OOP.

Let’s bring structure, scalability, and sanity to your codebase. 💥

---

## Section 1 – Classes & Objects in TypeScript ([01-classes-objects.ts](./01-classes-objects.ts))

### 💡 What is a Class?

A **class** is a blueprint for creating objects with specific properties and methods.

Think of it like a template — you define what every "thing" of a certain type should have, and then you use it to build many actual "things" (objects).


### 👤 What is an Object?

An **object** is a real instance of a class.  
It holds the actual data and can call the class methods.

### ✅ Syntax Overview

```ts
class User {
  name: string;
  age: number;

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const user1 = new User();
user1.name = "Pranav";
user1.age = 20;
user1.greet();
// Output: Hello, my name is Pranav and I am 20 years old.
```

### 🛠️ Key Concepts

1. Properties (Fields)

    Defined inside a class and describe the data that belongs to each instance.

    ```ts
    class Product {
    title: string;
    price: number;
    }
    ```

2. Methods (Functions)

    Defined inside a class and describe the data that belongs to each instance.

    ```ts
    class Product {
    title: string;
    price: number;

    displayInfo() {
        console.log(`${this.title} costs ₹${this.price}`);
    }
    }
    ```

3. The `new` Keyword

    Used to create (instantiate) an object from a class.

### ⚠️ Without Constructor?

In this file, we’ll assign values after instantiation, not through constructors — that’s coming next in [`02-constructors.ts`](./02-constructors.ts)

```ts
const p = new Product();
p.title = "Tea Mug";
p.price = 150;
```
This approach works, but has limitations, which we’ll fix in the next section.

### 🚀 Real-World Analogy
> A class is like a cookie cutter, and each object is a cookie.

You define one cutter (class), but make many cookies (objects) from it, all shaped the same way but with different toppings (data).

### 🧪 Mini Challenges
Try these out before moving on:

1. Create a `Book` class with `title`, `author`, and `pages`.
2. Add a method `summary()` that logs a string like:<br >
   <small>`"<title>" by <author>, <pages> pages.`</small>
3. Instantiate two `Book` objects and call their `summary()` method.

---

## Section 2 – Constructors in TypeScript ([02-constructors.ts](./02-constructors.ts))

### 🧠 What is a Constructor?

A **constructor** is a special method that runs when a class is instantiated using `new`.  
It allows you to **initialize values up front**, rather than assigning them later.

Without a constructor:
```ts
const user = new User();
user.name = "Pranav"; // feels repetitive and unsafe
```
With a constructor:
```ts
const user = new User("Pranav", 20); // clean, concise, and type-safe
```

### 🛠️ Defining a Constructor

```ts
class User {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}
```
Now, properties are initialized immediately, and TypeScript is happy.

### ⚠️ Why We Used `!` Earlier
In the last file, we used ! to silence TypeScript's complaint about uninitialized properties:

```ts
name!: string;
```
> This works, but it’s risky, you might forget to assign the values before accessing them.

Using constructors solves this cleanly.

### ✅ Shortcut Syntax (Cleaner TS Style)
TypeScript allows you to define and assign properties directly from the constructor:
```ts
class User {
  constructor(public name: string, public age: number) {}
}
```
This does:

- Declare `name` and `age` as public properties
- Assign values passed into constructor
- All in a single line

### 🚀 Real-World Analogy
> A constructor is like a factory that builds your object with all the necessary parts already in place.
You walk in, specify what you need, and walk out with a fully assembled product.

### 🧪 Mini Challenges

1. Rewrite the `Book` class to use a constructor for title, author, and pages
2. Use the shortcut syntax in a new `Movie` class with title, director, and rating
3. Create a class `Circle` with radius in constructor and a method to calculate 
    ```ts
    area() => Math.PI * r * r
    ```

--- 

## Section 3 – The `this` Keyword in TypeScript ([03-this-keyword.ts](./03-this-keyword.ts))

### 🧠 What is `this`?
`this` is a special keyword that refers to the **current instance** of a class.
It allows you to access properties and methods of the object you are working with.

### 🛠️ Using `this` in Methods

When you define methods inside a class, you use `this` to refer to the instance:

```ts
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I’m ${this.name}`);
  }
}
```
Here, `this.name` refers to the `name` property of the object created using `new User()`.

### ⚠️ Common `this` Pitfalls
If you pass a class method as a callback, `this` may no longer refer to your object:
```ts
const user = new User("Pranav");
setTimeout(user.greet, 1000); // ❌ `this` becomes undefined or window
```
This happens because `setTimeout` changes the context in which `greet()` is called.

### ✅ Fixing this with Arrow Functions
Arrow functions do not redefine `this`, they inherit it from their surrounding context.

```ts
class User {
  constructor(public name: string) {}

  greet = () => {
    console.log(`Hi, I’m ${this.name}`);
  };
}
```
Now:
```ts 
const user = new User("Pranav");
setTimeout(user.greet, 1000); // ✅ works as expected
```

### 🚀 Real-World Analogy

> `this` is like a personal assistant that knows which object you are currently working with.<br>
When you say "get my name", it knows to look in the right place.

### 🧪 Mini Challenges

1. Create a `Timer` class with a `start()` method that logs `"Timer started..."` after 1 second. Use both a regular function and an arrow function.
    - Compare what happens to `this` in both.

2. Create a `Greeter` class with a `sayHello()` method. Pass it to `setTimeout` and see how to preserve `this`.

> 🧠 Rule of Thumb: If you’re passing class methods around (e.g. to event handlers or timers), use arrow functions to keep `this` safe.

---

## Section 4 – Access Modifiers in TypeScript ([04-access-modifiers.ts](./04-access-modifiers.ts))

### 🧠 What Are Access Modifiers?

Access modifiers are keywords that control where class properties and methods can be accessed from.

### 🛠️ Types of Access Modifiers

1. **Public**: The default modifier. Members are accessible from anywhere.
2. **Private**: Members are only accessible within the class.
3. **Protected**: Members are accessible within the class and its subclasses.

---

### 🔓 `public` (default)

- Accessible **from anywhere** — inside or outside the class
- You don’t need to explicitly write `public` (but you can)

```ts
class User {
  public name: string = "Pranav";
}
const u = new User();
console.log(u.name); // ✅ allowed
```

### 🔒 `private`
- Accessible only inside the class
- Used to hide internal logic or implementation details

```ts
class BankAccount {
  private balance: number = 1000;

  showBalance() {
    console.log(`Your balance is ₹${this.balance}`);
  }
}

const acc = new BankAccount();
// acc.balance ❌ Error: Property 'balance' is private
acc.showBalance(); // ✅ Works
```

### 🧱 `protected`
Like `private`, but also accessible inside child classes

```ts
class Animal {
  protected sound: string = "Some sound";
}

class Dog extends Animal {
  bark() {
    console.log(this.sound); // ✅ allowed because it's a subclass
  }
}
```

### 🛡️ Why Use Access Modifiers?
- ✅ Prevent misuse or modification of internal properties
- ✅ Enforce boundaries and abstraction
- ✅ Write maintainable and secure code
- ✅ Make your code self-documenting by showing intent
- ✅ Help TypeScript catch errors at compile time
- ✅ Allow you to change implementation details without breaking external code

### 🚀 Real-World Analogy
> Access modifiers are like security guards at a building.
- **Public** areas are open to everyone.
- **Private** areas are restricted to authorized personnel.
- **Protected** areas are accessible to authorized personnel and their guests.

### 🧪 Mini Challenges

1. Create a class `Person` with a `name` (public) and `ssn` (private) field
    - <small>Try accessing both from outside</small>

2. Create a class `Employee` with a `protected` method `logWork()`
    - <small>Extend it with a `Developer` class and call `logWork()` from there</small>

3. Use a method in the parent class to safely access a `private` property instead of exposing it directly

---

## Section 5 – Inheritance in TypeScript ([05-inheritance.ts](./05-inheritance.ts))

### 🧠 What is Inheritance?

Inheritance is the mechanism that allows one class (child) to inherit properties and methods from another class (parent).

> It’s how we **reuse code** across similar types and define hierarchies.


### 🧱 Base & Derived Classes

- The **base class** (aka parent or super class) holds common logic
- The **derived class** (aka child or subclass) adds or overrides functionality

```ts
class Animal {
  move() {
    console.log("Animal is moving");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.move(); // ✅ inherited
d.bark(); // ✅ own method
``` 

### 🧠 The `super()` Keyword
When the parent class has a constructor, the child **must** call it using `super(...)`, before accessing `this`.

```ts
class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name); // ✅ must call super()
  }
}
```

### ✅ Why Use Inheritance?
- Reuse logic across multiple classes
- DRY (Don't Repeat Yourself) principle
- Build layered, clean, hierarchical designs

### ❗ Don't Abuse It
Use inheritance for shared behavior, not just to "organize code." If things don’t share real functionality, composition might be better than inheritance.

### 🚀 Real-World Analogy
> Inheritance is like a family tree.
- The **parent** class is like a parent who passes down traits to their children.
- The **child** class inherits those traits but can also have its own unique features.

### 🧪 Mini Challenges
1. Create a base class `Vehicle` with a `drive()` method <br>
<small>Then create `Car` and `Bike` subclasses that extend it and add their own methods.</small>

2. Add a constructor in `Vehicle` and call it from `Car` using `super(...)`

3. Override the `drive()` method in `Car` to include `"Car is driving"` <br>
<small>Use `super.drive()` inside the override to include base logic too.</small>


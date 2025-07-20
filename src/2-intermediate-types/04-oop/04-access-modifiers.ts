export {};

// 🔹 04 – Access Modifiers in TypeScript

// ✅ public (default) – accessible from anywhere
class PublicUser {
  public name: string = "Pranav";
}

const pu = new PublicUser();
console.log("Public User Name:", pu.name); // ✅ allowed


// 🔒 private – only accessible inside the class
class BankAccount {
  private balance: number = 1000;

  showBalance() {
    console.log(`Your balance is ₹${this.balance}`);
  }
}

const acc = new BankAccount();
// console.log(acc.balance); // ❌ Error: Property 'balance' is private
acc.showBalance(); // ✅ Your balance is ₹1000


// 🧱 protected – accessible in class + subclasses
class Animal {
  protected sound: string = "Generic sound";

  makeSound() {
    console.log(`Animal makes: ${this.sound}`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`Dog says: ${this.sound}`); // ✅ Accessible due to protected
  }
}

const dog = new Dog();
dog.bark(); // Dog says: Generic sound
// console.log(dog.sound); // ❌ Error: 'sound' is protected


// ------------------------------------------------
// 🧪 Mini Challenge 
// ------------------------------------------------

// 1: Public + Private fields
class Person {
  public name: string;
  private ssn: string;

  constructor(name: string, ssn: string) {
    this.name = name;
    this.ssn = ssn;
  }

  getSSN() {
    return `SSN is: ${this.ssn}`;
  }
}

const p1 = new Person("Pranav", "123-45-6789");
console.log(p1.name);       // ✅ Pranav
// console.log(p1.ssn);     // ❌ Property 'ssn' is private
console.log(p1.getSSN());   // ✅ Accessed via method


// 2: Protected method + subclass
class Employee {
  protected logWork() {
    console.log("Employee is working...");
  }
}

class Developer extends Employee {
  doDevWork() {
    this.logWork(); // ✅ Accessible here
    console.log("Writing TypeScript...");
  }
}

const dev = new Developer();
dev.doDevWork(); // ✅ Works fine
// dev.logWork(); // ❌ Error: 'logWork' is protected


// 3: Safe access to private property
class SafeVault {
  private code: string = "42ABC";

  getCodeIfAuthorized(auth: boolean): string {
    return auth ? this.code : "Unauthorized";
  }
}

const vault = new SafeVault();
console.log(vault.getCodeIfAuthorized(true));  // ✅ 42ABC
console.log(vault.getCodeIfAuthorized(false)); // ❌ Unauthorized

export {};

// 🔹 03 – The `this` Keyword in TypeScript

// ✅ Basic usage: `this` inside class refers to the current instance
class User {
  constructor(public name: string) {}

  greet() {
    console.log(`Hi, I’m ${this.name}`);
  }
}

const user = new User("Pranav");
user.greet(); // Hi, I’m Pranav

// ⚠️ Problem: `this` is lost in callback
setTimeout(user.greet, 1000); // ❌ this becomes undefined or global object in non-strict mode

// ✅ Fix: Use arrow function to preserve `this`
class SafeUser {
  constructor(public name: string) {}

  greet = () => {
    console.log(`(Safe) Hi, I’m ${this.name}`);
  };
}

const safeUser = new SafeUser("Pranav");
setTimeout(safeUser.greet, 1000); // ✅ (Safe) Hi, I’m Pranav


// ------------------------------------------------
// 🧪 Mini Challenges 
// ------------------------------------------------

// 1: Timer class comparison
class TimerBroken {
  start() {
    setTimeout(function () {
      // ❌ `this` is undefined here
    //   console.log("TimerBroken -> Timer started (this):", this);
    }, 1000);
  }
}

class TimerFixed {
  start() {
    setTimeout(() => {
      // ✅ arrow function captures outer `this`
      console.log("TimerFixed -> Timer started (this):", this);
    }, 1000);
  }
}

const t1 = new TimerBroken();
t1.start(); // ❌ Logs: undefined

const t2 = new TimerFixed();
t2.start(); // ✅ Logs: TimerFixed {}

// 2: Greeter class in setTimeout
class Greeter {
  constructor(public name: string) {}

  sayHello() {
    console.log(`Hello from ${this.name}`);
  }

  sayHelloArrow = () => {
    console.log(`(Arrow) Hello from ${this.name}`);
  };
}

const g = new Greeter("Code Master");

setTimeout(g.sayHello, 1000); // ❌ this is undefined or window
setTimeout(g.sayHelloArrow, 1500); // ✅ (Arrow) Hello from Code Master

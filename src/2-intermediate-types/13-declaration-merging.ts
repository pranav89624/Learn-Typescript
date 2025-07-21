export {};

// 🔀 Declaration Merging in TypeScript

// --- Interface Merging ---
interface Car {
  make: string;
  model: string;
}

interface Car {
  year: number;
}

// Now Car has all three properties: make, model, year
const myCar: Car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

console.log(myCar);

// --- Namespace Merging ---
namespace Utils {
  export function greet(name: string): void {
    console.log(`Hello, ${name}!`);
  }
}

namespace Utils {
  export function farewell(name: string): void {
    console.log(`Goodbye, ${name}!`);
  }
}

// Both functions are accessible on Utils namespace
Utils.greet("Pranav");
Utils.farewell("Pranav");

// --- Function + Namespace Merging ---
function counter() {
  counter.count++;
  console.log(`Count is now: ${counter.count}`);
}

namespace counter {
  export let count = 0;

  export function reset() {
    count = 0;
    console.log("Counter reset");
  }
}

// Using the merged function + namespace
counter(); // Count is now: 1
counter(); // Count is now: 2
counter.reset(); // Counter reset
counter(); // Count is now: 1

// --------------------------------------------------
// 🧪 Mini Challenges 
// --------------------------------------------------

// 1 Solution: Merged Interface 'Car' already shown above

// 2 Solution: Merged function + namespace 'counter' shown above

// 1. typeof Type Guard (for primitives)
function handle(input: string | number) {
  if (typeof input === "string") {
    console.log("Upper:", input.toUpperCase());
  } else {
    console.log("Doubled:", input * 2);
  }
}

handle("typescript");
handle(10);


// 2. in Type Guard (for object properties)
type Admin = {
  name: string;
  privileges: string[];
};

type UserWithEmail = {
  name: string;
  email: string;
};

function printInfo(person: Admin | UserWithEmail) {
  if ("privileges" in person) {
    console.log("👑 Admin privileges:", person.privileges.join(", "));
  } else {
    console.log("📧 User email:", person.email);
  }
}

const admin: Admin = { name: "Pranav", privileges: ["server", "users"] };
const userWithEmail: UserWithEmail = { name: "Aman", email: "aman@example.com" };

printInfo(admin);
printInfo(userWithEmail);


// 3. instanceof Type Guard (for class-based checks)
class Car {
  drive() {
    console.log("🚗 Driving...");
  }
}

class Truck {
  loadCargo() {
    console.log("🚚 Loading cargo...");
  }
}

function operateVehicle(vehicle: Car | Truck) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  } else {
    vehicle.drive();
  }
}

const myCar = new Car();
const myTruck = new Truck();

operateVehicle(myCar);
operateVehicle(myTruck);


// 4. Custom Type Guard (with `is` keyword)
type Dog = {
  bark(): void;
};

type Cat = {
  meow(): void;
};

function isDog(animal: Dog | Cat): animal is Dog {
  return (animal as Dog).bark !== undefined;
}

function makeSound(animal: Dog | Cat) {
  if (isDog(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const dog: Dog = { bark: () => console.log("🐶 Woof!") };
const cat: Cat = { meow: () => console.log("🐱 Meow!") };

makeSound(dog);
makeSound(cat);


// ---------------------------------------------
// ✅ Mini Challenges
// ---------------------------------------------

// 1. string or string[]
function printEach(value: string | string[]) {
  if (typeof value === "string") {
    console.log("Chars:", value.split(""));
  } else {
    console.log("Items:", value);
  }
}

printEach("Pranav");
printEach(["One", "Two", "Three"]);

// 2. Square | Circle
type Square = { shape: "square"; side: number };
type Circle = { shape: "circle"; radius: number };

function area(shape: Square | Circle) {
  if ("side" in shape) {
    console.log("Area of square:", shape.side ** 2);
  } else {
    console.log("Area of circle:", Math.PI * shape.radius ** 2);
  }
}

area({ shape: "square", side: 4 });
area({ shape: "circle", radius: 3 });

// 3. Custom type guard for Admin
function isAdminGuard(person: Admin | UserWithEmail): person is Admin {
  return "privileges" in person;
}

if (isAdminGuard(admin)) {
  console.log("✅ Confirmed Admin");
}

// 4. instanceof Date vs string
function processInput(input: Date | string) {
  if (input instanceof Date) {
    console.log("📅 Year:", input.getFullYear());
  } else {
    console.log("📝 String length:", input.length);
  }
}

processInput(new Date());
processInput("Hello World");

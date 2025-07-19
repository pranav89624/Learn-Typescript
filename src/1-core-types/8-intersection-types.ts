// 1. Basic Intersection Syntax
type Developer = {
  name: string;
  skills: string[];
};

type Manager = {
  department: string;
  employees: number;
};

type TechLead = Developer & Manager;

const lead: TechLead = {
  name: "Pranav",
  skills: ["TypeScript", "React", "Node.js"],
  department: "Engineering",
  employees: 4,
};

console.log("Tech Lead:", lead);


// 2. Conflicting Fields in Intersection
type A = { value: string };
// type B = { value: number }; // ❌ Uncommenting this causes: Type 'string' & 'number' is never

// type C = A & B;
// const conflict: C = { value: 123 }; // ❌ Impossible to satisfy both


// 3. Intersection of Union Types
type Animal = { kind: "cat" } | { kind: "dog" };
type WithLegs = { legs: number };

type Pet = Animal & WithLegs;

const myPet: Pet = {
  kind: "dog",
  legs: 4,
};

console.log("Pet:", myPet);


// ---------------------------------------------
// ✅ Mini Challenges
// ---------------------------------------------

// 1. Author & Publisher Intersection
type Author = {
  name: string;
  booksWritten: number;
};

type Publisher = {
  company: string;
  yearsOfExperience: number;
};

type BookContributor = Author & Publisher;

const contributor: BookContributor = {
  name: "R. K. Narayan",
  booksWritten: 10,
  company: "Penguin",
  yearsOfExperience: 15,
};

console.log("Book Contributor:", contributor);

// 2. User & Permissions
type UserIntersection = {
  username: string;
  email: string;
};

type PermissionsIntersection = {
  canEdit: boolean;
  canDelete: boolean;
};

function printUserInfo(user: UserIntersection & PermissionsIntersection) {
  console.log("User:", user.username);
  console.log("Email:", user.email);
  console.log("Permissions → Edit:", user.canEdit, "| Delete:", user.canDelete);
}

const superUser: UserIntersection & PermissionsIntersection = {
  username: "admin001",
  email: "admin@site.com",
  canEdit: true,
  canDelete: false,
};

printUserInfo(superUser);

// 3. Try Conflicting Types
type A1 = { status: string };
// type B1 = { status: number }; // ❌ Incompatible types if intersected

// type Broken = A1 & B1;
// const test: Broken = { status: 404 }; // ❌ Won't compile

// 4. Hybrid Vehicle Example
type ElectricCar = {
  batteryCapacity: number; // in kWh
  charge(): void;
};

type PetrolCar = {
  fuelCapacity: number; // in liters
  refill(): void;
};

type HybridVehicle = ElectricCar & PetrolCar;

const hybrid: HybridVehicle = {
  batteryCapacity: 75,
  fuelCapacity: 40,
  charge: () => console.log("🔋 Charging..."),
  refill: () => console.log("⛽ Refilling petrol..."),
};

hybrid.charge();
hybrid.refill();

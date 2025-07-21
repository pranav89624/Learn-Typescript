export {};

// 🔑 Index Signatures in TypeScript

// ✅ Basic Example
interface ErrorBag {
  [key: string]: string;
}

const errorBag: ErrorBag = {
  email: "Invalid email format",
  username: "Username must start with a letter",
  "404": "Not found", // numeric keys get coerced to string
};

console.log("Error Bag:", errorBag);


// --------------------------------------------------
// 🧪 Mini Challenges : 
// --------------------------------------------------

// 1: Config Object
interface Config {
  [key: string]: boolean;
}

const appConfig: Config = {
  darkMode: true,
  showSidebar: false,
  enableLogging: true,
};

console.log("Config:", appConfig);


// 2: GradeBook Interface
interface GradeBook {
  [studentName: string]: number;
}

const gradebook: GradeBook = {
  Alice: 85,
  Bob: 92,
  Charlie: 78,
};

function getAverageScore(grades: GradeBook): number {
  const values = Object.values(grades);
  const total = values.reduce((sum, score) => sum + score, 0);
  return values.length === 0 ? 0 : total / values.length;
}

console.log("Class Average:", getAverageScore(gradebook));


// --------------------------------------------------
// 🧠 Bonus: Restricting keys with union (advanced variant)
// --------------------------------------------------

// Limit index to specific keys using union types
type FeatureFlags = "darkMode" | "beta" | "analytics";

type FeatureToggle = {
  [key in FeatureFlags]: boolean;
};

const features: FeatureToggle = {
  darkMode: true,
  beta: false,
  analytics: true,
};

console.log("Feature Flags:", features);

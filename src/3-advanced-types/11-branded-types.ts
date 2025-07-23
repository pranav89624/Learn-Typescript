export {};

// 🏷️ Branded Types in TypeScript

// ✅ Basic branding: UserID & ProductID
type UserID = string & { __brand: "UserID" };
type ProductID = string & { __brand: "ProductID" };

function createUserId(raw: string): UserID {
  // validation logic could go here
  return raw as UserID;
}

function createProductId(raw: string): ProductID {
  return raw as ProductID;
}

const uid = createUserId("user-123");
const pid = createProductId("product-456");

console.log("UserID:", uid);
console.log("ProductID:", pid);

// uid = pid; ❌ Type Error - prevents accidental assignment

// ---------------------------------------------
// ✅ Email Branded Type
// ---------------------------------------------
type Email = string & { __brand: "Email" };

function isValidEmail(email: string): boolean {
  return /^[\w.-]+@[\w.-]+\.\w+$/.test(email);
}

function createEmail(raw: string): Email {
  if (!isValidEmail(raw)) {
    throw new Error("Invalid email format");
  }
  return raw as Email;
}

const email = createEmail("dev@branded.com");
console.log("Valid Email:", email);

// ---------------------------------------------
// ✅ Mini Challenges 
// ---------------------------------------------

// 1: Currency branded type
type Currency = number & { __brand: "Currency" };

function formatCurrency(value: number): Currency {
  if (value < 0) throw new Error("Currency must be positive");
  return value as Currency;
}

const amount: Currency = formatCurrency(99.99);
console.log("Currency amount:", amount);

// 2: ValidPassword branded type
type ValidPassword = string & { __brand: "ValidPassword" };

function validatePassword(pwd: string): ValidPassword {
  if (pwd.length < 8) throw new Error("Password too short");
  return pwd as ValidPassword;
}

const pwd = validatePassword("supersecure");
console.log("Validated Password:", pwd);

// 3: Misuse demo
function sendEmail(to: Email, body: string) {
  console.log(`Email sent to ${to} with message: ${body}`);
}

// sendEmail("not@branded.com", "hi"); ❌ Type Error
sendEmail(email, "Welcome aboard!");


// ---------------------------------------------
// 🧠 Summary
// Branded types simulate nominal typing in TS.
// Great for IDs, domain rules, validation, units, etc.
// Use factory functions to enforce safety — never cast manually.
// ---------------------------------------------

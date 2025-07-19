// 1. Numeric Enums (Default Starts at 0)
enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right,   // 3
}

const move: Direction = Direction.Left;
console.log("Move:", move); // Logs: 2


// 2. Numeric Enum with Custom Values
enum StatusCode {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

const httpStatus: StatusCode = StatusCode.Unauthorized;
console.log("HTTP Status:", httpStatus); // Logs: 401


// 3. String Enums
enum Theme {
  Light = "light",
  Dark = "dark",
}

let currentTheme: Theme = Theme.Dark;
console.log("Theme:", currentTheme); // Logs: "dark"


// 4. Reverse Mapping (Only for Numeric Enums)
enum Role {
  Admin = 1,
  User,
  Guest,
}

console.log("Role 1 is:", Role[1]); // Logs: "Admin"
console.log("Role.User value:", Role.User); // Logs: 2


// ---------------------------------------------
// ✅ Mini Challenges
// ---------------------------------------------

// 1. Create a numeric enum for OrderStatus
enum OrderStatus {
  Pending,    // 0
  Shipped,    // 1
  Delivered,  // 2
  Cancelled,  // 3
}

const myOrder: OrderStatus = OrderStatus.Shipped;
console.log("Order Status:", myOrder); // Logs: 1

// 2. Create a string enum for AppMode
enum AppMode {
  Edit = "edit",
  Preview = "preview",
  ReadOnly = "readonly",
}

let mode: AppMode = AppMode.Edit;
console.log("App Mode:", mode); // Logs: "edit"

// 3. Use enum in a switch statement
function handleMode(mode: AppMode) {
  switch (mode) {
    case AppMode.Edit:
      console.log("Editing...");
      break;
    case AppMode.Preview:
      console.log("Previewing...");
      break;
    case AppMode.ReadOnly:
      console.log("Read-only mode");
      break;
  }
}

handleMode(AppMode.ReadOnly); // Logs: "Read-only mode"

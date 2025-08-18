export {}; // ensures this file is treated as a module

// ---- Domain Models ----
interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

enum UserRole {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

// ---- Utility Types ----
type Nullable<T> = T | null;
type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

// ---- Global Declaration Example ----
declare global {
  namespace Express {
    interface Request {
      user?: User; // attached after authentication
    }
  }
}

// ---- Usage Demo ----
const demoUser: User = {
  id: "1",
  name: "Alice",
  email: "alice@example.com",
  role: UserRole.USER,
};

const successResponse: ApiResponse<User> = {
  success: true,
  data: demoUser,
};

const errorResponse: ApiResponse<null> = {
  success: false,
  error: "Something went wrong",
};

console.log(successResponse, errorResponse);

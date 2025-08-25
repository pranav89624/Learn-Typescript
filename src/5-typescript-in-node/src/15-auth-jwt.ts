import jwt from "jsonwebtoken";

// ✅ Types
interface UserPayload {
  id: string;
  email: string;
}

interface TokenResponse {
  token: string;
  expiresIn: string;
}

// ✅ Secret (in real projects -> use process.env.JWT_SECRET)
const SECRET_KEY = "supersecret123";

// ✅ Function to generate a JWT
function generateToken(payload: UserPayload): TokenResponse {
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  return { token, expiresIn: "1h" };
}

// ✅ Function to verify a JWT
function verifyToken(token: string): UserPayload | null {
  try {
    return jwt.verify(token, SECRET_KEY) as UserPayload;
  } catch (error) {
    return null;
  }
}

// ✅ Demo Usage
const user: UserPayload = { id: "u123", email: "user@example.com" };

// Generate a token
const authToken = generateToken(user);
console.log("Generated Token:", authToken);

// Verify the token
const decoded = verifyToken(authToken.token);
console.log("Decoded Payload:", decoded);

// Invalid token check
const invalid = verifyToken("fake.token.value");
console.log("Invalid Token Result:", invalid);
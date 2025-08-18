# 🚀 Welcome to TypeScript in Node.js: The Backend Era Begins

You’ve mastered TypeScript on the frontend now it’s time to bring that type-safe precision to your server side logic. In this section, we’re diving deep into how TypeScript supercharges Node.js development by eliminating bugs before they happen, providing rich tooling, and enforcing scalable design patterns.

This isn’t about building production APIs (yet). This is about understanding how to think in types while working with the Node.js runtime, its core modules, and common backend patterns like Express, environment variables, JWT, and more.

## 📘 Section 1 - Basic Types Recap in Node ([01-basic-types.ts](./src/01-basic-types.ts))

### 🧩 Purpose
Even though the core TypeScript types are the same across environments, this section ensures you’re comfortable applying them in a **Node.js (non-browser)** context.

### 🔤 string, number, boolean
Basic primitives are fully supported and strictly typed.

```ts
const name: string = "Pranav";
const port: number = 3000;
const isProd: boolean = false;
```

### 📦 Arrays
Type-safe arrays let you define exactly what data can go inside.
```ts
const skills: string[] = ["TypeScript", "Node"];
```

### 🧱 Object Types
Define custom shapes using type or interface.
```ts
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};
```
> You get IntelliSense for all keys, making development safer and faster.

### 🚦 Union Types
Let a value be one of many specific options.
```ts
type Role = "admin" | "editor" | "viewer";
```

### 🧮 Functions
You can explicitly type parameters and return values.
```ts
function greet(user: string): string {
  return `Hello, ${user}`;
}
```

### 🎯 Tuples
Fixed-length arrays with fixed types at each position
```ts
const position: [number, number] = [0, 1];
```

### 💡 Key Takeaway:
TypeScript’s static typing isn’t just for safety, it increases clarity and expressiveness.
Mastering these fundamentals gives you confidence when scaling backend logic.

---

## 📦 Section 2 -  Modules & ES Modules in TypeScript (Node.js) ([02-modules-and-esm.ts](./src/02-modules-and-esm.ts))

In modern Node.js with TypeScript, we typically write modular code so that functionality is split across multiple files instead of crammed into one giant script.
Modules help with **maintainability**, **reusability**, and **clarity**.

### 1️⃣ What Are ES Modules?
- ESM (ECMAScript Modules) is the modern JavaScript module system.
- Uses `import` and `export` syntax.
- Supported natively in Node.js (v14+ with `"type": "module"` in `package.json`).

**Example :**

```ts
// mathUtils.ts
export function add(a: number, b: number): number {
  return a + b;
}

// app.ts
import { add } from './mathUtils.js';
console.log(add(2, 3));
```

### 2️⃣ TypeScript + ESM Setup
- In **package.json**:
  ```json
  {
    "type": "module"
  }
  ```
- In **tsconfig.json**:
  ```json
  {
    "compilerOptions": {
      "module": "ESNext"
    }
  }
  ```
- Always include `.js` extension in imports when running compiled output (Node requires it).

### 3️⃣ Named vs Default Exports
- **Named exports:** Multiple exports per file, imported with destructuring.
- **Default export:** One main export per file.

```ts
// Named
export const PI = 3.14;
export function square(n: number) { return n * n; }

// Default
export default function greet(name: string) {
  return `Hello, ${name}!`;
}
```

```ts
import greet, { PI, square } from './mathUtils.js';
```


### 4️⃣ Importing Node.js Core Modules in ESM
- For built-ins like `fs`, `path`, `url`:
  ```ts
  import fs from 'fs';
  import path from 'path';
  ``` 
- When working with paths in ESM, `__dirname` doesn’t exist by default. Use:
  ```ts
  import { fileURLToPath } from 'url';
  import { dirname } from 'path';

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  ```

### 5️⃣ Why ESM Over CommonJS?
- Native to modern JS and browsers.
- Tree-shaking friendly.
- Future-proof as Node.js shifts toward ESM.

### ✅ Goal for this Section:
Be comfortable **exporting and importing functions, classes, and constants** in a Node.js + TypeScript environment using ES module syntax.

---

## Section 3 - Working with the File System ([03-working-with-fs.ts](./src/03-working-with-fs.ts))

### Overview
The `fs` (File System) module in Node.js lets us interact with files and directories, reading, writing, updating, and deleting.

In TypeScript, we get the benefit of **type safety** and IntelliSense when using `fs`, especially with options objects.

### Importing in ES Modules
Since we’re in **ESM mode**, we use:
```ts
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
```
To mimic `__dirname` and `__filename` (which don’t exist in ESM):
```ts
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

### Core FS Operations
We’ll cover both **sync** and **async** variants.<br>
Async versions use either **callbacks** or **Promises** (`fs.promises` API).

#### ✅ Writing Files
- `fs.writeFile` (async)
- `fs.writeFileSync` (sync)
- `Default overwrites file; use `{ flag: "a" }` to append.

#### ✅ Reading Files
- `fs.readFile` (async)
- `fs.readFileSync` (sync)
- Always specify encoding (`"utf-8"`) if you want a string instead of a `Buffer`.

#### ✅ Appending Files
- `fs.appendFile` (async)
- `fs.appendFileSync` (sync)

#### ✅ Deleting Files
- `fs.unlink` (async)
- `fs.unlinkSync` (sync)

### Directories
- Create: `fs.mkdir` / `fs.mkdirSync` (`{ recursive: true }` for nested)
- Read: `fs.readdir`
- Remove: `fs.rmdir` (deprecated) or `fs.rm` with `{ recursive: true }`

### Error Handling
- Always handle `err` in callbacks.
- For `fs.promises`, wrap in `try/catch`.

### Promises API Example
Modern and cleaner:
```ts
await fs.promises.writeFile("file.txt", "Hello!");
```
Gives you async/await elegance.

---

## Section 4 - Working with core Node.js built-in modules in a TypeScript environment ([04-node-builtins.ts](./src/04-node-builtins.ts))

### Overview
Node.js comes with a rich set of **built in modules** (core modules) for handling:
- File paths, URLs, and OS info.
- Timers, crypto operations, compression.
- Working with buffers, streams, events.

We’ll cover the most **commonly used** ones you’re likely to see in realworld backend code.

###  Importing in ES Modules
In ESM mode:
```ts
import path from "path";
import { fileURLToPath } from "url";
import os from "os";
import crypto from "crypto";
import { EventEmitter } from "events";
```

### Key Built-in Modules & Uses
#### 📍 path
- Platform independent way to work with file paths.
- `path.join()`, `path.resolve()`, `path.basename()`, `path.extname()`.

#### 🌐 url
- In ESM, used to get `__dirname` and `__filename` via `fileURLToPath`.

#### 💻 os
- System info: platform, CPU cores, memory.
- Methods like `os.type()`, `os.cpus()`, `os.freemem()`.

#### 🔐 crypto
- Create hashes, generate random IDs, encrypt/decrypt.
- Example: `crypto.randomUUID()` for unique IDs.

#### 📢 events
- EventEmitter pattern for pub/sub.
- Create custom events in Node apps.

### TypeScript Tip
- All core module types are bundled with `@types/node` (already in dev deps).
- Use IntelliSense to discover available methods.

---

## Section 5 - Typesafe Environment Variables with Zod ([05-type-safe-env.ts](./src/05-type-safe-env.ts))

### Overview
Managing environment variables can be error prone. We’ll use **Zod** to create a schema for our env vars, ensuring they’re valid and correctly typed.

### The Problem
- `process.env` values are always **strings or undefined**, and TypeScript can’t infer real types.
- If an environment variable is missing, we won’t know until runtime (and the app might crash later).
- Hardcoding fallback defaults everywhere gets messy.

### The Solution Zod + TypeScript
We can:
- Define a **runtime schema** for required and optional env vars.
- Validate `process.env` at **startup**, so the app fails fast if something’s wrong.
- Automatically infer **TypeScript types** from the schema.

### Why Zod?
- Works both at **runtime** (validates) and **compile time** (type inference).
- Clear error messages if a variable is missing or invalid.
- Zero extra boilerplate to keep TS and runtime in sync.

### Typical Env Vars in a Backend App
Examples:
- `PORT` (number)
- `DATABASE_URL` (string, must be a valid URL)
- `NODE_ENV` (enum: `"development" | "production" | "test"`)

### Implementation Flow
1. Install Zod:
    ```bash
    npm install zod
    ```
2. Create a schema with `.object()`.
3. Use `z.infer` to create a TypeScript type from it.
4. Parse `process.env` at startup.
5. Export the validated config object.

### Benefits
- Immediate app crash if env vars are missing or invalid.
- No more `as string` or manual checks.
- Works with `.env` files (if using `dotenv`).

### Demo env Setup to use in this excercise :
```env
# Application environment: "development" | "production" | "test"
NODE_ENV=development

# Port number your app will run on
PORT=3000

# Example: Postgres DB URL (can be MySQL, Mongo, etc.)
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
```
Place this file in the root of `5-typescript-in-node` folder as `.env`.

---

## Section 6 - Creating a Simple HTTP Server ([06-simple-server.ts](./src/06-simple-server.ts))

### Overview
In this section, we’ll create a simple HTTP server using Node.js and TypeScript. This server will respond to different routes with plain text and JSON responses.

### Why Vanilla HTTP First?
Before jumping into Express, it’s important to see how a Node server works under the hood:
- No frameworks, just the `http` module.
- Full control over request/response handling.
- You’ll appreciate what Express automates.

### HTTP Module Basics
```ts
import http from "http";

const server = http.createServer((req, res) => {
  // handle request
});

server.listen(port, () => console.log(`Server running...`));
```

### Request & Response Objects
- `req` (IncomingMessage) → contains URL, method, headers.
- `res` (ServerResponse) → methods like:
  - `.statusCode = 200`
  - `.setHeader("Content-Type", "text/plain")`
  - `.end("Hello World")`

### TypeScript Tips
- Both `req` and `res` have built-in Node types (`IncomingMessage` and `ServerResponse`).
- You don’t need to manually type them unless doing custom wrappers.

### Our Example Flow
1. Import and use `env` from **05-type-safe-env.ts**.

2. Start server on `env.PORT`.

3. Handle:
    - `/` → plain text
    - `/json` → JSON response
    - Anything else → 404

### RealWorld Use
- Normally, you’d use Express or Fastify for production apps.
- But this knowledge helps debug low level server issues.

---

## Section 7 - Express Basics ([07-express-basics.ts](./src/07-express-basics.ts))

### Overview
In this section, we’ll explore the basics of building a web server using Express and TypeScript. Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### Key Concepts
- **Middleware**: Functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
- **Routing**: Defining endpoints (routes) for handling requests.
- **Error Handling**: Centralized error handling for the application.

### Why Express?
- **Simplified API** over Node’s `http` module.
- Middleware system for reusable request/response handling.
- Builtin routing support (`app.get`, `app.post`, etc.).
- Large ecosystem of middleware packages.

### Installing Dependencies
Since we’re in TypeScript:
```bash
npm install express
npm install -D @types/express
```

### Core Concepts
- **App Instance**: `const app = express();`
- **Middleware**: Functions that run before request handlers.
- **Routing**: `app.get("/path", handler)`
- **JSON Support**: `app.use(express.json())`

### Our Example Flow
1. Use `env` from **05-type-safe-env.ts**`.
2. Create an Express app.
3. Add JSON body parsing middleware.
4. Create:
    - GET `/` → plain text
    - GET `/json` → JSON
    - POST `/echo` → returns received JSON
5. 404 fallback handler.

### TypeScript Tips for Express
- Use the `Request`, `Response`, and `NextFunction` types from `express`.
- For typed request bodies or params, you can use generics:
  ```ts
  Request<ParamsType, ResBodyType, ReqBodyType>
  ```

---

## Section 8 - Error Handling ([08-error-handling.ts](./src/08-error-handling.ts))

### Overview
Error handling is crucial in any application to ensure that unexpected issues do not crash the server and provide meaningful feedback to clients.

### Why Structured Error Handling?
- Avoids app crashes due to unhandled exceptions.
- Makes debugging easier with consistent error logging.
- Provides clear client responses for API endpoints.
- Essential for production-ready apps.

### Core Concepts
**Node.js**
- Use `try/catch` for synchronous and async code.
- For async callbacks, always handle errors in the callback.
- For promises: `catch()` or `try/catch` with `async/await`.

**Express**
- Middleware handles errors if you pass them to `next(err)`.
- Custom error-handling middleware must have four parameters:
  `(err, req, res, next)`

### Creating Custom Error Classes
- TypeScript allows custom Error classes with extra fields like `statusCode`.
- Example:
  ```ts
  class AppError extends Error {
    statusCode: number;
    constructor(message: string, statusCode = 500) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  ```

### Practical Example
We’ll demonstrate:
1. Synchronous error handling.
2. Async error handling (with `async/await`).
3. Express custom error middleware.
4. Sending structured JSON responses with `statusCode` and `message`.

### TypeScript Tips
- Always type your error handler params (`err: Error | AppError`).
- Use `instanceof` to distinguish custom errors from native errors.

---

## Section 9 - Routing ([09-routing.ts](./src/09-routing.ts))

### Overview
Routing is a fundamental concept in web applications, allowing you to define how your application responds to client requests for specific endpoints. In Express, routing is handled through the use of the `Router` class, which provides a way to modularize your routes and keep your code organized.

### Why Modular Routing?
- Keeps code organized by grouping related endpoints (e.g., `/users`, `/posts`).
- Easier to scale and maintain large codebases.
- Prevents `app.ts` from becoming a huge, unreadable file.

### Learning Repo vs Real World
- ⚠️ In this repo (learning purpose): We are writing all routing code in a single file (09-routing.ts) to keep concepts self-contained and easy to follow.
- ✅ In a real-world project: You would place routers, controllers, and services in separate files/folders for maintainability. Example structure:
  ``` plaintext
  src/
  ├── routes/
  │   └── user.routes.ts
  ├── controllers/
  │   └── user.controller.ts
  ├── services/
  │   └── user.service.ts
  └── app.ts
  ```

### Express Router Basics
- Import `Router` from `express`.
- Define endpoints on it (`router.get`, `router.post`).
- Mount routers in `app` with `app.use("/prefix", router)`.

### Example Flow

In this file we:
1. Created a `userRouter`.
2. Added routes:
   - `GET /api/users` → list users.
   - `POST /api/users` → add a user.
3. Mounted it in `app`.
4. Kept a root `/` route and a 404 fallback.

---

## Section 10 - Controllers and Services ([10-controllers-and-services.ts](./src/10-controllers-and-services.ts))

### Overview 
When building scalable backends, separating concerns is critical. Instead of mixing route handling, business logic, and data manipulation in a single place, we break them into distinct layers:
- **Controller Layer** → Deals with `req` (request) and `res` (response).
- **Service Layer** → Contains the core business logic.
- **Route Layer** → Maps endpoints (`/api/...`) to controllers.

This separation makes the project **maintainable, testable,** and **extendable**.

### Learning vs Real World
- ⚠️ **This Repo (Learning Purpose)**:
  - Everything (routes, controllers, services) is in one file to keep things simple and visible.
- ✅ **Real World Structure**:
  ```plaintext
  src/
  ├── routes/
  │   └── user.routes.ts
  ├── controllers/
  │   └── user.controller.ts
  ├── services/
  │   └── user.service.ts
  ├── models/
  │   └── user.model.ts   // e.g., DB schema
  ```
This modular structure ensures **separation of responsibilities** and better **scaling**.

### Code Walkthrough
1. **Service Layer** (Business Logic)
    - `getAllUsers()` → returns all users from in-memory DB.
    - `createUser(name)` → validates and creates a new user.

2. **Controller Layer** (Request/Response Handling)
    - `getUsers(req, res)` → responds with all users.
    - `addUser(req, res)` → validates input, delegates to service, and sends response.

3. **Route Layer** (API Endpoints)
    - `GET /api/users` → returns all users.
    - `POST /api/users` → adds a new user.

4. **App Setup**
    - JSON body parsing with `express.json()`.
    - Root route → Welcome message.
    - 404 handler for invalid routes.

### Request-Response Flow
```plaintext
Client → Request → Controller → Service → Controller → Response → Client
```
Example:
1. `POST /api/users { "name": "Bob" }`
2. Controller (`addUser`) validates input.
3. Service (`createUser`) adds new user to DB.
4. Controller returns `{ id: 3, name: "Bob" }`.

### Testing the Endpoints

1. Get all users
    ```bash
      curl http://localhost:3000/api/users
    ```
    Response:
    ```json
    [
      { "id": 1, "name": "Pranav" },
      { "id": 2, "name": "Alice" }
    ]
    ```

2. Add a new user
    ```bash
    curl -X POST http://localhost:3000/api/users \
      -H "Content-Type: application/json" \
      -d '{"name":"Bob"}'
    ```
    Response:
    ```json
    { "id": 3, "name": "Bob" }
    ```

### Benefits of Controller-Service Separation
- **Maintainability** → Easier to locate and modify logic.
- **Testability** → You can test services without worrying about Express boilerplate.
- **Reusability** → Services can be reused across multiple controllers.
- **Scalability** → As app grows, this structure prevents chaos.

### When to Use This Pattern
- Small scripts → Might be overkill.
- Medium/Large apps → Essential for keeping things organized.
- Team projects → Absolutely required to avoid codebase confusion.

---

## Section 11 - Middleware ([11-middlewares.ts](./src/11-middlewares.ts))

### Overview 
Middleware functions are the **backbone of Express.js**.<br/>
Think of them as "**interceptors**" in the request-response cycle:
- They can **log, validate, transform, authenticate**, or even **terminate** requests.
- Middleware sits **between** the client request and your final route handler.

### The Middleware Flow
```plaintext
Client → Middleware(s) → Controller/Route → Response
```
Example with multiple middlewares:
```plaintext
Client → Logger Middleware → Validation Middleware → Controller/Route → Response
```
Each middleware runs in order, and decides whether to:
- Pass control to the next middleware using `next()`.
- End the cycle with a response.

### Learning vs Real World
- ⚠️ This Repo (Learning Purpose):
    - We will put all middlewares in one file for clarity.
- ✅ Real World Practice:
```plaintext
src/
├── middlewares/
│   ├── logger.middleware.ts
│   ├── validate.middleware.ts
│   └── auth.middleware.ts
├── controllers/
├── services/
└── routes/
```

### Code Walkthrough
We’ll implement three middlewares:

1. Logger Middleware
    - Logs HTTP method and path.
    - Example: `GET /api/users`.

2. Validation Middleware
    - Checks if required fields exist in the request body.
    - Example: Rejects `POST /api/users` without a `name`.

3. Error Handling Middleware
    - Catches thrown errors and sends a proper response.

### Request-Response Flow Example
1. GET /api/users
    - `logger` → prints `[2025-08-17T18:12:00] GET /api/users`.
    - Route returns `[ { id: 1, name: "Pranav" } ]`.

2. POST /api/users { "name": "Alice" }
    - `logger` → logs request.
    - `validateUser` → checks name field → OK.
    - Route → returns `{ id: 2, name: "Alice" }`.

3. POST /api/users { } (no name)
    - `logger` → logs request.
    - `validateUser` → rejects with `400 Bad Request`.

### Benefits of Middleware
- **Reusable** → Write once, apply everywhere.
- **Composable*** → Chain multiple middlewares.
- **Centralized Error Handling** → Cleaner controllers.
- **Security** → Use for auth, rate limiting, CORS.

---


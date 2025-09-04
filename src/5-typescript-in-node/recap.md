# Recap TypeScript in Node.js (Backend)

This recap is your **quick overview** of everything you learned in the Backend section of this repo.
Each topic is summarized in a few lines so you can revise without reading entire notes again.
At the end, test your knowledge with the quiz. 🚀

## 01 Basic Types
- Refresher on **TypeScript types** in a Node.js context.
- Covered `string`, `number`, `boolean`, `object`, `array`, `tuple`, `union`, `interface`, and `type aliases`.
- Focus: applying types when writing Node scripts (console logging, data shaping).

## 02 Modules & ESM
- Difference between CommonJS (`require`) and ESM (`import/export`).
- How Node.js uses ESM with `"type": "module"` in `package.json`.
- Re-created `__dirname` and `__filename` in ESM style.
- Example: imported `fs` and `path` modules.

## 03 Working with FS
- Used Node’s File System (`fs`) module in TypeScript.
- Read, write, append, and delete files safely.
- Demonstrated both sync and async (Promise-based) methods.
- Reminder: in production → modularize FS helpers instead of one file.

## 04 Node Built-ins
- Explored core Node modules: `os`, `path`, `url`.
- Learned to fetch system info (`os.platform()`, `os.cpus()`), work with file paths (`path.join`), and parse URLs.
- Demonstrated real-world usage of these utilities.

## 05 Type-safe Env
- Used Zod to validate environment variables.
- Example:` process.env.PORT` must be a number.
- Caught missing/invalid `.env` configs at startup.
- Real-world tip: use this to prevent silent runtime crashes.

## 06 Simple Server
- Built a minimal HTTP server with Node’s `http` module.
- Responded to routes with `req.url`.
- Understood basics of request, response cycle without Express.
- Reminder: for learning only — in real apps, use frameworks like Express.

## 07 Express Basics
- Introduced Express.js with TypeScript.
- Created routes (`GET`, `POST`) with type safety.
- Learned how Express request/response objects are typed.
- Key takeaway: Express speeds up server creation drastically.

## 08 Error Handling
- Covered error handling strategies in Express/Node.
- Used `try/catch`, `next(err)` in middleware, and central error handlers.
- Differentiated between operational errors (user input) and programmer errors (bugs).

## 12 Global Types
- Defined global custom types using TypeScript’s `declare global`.
- Example: extending `Request` to include `user`.
- Real-world use: attach authentication data to requests.

## 13 API Response Types
- Created typed response helpers: `ApiResponse<T>`.
- Ensured consistent structure for success/error payloads.
- Developers now know what shape to expect from an API.

## 14 Utils & Helpers
- Wrote reusable helper functions with types.
- Example: `formatDate`, `randomId`, `wait`.
- Emphasis on typed parameters & return types for safety.
- Real-world note: keep helpers in `/utils` folder.

## 15 Auth with JWT
- Implemented JWT-based authentication with TypeScript.
- Functions for `generateToken`, `verifyToken`.
- Added `declare global` augmentation to inject user payload.
- Real-world note: always store secrets in `.env`, never hardcode.

## 16 Testing Basics
- Added Vitest for testing in TypeScript.
- Demonstrated a simple test for utility functions.
- Ran tests with `npm test` → looked for `*.test.ts` or `*.spec.ts` files.
- Real-world tip: keep tests alongside code OR in `/tests`.

## 📝 Quiz Test Your Knowledge

Try answering these before checking [`quiz-answers.md`](./quiz-answers.md):

### Basics
- What’s the difference between interface and type alias in TypeScript?
- How do you recreate __dirname in an ESM module?

### Node & FS
- What’s the difference between fs.readFileSync and fs.promises.readFile?
- Why should you avoid blocking sync methods in production code?

### Env & Server
- Why do we use Zod to validate .env variables?
- In the basic HTTP server, what properties can you check on req?

### Express & Types
- How do you type a custom property (like user) on Request in Express?
- What does a global type declaration look like in TypeScript?

### API & Helpers
- Why is it useful to have a typed ApiResponse<T> wrapper?
- Give an example of a utility function and its type signature.

### Auth & Testing
- What does jwt.verify return if the token is invalid?
- How does Vitest know which files are tests?

✅ That’s it, you’ve got the bird’s eye view of the entire backend section.<br />
Now check your answers in [`quiz-answers.md`](./quiz-answers.md) once you’re done.

---
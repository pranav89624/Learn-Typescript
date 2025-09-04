# Quiz Answers TypeScript in Node.js (Backend)

Use this to check your answers from `recap.md`.<br />
Don’t peek until you’ve tried the quiz yourself .

## Basics

1. What’s the difference between `interface` and `type alias` in TypeScript?
    - `interface` → best for describing object shapes and can be extended/merged.
    - `type alias` → can represent primitives, unions, tuples, functions, objects.
    - Interfaces are more extendable; types are more flexible.

2. How do you recreate `__dirname` in an ESM module?
    ```ts
    import { fileURLToPath } from "url";
    import { dirname } from "path";

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    ```

## Node & FS

3. What’s the difference between `fs.readFileSync` and `fs.promises.readFile`?
    - `fs.readFileSync` → synchronous, blocks the event loop until finished.
    - `fs.promises.readFile` → async, returns a Promise, non-blocking.

4. Why should you avoid blocking sync methods in production code?
    - They block the event loop, preventing other requests from being processed.
    - This kills performance under load.

## Env & Server

5. Why do we use Zod to validate `.env` variables?
    - Ensures environment variables are present and of correct type at startup.
    - Prevents runtime crashes caused by missing/misconfigured `.env`.

6. In the basic HTTP server, what properties can you check on `req`?
    - `req.url`, `req.method`, `req.headers`.
    - Also streams like `req.on("data")` for request body (in POST).

## Express & Types

7. How do you type a custom property (like `user`) on `Request` in Express?
Use global type augmentation:
    ```ts
    declare global {
    namespace Express {
        interface Request {
        user?: { id: string; email: string };
        }
    }
    }
    ```

8. What does a global type declaration look like in TypeScript?
    - It uses `declare global { ... }` and augments existing types (like `Express.Request`).
    - Must be in a `.d.ts` or imported once in your app.

## API & Helpers

9. Why is it useful to have a typed `ApiResponse<T>` wrapper?
    - Enforces consistent API responses (status, data, error).
    - Improves DX (dev experience) with autocomplete + IntelliSense.
    - Prevents forgetting fields like `success`.

10. Give an example of a utility function and its type signature.
    ```ts
    function formatDate(date: Date): string {
      return date.toISOString();
    }
    ```

## Auth & Testing

11. What does `jwt.verify` return if the token is invalid?
    - Throws an error (e.g., `JsonWebTokenError`, `TokenExpiredError`).
    - Must wrap in `try/catch` or use a safe wrapper.

12. How does Vitest know which files are tests?
    - By default: looks for files matching
`**/*.{test,spec}.?(c|m)[jt]s?(x)`
    - Example: `example.test.ts` or `example.spec.ts`.

---

🎉 That’s it! You now have both the recap and the answers. <br />
Together, they form a tight revision loop for learners.

---
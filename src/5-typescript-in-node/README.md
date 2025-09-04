# TypeScript in Node.js (Backend)

Welcome to the **Backend with TypeScript** part of this repo 🎉.<br />
This section is designed as a **learning resource**, not a production-ready backend.<br />
Here, you’ll find one `.ts` **file per topic**, so each concept is self-contained, easy to read, and focused.

## 📂 Folder Structure & Navigation

Inside `5-typescript-in-node/src/`, you’ll see files named according to the section number + topic.<br />
Each file is standalone and can be run directly using ts-node (or compiled via tsc).

```plaintext
src/
├── 01-basic-types.ts
├── 02-modules-and-esm.ts
├── 03-working-with-fs.ts
├── 04-node-builtins.ts
├── 05-type-safe-env.ts
├── 06-simple-server.ts
├── 07-express-basics.ts
├── 08-error-handling.ts
├── 09-routing.ts
├── 10-controllers-and-services.ts
├── 11-middlewares.ts
├── 12-global-types.ts
├── 13-api-response-types.ts
├── 14-utils-and-helpers.ts
├── 15-auth-jwt.ts
├── 16-testing-basics.test.ts
```

👉 Each file is **independent**, meaning you don’t need to run them in sequence. Open, read, run, and learn.

## 📖 How to Use This Section

1. Start at `01-basic-types.ts`<br />
Begin with the fundamentals and work your way down.

2. Open the accompanying Notes
    - Each section has detailed notes that explain the code, pitfalls, and real-world best practices.
    - Notes are written in **Markdown** `(.md)` for clarity and quick reference.

3. Run the code yourself <br />
Use the following command inside the root of this Section:
    ```bash
    npm start
    ```
    for running the 1st Problem and then change this line in `package.json` for running the next ones `"start": "tsc && node dist/01-basic-types.js"`

    OR 

    You can Run : 
    ```bash
    tsc
    ```
    in the section root and then run a Problem by :
    ```
    node dist/01-basic-types.js
    ```

4. Experiment <br />
Try editing, breaking, and fixing code, that’s the fastest way to learn 🚀.

## 📝 Notes & Documentation

- Each topic has detailed notes (in [`notes.md`](./notes.md)) provided alongside the `.ts` file.

- Notes contain:
    - Key concepts explained clearly
    - Practical examples and edge cases
    - Real-world hints on how things scale in production
    - Gotchas and best practices

## 📌 Before Moving Forward

Once you’ve finished going through all files and notes:

### Check [`recap.md`](./recap.md)
- Quick overview of what you learned
- Consolidates major points from every section
- Helps you revise without re-reading everything
- Try the Quiz
- Test your understanding with practical Q&A
- Answers are available in [`quiz-answers.md`](./quiz-answers.md) (check only after attempting)

## ⚡️ Key Reminder

This repo section uses **single files per topic for learning**.<br />
👉 In real-world development, we split code into **modular files & folders** (controllers, routes, services, utils, etc.).<br />
Here, we’ve simplified things to keep the focus on **TypeScript + Node.js fundamentals**.

## ✅ Next Steps

Once you’ve mastered this section:
- Build a **small backend project** (e.g., Notes API, Auth System).
- Visit skipped topics like **Prisma Integration** or **Best Practices** when ready.
- Try deploying your backend to **Railway** or **Render** for hands-on experience.
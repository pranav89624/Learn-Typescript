export

// 🔤 1. Basic Template Literal Type
type Greet<T extends string> = `Hello, ${T}`;

type Message = Greet<"Pranav">; // "Hello, Pranav"

const greetMsg: Message = "Hello, Pranav";
console.log("Greeting Message:", greetMsg);

// 🧱 2. Create Prefixed Keys Using Template Literals
type UserFields = "name" | "email" | "password";

type InputFields = {
  [K in UserFields as `input_${K}`]: string;
};

const inputData: InputFields = {
  input_name: "Pranav",
  input_email: "pv@example.com",
  input_password: "123456",
};

console.log("Input Data:", inputData);

// 🧠 3. Combine with Capitalize
type Events = "click" | "submit" | "hover";

type EventHandlers = {
  [E in Events as `on${Capitalize<E>}`]: () => void;
};

const handlers: EventHandlers = {
  onClick: () => console.log("Clicked"),
  onSubmit: () => console.log("Submitted"),
  onHover: () => console.log("Hovered"),
};

handlers.onSubmit(); // Prints: Submitted

// ----------------------------------------
// 🧪 Mini Challenges 
// ----------------------------------------

// 1: type EventHandler<T> that maps { click: MouseEvent } to { onClick: (e: MouseEvent) => void }
type EventMap = {
  click: MouseEvent;
  focus: FocusEvent;
};

type EventHandler<T> = {
  [K in keyof T as `on${Capitalize<string & K>}`]: (event: T[K]) => void;
};

const uiHandlers: EventHandler<EventMap> = {
  onClick: (e) => console.log("Clicked", e),
  onFocus: (e) => console.log("Focused", e),
};

console.log("Event Handler Object:", uiHandlers);


// 2: ApiRoutes<T> that converts { user: "GET" } into { "/api/user": "GET" }
type Endpoints = {
  user: "GET";
  post: "POST";
};

type ApiRoutes<T> = {
  [K in keyof T as `/api/${string & K}`]: T[K];
};

const routes: ApiRoutes<Endpoints> = {
  "/api/user": "GET",
  "/api/post": "POST",
};

console.log("API Routes:", routes);


// 3 (Tricky): RemovePrefix<T> that Removes prefix like 'api_' from keys
type WithPrefix = {
  api_user: string;
  api_token: string;
};

type RemoveApiPrefix<T> = {
  [K in keyof T as K extends `api_${infer Rest}` ? Rest : never]: T[K];
};

type CleanKeys = RemoveApiPrefix<WithPrefix>;

const cleanKeys: CleanKeys = {
  user: "Pranav",
  token: "123456",
};

console.log("Cleaned Keys:", cleanKeys);


// ----------------------------------------
// ✅ Summary
// ----------------------------------------
// - Template literal types let you build string types dynamically
// - Use them for key remapping, naming conventions, and data modeling
// - Combine with `Capitalize`, `infer`, and conditionals for powerful use

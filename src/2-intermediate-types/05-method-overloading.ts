export {};

// 🔁 Method Overloading in TypeScript

// ✅ Basic Example: Printer
class Printer {
  print(message: string): void;
  print(value: number): void;
  print(arg: any): void {
    console.log("Printing:", arg);
  }
}

const printer = new Printer();
printer.print("Hello");
printer.print(42);


// --------------------------------------------------
// 🧪 Mini Challenge 
// --------------------------------------------------

// 1: Calculator class with add()
class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(10, 20));       // Output: 30
console.log(calc.add("10", "20"));   // Output: "1020"


// 2: ResponseHandler class
class ResponseHandler {
  handle(input: string): void;
  handle(input: object): void;
  handle(input: null): void;
  handle(input: any): void {
    if (input === null) {
      console.log("Received null response.");
    } else if (typeof input === "string") {
      console.log("Response as string:", input);
    } else if (typeof input === "object") {
      console.log("Response as object:", JSON.stringify(input));
    } else {
      console.log("Unknown response type.");
    }
  }
}

const handler = new ResponseHandler();

handler.handle("Success");
handler.handle({ status: 200, message: "OK" });
handler.handle(null);

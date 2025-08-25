// A simple function to test
export function add(a: number, b: number): number {
  return a + b;
}

// Another function (with a small edge case)
export function greet(name?: string): string {
  return name ? `Hello, ${name}!` : "Hello, Guest!";
}

/* ---------------------------------------------------
   Vitest Test Cases
   Note: Normally tests are written in separate files
   with `.test.ts` or `.spec.ts` extensions.
   Here, we’re keeping them inline for learning.
--------------------------------------------------- */

import { describe, it, expect } from "vitest";

describe("add function", () => {
  it("should add two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("should work with negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });
});

describe("greet function", () => {
  it("should greet with a name", () => {
    expect(greet("Pranav")).toBe("Hello, Pranav!");
  });

  it("should greet with default if no name", () => {
    expect(greet()).toBe("Hello, Guest!");
  });
});
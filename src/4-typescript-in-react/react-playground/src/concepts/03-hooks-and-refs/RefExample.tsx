// Accessing and typing DOM elements with useRef

import { useRef, useEffect } from "react";

export default function RefExample() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus(); // Safely focus input if it exists
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Ref Example</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Auto focused input"
        className="border px-2 py-1"
      />
    </div>
  );
}

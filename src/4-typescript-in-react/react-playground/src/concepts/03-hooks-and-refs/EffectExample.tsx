// useEffect with typed state and effect dependencies

import { useEffect, useState } from "react";

export default function EffectExample() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []); // empty array tells TypeScript: no deps

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Effect Example</h2>
      <p className="text-lg">Count: {count}</p>
    </div>
  );
}

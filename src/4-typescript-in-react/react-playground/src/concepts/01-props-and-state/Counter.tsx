//  useState with type annotation
import React, { useState } from 'react';

export const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0); // Type annotation

  return (
    <div className="p-4">
      <p className="mb-2">You clicked {count} times</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-1 bg-blue-500 text-white rounded"
      >
        Increment
      </button>
    </div>
  );
};
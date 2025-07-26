import React, { useState } from "react";

type RenderProps = {
  children: (count: number) => React.ReactNode;
};

const Counter: React.FC<RenderProps> = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {children(count)}
      <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default function RenderPropsDemo() {
  return (
    <Counter>
      {(count) => <p>The count is {count}</p>}
    </Counter>
  );
}
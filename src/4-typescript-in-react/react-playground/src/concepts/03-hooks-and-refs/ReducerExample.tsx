// useReducer with strict types using discriminated unions

import { useReducer } from "react";

type CounterState = {
  count: number;
};

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset"; payload: number };

const reducer = (state: CounterState, action: Action): CounterState => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: action.payload };
    default:
      return state;
  }
};

export default function ReducerExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Reducer Example</h2>
      <p className="text-lg mb-2">Count: {state.count}</p>
      <div className="space-x-2">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: "reset", payload: 0 })}
          className="bg-gray-500 text-white px-2 py-1 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

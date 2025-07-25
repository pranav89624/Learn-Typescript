import { useRef } from 'react';

const InputRefUsage = () => {
  // Type the ref with HTMLInputElement
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus(); // Safe due to typing
  };

  return (
    <div className="p-4 space-y-3">
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus"
        className="border p-2 rounded w-full"
      />
      <button onClick={handleFocus} className="px-4 py-2 bg-purple-500 text-white rounded">
        Focus Input
      </button>
    </div>
  );
};

export default InputRefUsage;

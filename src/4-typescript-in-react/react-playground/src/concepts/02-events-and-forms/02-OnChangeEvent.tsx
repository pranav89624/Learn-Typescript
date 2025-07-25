import React, { useState } from 'react';

const OnChangeEvent = () => {
  const [value, setValue] = useState('');

  // ChangeEvent is used for input, textarea, select, etc.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value); // e.target is properly typed
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type here..."
        className="border p-2 rounded w-full"
      />
      <p className="mt-2">Current value: {value}</p>
    </div>
  );
};

export default OnChangeEvent;

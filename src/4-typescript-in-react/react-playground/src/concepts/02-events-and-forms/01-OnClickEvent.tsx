import React from 'react';

const OnClickEvent = () => {
  // MouseEvent is the correct type for onClick in buttons/divs/etc.
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked!', e.currentTarget);
    document.getElementById('click-me-button')!.innerHTML = 'Clicked!'; // Example of DOM manipulation
  };

  return (
    <div className="p-4">
      <button id='click-me-button' onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded">
        Click Me
      </button>
    </div>
  );
};

export default OnClickEvent;

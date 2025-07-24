// // Children prop (ReactNode)
import React from "react";

// Define the props type for the Wrapper component
// This component will accept any React nodes as children
type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="p-4 bg-gray-50 text-black rounded shadow-sm">
      {children}
    </div>
  );
};

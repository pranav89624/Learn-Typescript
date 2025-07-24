// Alert component with union type props
import React from 'react';

// Define the props type using a union type
// This allows for different types of alerts with specific messages
type AlertProps =
  | { type: 'success'; message: string }
  | { type: 'error'; message: string };

export const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const className =
    type === 'success' ? 'text-green-600' : 'text-red-600';

  return <p className={`p-2 font-semibold ${className}`}>{message}</p>;
};
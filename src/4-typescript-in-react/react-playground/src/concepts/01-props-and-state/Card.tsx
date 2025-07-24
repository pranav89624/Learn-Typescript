// Optional & default props
import React from 'react';

type CardProps = {
  title: string;
  subtitle?: string; // Optional prop
};

export const Card: React.FC<CardProps> = ({ title, subtitle = 'No subtitle' /* Default Prop */ }) => {
  return (
    <div className="p-4 border border-blue-200 rounded">
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
};
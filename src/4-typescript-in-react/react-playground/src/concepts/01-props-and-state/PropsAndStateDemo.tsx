// Combining everything
import React from "react";
import { Greeting } from "./Greeting";
import { Counter } from "./Counter";
import { Card } from "./Card";
import { Wrapper } from "./Wrapper";
import { Alert } from "./Alert";

export const PropsAndStateDemo: React.FC = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Props and State Demo</h1>

      <Greeting name="Pranav" isLoggedIn={true} />

      <Card title="My Project" />
      <Card title="Important Note" subtitle="Don't forget deadlines!" />

      <Alert type="success" message="All systems operational" />
      <Alert type="error" message="Something went wrong" />

      <Counter />

      <Wrapper>
        <p>This is wrapped content using the children prop.</p>
      </Wrapper>
    </div>
  );
};

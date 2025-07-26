import React from "react";

type LabelProps = {
  label: string;
};

const HelloLabel: React.FC<LabelProps> = ({ label }) => {
  return <h2>{label}</h2>;
};

type WrapperProps = {
  Component: React.ComponentType<LabelProps>;
};

const Wrapper: React.FC<WrapperProps> = ({ Component }) => {
  return <Component label="Passed from Wrapper!" />;
};

export default function ComponentAsPropDemo() {
  return <Wrapper Component={HelloLabel} />;
}
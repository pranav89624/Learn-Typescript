import React from "react";

type BoxProps<T extends React.ElementType> = {
  as?: T;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const Box = <T extends React.ElementType = 'div'>({
  as,
  children,
  ...rest
}: BoxProps<T>) => {
  const Component = as || 'div';
  return <Component {...rest}>{children}</Component>;
};

export default function PolymorphicBoxDemo() {
  return (
    <>
      <Box className="bg-blue-500 rounded text-white p-4" as="button" onClick={() => alert("Button clicked!")}>
        Button Box
      </Box>
      <Box className="bg-green-500 rounded text-white p-4 ml-3" as="a" href="https://example.com" target="_blank">
        Link Box
      </Box>
    </>
  );
}
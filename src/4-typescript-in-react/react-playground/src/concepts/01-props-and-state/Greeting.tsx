// Basic typed props

// Define the props type using TypeScript types
type GreetingProps = {
  name: string;
  isLoggedIn: boolean;
};

export const Greeting = ({ name, isLoggedIn }: GreetingProps) => {
  return (
    <div className="p-4 border rounded">
      {isLoggedIn ? (
        <h2 className="text-green-600">Welcome back, {name}!</h2> //Destructuring Props
      ) : (
        <h2 className="text-gray-600">Please log in</h2>
      )}
    </div>
  );
};
import Layout from "./components/Layout";
import { PropsAndStateDemo } from "./concepts/01-props-and-state";

function App() {
  return (
    <Layout
      title="TypeScript Playground"
      subtitle="Crafted with Tailwind CSS and good code vibes."
    >
      <div>
        <p className="brand-paragraph mb-6">
          Welcome! This is your custom React + TypeScript sandbox. Modify,
          experiment, and learn in style.
        </p>
      </div>

      <PropsAndStateDemo />
    </Layout>
  );
}

export default App;

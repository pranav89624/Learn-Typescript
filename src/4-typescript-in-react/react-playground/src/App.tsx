import Layout from "./components/Layout";
// import { PropsAndStateDemo } from "./concepts/01-props-and-state";
import EventHandlingAndForms from "./concepts/02-events-and-forms";

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

      {/* <PropsAndStateDemo /> */}
      <EventHandlingAndForms />
    </Layout>
  );
}

export default App;

import Layout from "./components/Layout";
// import { PropsAndStateDemo } from "./concepts/01-props-and-state";
// import EventHandlingAndForms from "./concepts/02-events-and-forms";
// import HooksAndRefs from "./concepts/03-hooks-and-refs";
// import ContextApiExample from "./concepts/04-context-api";
// import CustomHooksExample from "./concepts/05-custom-hooks-generics";
import ComponentCompositionExamples from "./concepts/06-component-composition";

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
      {/* <EventHandlingAndForms /> */}
      {/* <HooksAndRefs /> */}
      {/* <ContextApiExample /> */}
      {/* <CustomHooksExample /> */}
      <ComponentCompositionExamples />
    </Layout>
  );
}

export default App;

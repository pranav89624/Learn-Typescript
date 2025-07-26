import ComponentAsPropExample from "./01-ComponentAsProp";
import RenderPropsExample from "./02-RenderProps";
import PolymorphicBoxExample from "./03-PolymorphicBox";
import WithLoadingHOCExample from "./04-WithLoadingHOC";

const ComponentCompositionExamples = () => {
  return (
    <div className="p-6 space-y-12">
      <h1 className="text-2xl font-bold mb-6">
        Component Composition Examples
      </h1>
      {/* ✅ Passing Components as Props */}
      <section>
        <h2 className="text-xl font-bold mb-2">Component as Prop</h2>
        <ComponentAsPropExample />
      </section>

      {/* ✅ Render Props Pattern */}
      <section>
        <h2 className="text-xl font-bold mb-2">Render Props</h2>
        <RenderPropsExample />
      </section>

      {/* ✅ Polymorphic Component with `as` Prop */}
      <section>
        <h2 className="text-xl font-bold mb-2">
          Polymorphic Component (`as` prop)
        </h2>
        <PolymorphicBoxExample />
      </section>

      {/* ✅ Higher-Order Component (HOC) */}
      <section>
        <h2 className="text-xl font-bold mb-2">Higher-Order Component (HOC)</h2>
        <WithLoadingHOCExample />
      </section>
    </div>
  );
};

export default ComponentCompositionExamples;

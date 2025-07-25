// Entry point for all files in this folder
// Import this file inside App.tsx for demo switching

import RefExample from "./RefExample";
import EffectExample from "./EffectExample";
import ReducerExample from "./ReducerExample";

export default function HooksAndRefs() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Hooks and Refs</h1>
      <RefExample />
      <EffectExample />
      <ReducerExample />
    </div>
  );
}

import OnClickEvent from './01-OnClickEvent';
import OnChangeEvent from './02-OnChangeEvent';
import OnSubmitEvent from './03-OnSubmitEvent';
import InputRefUsage from './04-InputRefUsage';

const EventHandlingAndForms = () => {
  return (
    <div className="space-y-10 p-6">
      {/* 👉 Click Event Demo */}
      <section>
        <h2 className="text-xl font-semibold mb-2">🔘 Button Click (onClick)</h2>
        <OnClickEvent />
      </section>

      {/* 👉 Input Change Event */}
      <section>
        <h2 className="text-xl font-semibold mb-2">📝 Input Change (onChange)</h2>
        <OnChangeEvent />
      </section>

      {/* 👉 Form Submission Event */}
      <section>
        <h2 className="text-xl font-semibold mb-2">📨 Form Submission (onSubmit)</h2>
        <OnSubmitEvent />
      </section>

      {/* 👉 Ref + Input Focus */}
      <section>
        <h2 className="text-xl font-semibold mb-2">🔍 Input Focus with useRef</h2>
        <InputRefUsage />
      </section>
    </div>
  );
};

export default EventHandlingAndForms;

import TabSwitcher from "./TabSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import LayoutCard from "./LayoutCard";

const PracticalUI = () => {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">Practical Types in UI</h1>
      <section className="grid gap-8">
        <TabSwitcher />
        <ThemeSwitcher />
        <LayoutCard layout="blog" />
      </section>
    </main>
  );
};

export default PracticalUI;

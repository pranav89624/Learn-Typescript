import FetchWithFetch from "./FetchWithFetch";
import FetchWithAxios from "./FetchWithAxios";
import SafeFetch from "./SafeFetch";

const TypingExternalData = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-8">
        Typing External Data in TypeScript
      </h1>
      <section className="grid md:grid-cols-2 gap-8">
        <FetchWithFetch />
        <FetchWithAxios />
        <SafeFetch />
      </section>
    </main>
  );
};

export default TypingExternalData;

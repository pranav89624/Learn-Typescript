import { useEffect, useState } from "react";

type Post = {
  id: number;
  title?: string;
  body?: string;
};

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

const SafeFetch = () => {
  const [state, setState] = useState<FetchState<Post>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!res.ok) throw new Error("Failed to load post");
        const data: Post = await res.json();
        setState({ data, loading: false, error: null });
      } catch (err: unknown) {
        let message = "An unknown error occurred";
        if (err instanceof Error) {
          message = err.message;
        }
        setState({ data: null, loading: false, error: message });
      }
    };

    fetchPost();
  }, []);

  const { data, loading, error } = state;

  return (
    <div className="p-6 bg-gray-800 shadow rounded-lg col-span-2">
      <h2 className="text-xl font-semibold mb-4">✅ Safe Fetch with States</h2>
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {data && (
        <div>
          <h3 className="text-lg font-bold">{data.title}</h3>
          <p className="text-gray-700 mt-2">{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default SafeFetch;

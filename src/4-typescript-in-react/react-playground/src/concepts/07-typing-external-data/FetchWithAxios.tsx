import axios from "axios";
import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const FetchWithAxios = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data } = await axios.get<Todo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <div className="p-6 bg-gray-800 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">⚡ Fetched via Axios</h2>
      <ul className="list-disc ml-6 space-y-1">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span className={todo.completed ? "line-through text-gray-500" : ""}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchWithAxios;

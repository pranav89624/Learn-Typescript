import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

const FetchWithFetch = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data: User[] = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-6 bg-gray-800 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">📡 Fetched via fetch()</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-2 rounded">
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchWithFetch;

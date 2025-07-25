import { useFetch } from "./useFetch";

// 👤 Define the structure of the user we expect
type User = {
  id: number;
  name: string;
  email: string;
};

const UsersList = () => {
  const { data: users, loading, error } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4 rounded border border-gray-300">
      <h2 className="text-xl font-semibold mb-2">User List</h2>
      <ul className="space-y-1">
        {users?.map((user) => (
          <li key={user.id} className="text-gray-300">
            👤 {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
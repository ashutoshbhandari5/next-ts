import { sort } from "fast-sort";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  const sortedData = sort(users).asc(
    sortOrder === "name" ? (user) => user.name : (user) => user.email
  );

  return (
    <table className="table table-bordered ">
      <thead>
        <tr>
          <th></th>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((el, i) => (
          <tr key={el.id}>
            <td>{i + 1}</td>
            <td>{el.name}</td>
            <td>{el.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;

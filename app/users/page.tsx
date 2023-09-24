import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users list</h1>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;

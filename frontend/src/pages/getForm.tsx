import { useEffect, useState } from "react";
import { getUser, type UserPostInput } from "../service/user-api";

export function GetForm() {
  const [users, setUsers] = useState<UserPostInput[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUser();
        console.log("Res Data", res.data);
        setUsers(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, []);
  console.log("Users Data", users);

  return (
    <>
      {users.map((user, index) => (
        <div key={index} className="flex flex-col justify-center items-center">
          <p>{user.title}</p>
          <p>{user.image}</p>
        </div>
      ))}
    </>
  );
}

import { useEffect, useState } from "react";
import { getUser, type UserPostInput } from "../service/user-api";

export function GetForm() {
  const [users, setUsers] = useState<UserPostInput[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUser();
        console.log(res.data);
        setUsers(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, []);

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

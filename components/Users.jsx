"use client";
import { useRouter } from "next/navigation";

function Users({ users }) {
  const router = useRouter();

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li
          className="list-group-item d-flex align-items-center list-group-item-action flex-wrap justify-content-between"
          key={user.id}
          onClick={() => {
            router.push(`users/${user.id}`);
          }}
        >
          <div className="text-align-center">
            <h5>
              {user.first_name} {user.last_name}
            </h5>
            <p>{user.email}</p>
          </div>
          <img src={user.avatar} alt={user.email} className="rounded-circle" />
        </li>
      ))}
    </ul>
  );
}

export default Users;

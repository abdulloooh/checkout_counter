import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data: users } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(users);
    }

    getUsers(); // no await here since we can't decorate hook with async
  });

  return (
    <main role="main" className="container">
      <br />
      <br />
      <div>
        Hello from Users fetched with axios and react hook from jsonplaceholder
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}

/*
No need to check for truthy in a state variable like {users && .../*an expresseion that uses users *\/}
Instead, initialize it eg to a string, a number or an array
*/

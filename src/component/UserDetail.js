// component.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/user/userSlice";

export default function UserDetails() {
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const users = useSelector((state) => state.user.users);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = Math.random().toString(36).substr(2, 9); // generate a random ID
    dispatch(addUser({ id: userId, name, email }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" />
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
        <button type="submit">Add User</button>
      </form>
      <h2>Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

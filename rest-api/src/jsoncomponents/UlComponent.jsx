import React from "react";

export default function UlComponent({ user, deleteItem }) {
  console.log(user);
  return (
    <li className="list-item">
      <input type="checkbox" />
      <h3>{user.name}</h3>
      <button onClick={() => deleteItem(user.id)}>Delete</button>
    </li>
  );
}

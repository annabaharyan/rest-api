import React, { useEffect, useState } from "react";
import UlComponent from "./UlComponent";

export default function MainComponent() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("users")) {
      setusers(JSON.parse(localStorage.getItem("users")));
    } else {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => localStorage.setItem("users", JSON.stringify(data)))
        .then((res) => setusers(JSON.parse(localStorage.getItem("users"))));
    }
  }, []);

  const deleteItem = (id) => {
    setusers(users.filter((elem) => elem.id !== id));
  };
  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  return (
    <div>
      {users && (
        <ul>
          {users.map((user, ind) => (
            <UlComponent key={ind} user={user} deleteItem={deleteItem} />
          ))}
        </ul>
      )}
    </div>
  );
}

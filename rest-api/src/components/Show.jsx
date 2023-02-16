import axios from "axios";
import React from "react";
import { base } from "../constants";

export default function Show({ state, onEdit, deleteItem }) {
 
  return (
    <div>
      <ul className="container">
        {state.map((res) => (
          <li key={res.id} className="every-li">
            <div className="item-div">
              <h3> {res.name}</h3>
              <img src={res.image} alt="" />
              <p>{res.price} AMD</p>
              <button onClick={() => deleteItem(res.id)}>Delete</button>
              <button onClick={() => onEdit(res.id)}> Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

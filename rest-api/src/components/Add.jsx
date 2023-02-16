import axios from "axios";
import React, { useState } from "react";
import { base } from "../constants";

export default function Add({ addnewProd }) {
  const [prod, setsprod] = useState({
    name: "",
    price: "",
    image: "",
    brand: "",
  });
  const [err, seterr] = useState("");
  const handleSumbit = (e) => {
    e.preventDefault();
    for (let value of Object.values(prod)) {
      if (!value) {
        seterr("Fill all fields");
      }
      if (!Number.isInteger(+prod.price)) {
        seterr("Price must be a number");
      }
    }
    axios.post(base, prod).then((r) => {
      addnewProd(r.data.product);
      setsprod({
        name: "",
        price: "",
        image: "",
        brand: "",
      });
      seterr("");
    });
  };
  return (
    <div>
      <h2>Add new elem</h2>
      {err && <p style={{ color: "red" }}>{err}</p>}
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="product name"
          value={prod.name}
          onChange={(e) => setsprod({ ...prod, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="product price"
          value={prod.price}
          onChange={(e) => setsprod({ ...prod, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="product image url"
          value={prod.image}
          onChange={(e) => setsprod({ ...prod, image: e.target.value })}
        />
        <input
          type="text"
          placeholder="brand"
          value={prod.brand}
          onChange={(e) => setsprod({ ...prod, brand: e.target.value })}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

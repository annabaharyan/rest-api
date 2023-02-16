import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Add from "./Add";
import Show from "./Show";
import { base } from "../constants";
import EditProduct from "./EditProduct";

export default function ADDShow() {
  const [state, setstate] = useState([]);
  const [editstate, setEditState] = useState(-1);
  useEffect(() => {
    axios.get(base).then((r) => setstate(r.data.items));
  }, []);
  const addnewProduct = (prod) => setstate([...state, prod]);
  const editedProduct = (product) => {
    const index = state.findIndex((elem) => elem.id === product.id);
    state[index] = product;
    setstate([...state]);
  };
  const deleteItem = (id) => {
    axios.delete(`${base}/${id}`).then((r) => {
      setstate(state.filter((res) => res.id !== id));
    });
  };
  return (
    <div className="app">
      <Add addnewProd={addnewProduct} />
      <Show state={state} onEdit={setEditState} deleteItem={deleteItem} />
      {editstate !== -1 && (
        <EditProduct
          id={editstate}
          closeModal={() => setEditState(-1)}
          editedProduct={editedProduct}
          deleteItem={deleteItem} 
        />
      )}
    </div>
  );
}

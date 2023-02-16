import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { base } from "../constants";
import axios from "axios";
export default function EditProduct({
  id,
  closeModal,
  editedProduct,
  deleteItem,
}) {
  const [prod, setprod] = useState(null);
  const modalStyle = {
    content: { width: "400px", height: "320px" },
    overlay: { backgroundColor: "rgba(0,0,0,.8" },
  };
  useEffect(() => {
    axios.get(`${base}/${id}`).then((res) => setprod(res.data.product));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${base}/${id}`, prod).then((res) => {
      editedProduct(prod);

      closeModal();
    });
  };
  return (
    <div>
      <ReactModal
        isOpen={true}
        ariaHideApp={false}
        style={modalStyle}
        onRequestClose={() => closeModal()}
      >
        <h3>EditProduct</h3>
        <form className="modalForm" onSubmit={handleSubmit}>
          <div>
            <label>product name</label>
            <input
              type="text"
              value={prod ? prod.name : ""}
              onChange={(e) => setprod({ ...prod, name: e.target.value })}
            />
          </div>
          <div>
            <label>price</label>
            <input
              type="text"
              value={prod ? prod.price : ""}
              onChange={(e) => setprod({ ...prod, price: e.target.value })}
            />
          </div>
          <button>Save</button>
        </form>

        <div className="editBtns">
          <button
            onClick={() => {
              deleteItem(prod.id);
              closeModal();
            }}
          >
            Delete Item
          </button>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      </ReactModal>
    </div>
  );
}

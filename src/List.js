import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ list, deleteItem, editItem }) => {
  return (
    <div className="grocery-list">
      {list.map((item) => {
        const { id, title } = item;
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button className="edit-btn" onClick={() => deleteItem(id)}>
                <FaTrash />
              </button>
              <button className="edit-btn" onClick={() => editItem(id)}>
                <FaEdit />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;

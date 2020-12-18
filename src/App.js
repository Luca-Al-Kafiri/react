import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import List from "./List";

const setLocal = () => {
  let localList = localStorage.getItem("list");
  if (localList) {
    return JSON.parse(localList);
  }
  return [];
};

function App() {
  const [name, setName] = useState("");
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });
  const [list, setList] = useState(setLocal());
  const [isEdited, setIsEdited] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "Please enter an item");
    } else if (name && isEdited) {
      showAlert(true, "success", "item Updated");
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setIsEdited(false);
      setEditId(null);
    } else {
      showAlert(true, "success", "item added");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const deleteItem = (id) => {
    showAlert(true, "danger", "Item deleted");
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const editItem = (id) => {
    const updated = list.find((item) => item.id === id);
    setName(updated.title);
    setEditId(id);
    setIsEdited(true);
  };

  const clearList = () => {
    showAlert(true, "danger", "the list is empty");
    setList([]);
  };

  const showAlert = (show = false, type, msg) => {
    setAlert({ show, type, msg });
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery list</h3>
        <div className="form-control">
          <input
            type="text"
            placeholder="e.g. bread"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            {isEdited ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List list={list} deleteItem={deleteItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            Clear list
          </button>
        </div>
      )}
    </section>
  );
}

export default App;

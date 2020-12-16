import React, { useState, useEffect } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
function App() {
  const [color, setColor] = useState("");
  const [alert, setAlert] = useState(false);
  const [list, setList] = useState(new Values("#f15555").all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setAlert(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={alert ? "error" : null}
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color) => {
          return <SingleColor hex={color.hex} />;
        })}
      </section>
    </>
  );
}

export default App;

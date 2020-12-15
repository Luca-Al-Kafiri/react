import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (count > 8) {
      setText(data.slice(0, 8));
      return;
    }
    if (count <= 0) {
      setText(data.slice(0, 1));
      return;
    }
    setText(data.slice(0, count));
  };

  return (
    <section className="section-center" onSubmit={handleSubmit}>
      <h3>Generate great Lorem</h3>
      <form className="lorem-form">
        <label htmlFor="amount">Paragraph : </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;

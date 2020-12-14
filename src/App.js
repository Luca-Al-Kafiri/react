import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import Slide from "./Slide";

function App() {
  const [index, setIndex] = useState(0);
  const [people, setPoeple] = useState(data);

  return (
    <article>
      <div>
        <img
          className="person-img"
          src={people[index].image}
          alt={people[index].name}
        />
        <h2>{people[index].name}</h2>
        <p className="title">{people[index].title}</p>
        <p className="text">{people[index].quote}</p>
        <FaQuoteRight className="icon" />
      </div>
      <div>
        <Slide index={index} people={people} setIndex={setIndex} />
      </div>
    </article>
  );
}

export default App;

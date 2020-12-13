import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Nav = ({ desc }) => {
  const [more, setMore] = useState(false);
  return (
    <div>
      <button className="filter-btn" onClick={() => setMore(!more)}>
        {more ? "Less" : "Info"}
      </button>
      <div className="more-info">{more && desc}</div>
    </div>
  );
};

export default Nav;

import React, { useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Slide = ({ index, setIndex, people }) => {
  const slidePerson = (x) => {
    let lastPerson = people.length - 1;
    if (x < 0) {
      setIndex(lastPerson);
      return;
    }
    if (x > lastPerson) {
      setIndex(0);
      return;
    }
    setIndex(x);
  };

  useEffect(() => {
    let slider = setInterval(() => {
      slidePerson(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div>
      <button className="prev" onClick={() => slidePerson(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => slidePerson(index + 1)}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Slide;

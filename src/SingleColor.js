import React, { useState, useEffect } from "react";

const SingleColor = ({ hex }) => {
  const [error, setError] = useState(false);
  const hexValue = `#${hex}`;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setError(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [error]);

  return (
    <article
      className="color"
      style={{
        backgroundColor: `${hexValue}`,
      }}
      onClick={() => {
        setError(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p
        style={{
          color: "white",
          fontSize: "30px",
          fontWeight: "900",
          WebkitTextStroke: "1px black",
        }}
      >
        #{hex}
      </p>
      <p>{error && "copied to clipboard"}</p>
    </article>
  );
};

export default SingleColor;

import React from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const { setSearch } = useGlobalContext();
  const searchValue = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = () => {
    const newSearch = searchValue.current.value;
    setSearch(newSearch);
  };

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="search">Search your cocktail</label>
          <input
            id="search"
            name="search"
            type="text"
            ref={searchValue}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default Search;

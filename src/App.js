import React, { useState } from "react";
import menu from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories] = useState(allCategories);
  const filterMenu = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newMenu = menu.filter((item) => item.category === category);
    setMenuItems(newMenu);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu menu={menuItems} />
      </section>
    </main>
  );
}

export default App;

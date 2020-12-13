import React from "react";
import Nav from "./Nav";

const Menu = ({ menu }) => {
  return (
    <div className="section-center">
      {menu.map((item) => {
        return (
          <article key={item.id} className="menu-item">
            <img src={item.img} alt={item.title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4>${item.price}</h4>
              </header>
              <Nav {...item} />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

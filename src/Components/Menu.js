import React, { useState } from 'react';

const Menu = ({allMenu}) => {
  return (
    <>
      <div className="section-center">
        {allMenu.map((menuItem) => {
          return (
            <article key={menuItem.id} className="menu-item">
              <img src={menuItem.img} alt={menuItem.title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{menuItem.title}</h4>
                  <h4 className="price">${menuItem.price}</h4>
                </header>
                <p className="item-text">{menuItem.desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </> 
  
   
  );
};

export default Menu;

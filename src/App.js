import React, { useState } from 'react';
import menu from './data';
import Menu from './Components/Menu';
import Categories from './Components/Categories';


const allCategorie= ["all" ,... new Set(menu.map((menuItem) =>
menuItem.category
))]


function App() {
    const [menuInfos, setMenuInfos]= useState(menu)
    const [categories, setCategories]= useState(allCategorie)

    const categorieHandel = (item) => {
      if(item === "all")
      {
        setMenuInfos(menu)
        return
      }
      let finalItems = menu.filter((menuInfo) => menuInfo.category === item);
        setMenuInfos(finalItems)
    }



  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
          <Categories uniqCategorie={categories} categorieHandel={categorieHandel} />
          <Menu allMenu={menuInfos}/>
      </section>
    </main>
    
  );
}

export default App;

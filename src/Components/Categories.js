import React, { useState } from "react";

const Categories = ({uniqCategorie,categorieHandel}) => {

  const [mainCategorie, setMainCategorie]= useState("all")


  return (
    <div className="btn-container"> 
      {uniqCategorie.map((item,index) =>(
     
        <button onClick={()=>{categorieHandel(item)
                          setMainCategorie(item)}}
          key={index}
          type="button"
          className={
            item === mainCategorie ? "filter-btn highlight" : "filter-btn"
          }
        >
          {item}
        </button>
      ))} 
    </div>
  );
};

export default Categories;

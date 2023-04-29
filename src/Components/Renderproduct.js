import React, { useEffect, useState } from "react";

import "./Renderproduct.css"
//let arr=[];
const Renderproduct = ({data})=>{
  let [title,setTitle] =useState([]) 
  const Nextpage = (event)=>{
    <a href=""></a>

  }


  
  return (
    <div className="arrange-kart">
      {data.map((item) => (
        <div className="image-container">
          <div className="child-div">
            <img src={item.thumbnail}></img>
            <div className="title">
            <p>{`Title : ${item.title}`}</p>
            </div>
            <div className="price">
                <p>{`Price: ${item.price}`}</p>
                </div>
            <div className="btn">
              <button id={item.id} onClick={(e)=>Nextpage(e.target.id)}>Add To Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );


}

export default Renderproduct;
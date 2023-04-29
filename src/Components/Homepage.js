import React, {useEffect, useState } from "react";
import axios from "axios";
import Renderproduct from "./Renderproduct";


const Homepage = ()=>{

    let[filteredjson,setFilteredJson] = useState([])
    
    
    useEffect(()=>{
       
const data = axios
  .get("https://dummyjson.com/products")
  .then((response) => {
   // console.log(response.data.products);
    setFilteredJson(response.data.products);
     //console.log(filteredjson);
  })
  .catch((err) => {
    console.log(err);
  });
    },[])
  
  ////console.log(filteredjson);

 return(
    <Renderproduct data={filteredjson}></Renderproduct>
 )
 
 
    

}
export default Homepage;
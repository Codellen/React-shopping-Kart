import React from "react";


import Homepage from "./Components/Homepage";
import Renderproduct from "./Components/Renderproduct";
import axios from "axios";
import "./App.css";

const App = ()=>{


  

  return (
    
      <div className="container">
        <div className="Navbar">
          <div className="nav-title">
            <div className="first-title">
              <p>Shopping kart</p>
            </div>
            <div className="last-title">
              <span>Home Page</span>
              <span>Cart Page</span>
            </div>
          </div>

          <div className="Main-Content">
            <div className="Heading">
              <h1>All Items</h1>
            </div>
            <div className="render-product">
              
                <Homepage></Homepage>
              
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default App;

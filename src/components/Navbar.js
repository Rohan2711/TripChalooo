import { Component } from "react";

import { Link, Routes } from "react-router-dom";
import { Menuitems } from "./Menuitems";
import './NavbarStyle.css'

class Navbar extends Component {
  state = {
    clicked:false
  };
  handleClick=()=>{
    this.setState(
      {
        clicked:!this.state.clicked
      }
    )
  }
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Navbar-logo"> TripChalooo</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        {/* <i class="fa-solid fa-bars"></i> */}
        {/* <i class="fa-solid fa-xmark"></i> */}

        </div>
        <ul className={this.state.clicked ? "nav-menu active":"nav-menu" }>
            {Menuitems.map((item,index)=>{
                return(
                    <li key={index}>
                    <Link className={item.cname} to={item.url}>
                    <i className={item.icon}></i>
                    
              {item.title}
              </Link>
            
          </li>
                )
            })}
                <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
import React from 'react'
import { NavLink } from 'react-router-dom';

 const NavBar = (props) => {
     return(
         <div>
            <NavLink to="/home">Home Page</NavLink>
            <NavLink to="/doctors">Doctors</NavLink>
         </div>
     )
 }

 // <NavLink to="/"></NavLink>
 // <NavLink to="/"></NavLink>
 // <NavLink to="/"></NavLink>

export default NavBar

import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
        <li>
          <Link  to="/edit">Edit</Link>
        </li>
        <li >
          <Link to="/delete">Delete</Link>
        </li>
        <li>
          <Link  to="/logout">Logout</Link>
        </li>
        <li><Link to="/signup">Sign Up</Link></li>
        
      </ul>
    </div>
  );
};

export default Nav;

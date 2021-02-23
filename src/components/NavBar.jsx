import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar shadow">
      <Link to="/" className="link navbar-items middle">
        Home
      </Link>
      <Link to="/login" className="link navbar-items middle">
        Login or Create User
      </Link>
    </div>
  );
}

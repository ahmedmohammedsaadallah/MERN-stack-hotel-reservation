import "./navbar.css";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Fast Booking</span>
        </Link>
        {user ? (
          <div className="navItems">
            <span>{user.username}</span>
            <button
              onClick={() => {
                dispatch({ type: "LOGOUT" });
                navigate("/");
              }}
              className="navButton"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="navButton"
            >
              Register
            </button>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="navButton"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;

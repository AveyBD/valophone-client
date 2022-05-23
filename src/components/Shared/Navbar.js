import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <div className="navbar bg-green-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>

              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Valo Phone
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-1">
          {user ? (
            <>
              <p onClick={logout} className="btn btn-primary btn-outline">
                LogOut
              </p>
              <Link to={"/dashboard"} className="btn btn-primary btn-outline">
                Dashboard
              </Link>
            </>
          ) : (
            <Link to={"/login"} className="btn btn-primary btn-outline">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

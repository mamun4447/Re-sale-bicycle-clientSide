import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.gif";
import Buttons from "../Components/Buttons";
import { AuthContext } from "../Context/AuthProvider";
import CategoryHooks from "../Hooks/CategoryHooks";

const NavBar = () => {
  const [categories] = CategoryHooks();
  const { user, LogOut } = useContext(AuthContext);

  const handleLogOut = (event) => {
    event.preventDefault();
    localStorage.removeItem("accessToken");
    return LogOut();
  };
  return (
    <div className="">
      <nav className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link className="justify-between">
                  Categories
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2">
                  {categories.map((category) => (
                    <li key={category._id}>
                      <Link>{category.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link>Blogs</Link>
              </li>
            </ul>
          </div>

          <Link to="https://flowbite.com/" className="flex items-center">
            <img
              src={logo}
              className="h-10 w-12 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-[#297B77] text-xl font-semibold whitespace-nowrap dark:text-white">
              Get Ride
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link>
                Categories
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2 bg-slate-100">
                {categories.map((category) => (
                  <li key={category._id}>
                    <Link to={`/categories/${category._id}`}>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <p onClick={handleLogOut}>
              <Buttons>Log Out</Buttons>
            </p>
          ) : (
            <Link to="/login">
              <Buttons>Log In</Buttons>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

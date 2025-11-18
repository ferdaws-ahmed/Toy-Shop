

import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import LogoImg from '../../assets/logo.png';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext); 

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Logout failed!");
      });
  };

  const links = (
    <>
      <li className="font-semibold navLink">
        <NavLink to="/">Home</NavLink>
      </li>

      
      {user && (
        <li className="font-semibold navLink">
          <NavLink to="/kidsplayzone">Kids Play Zone</NavLink>
        </li>
      )}

      <li className="font-semibold navLink">
        <NavLink to="/myprofile">My Profile</NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost md:hidden lg:hidden"
          >
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
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <div className="flex gap-3 items-center">
          <Link to="/">
            <img className="w-[70px] ml-3" src={LogoImg} alt="" />
          </Link>
          <Link to="/">
            <a className="text-xl font-bold hidden md:block md:text-orange-400 lg:text-blue-600">
              Toy Shop
            </a>
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden md:flex lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <>
            
            <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
              <img
                src={
                  user.photoURL ||
                  "https://i.ibb.co/MBtjqXQ/user.png"
                }
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-blue-400 object-cover"
              />
            </div>
            
            <button
              onClick={handleLogout}
              className="btn font-bold text-lg btn-error text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn font-bold text-lg">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

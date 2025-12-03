import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import LogoImg from "../../assets/logo.png";
import { AuthContext } from "../../providers/AuthProvider";
import { ThemeContext } from "../../Components/ThemeContext/ThemeContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Logged out successfully!"))
      .catch(() => toast.error("Logout failed!"));
  };

  const linkColor = (isActive) =>
    isActive
      ? "text-orange-500"
      : theme === "light"
      ? "text-black"
      : "text-white";

  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => `font-semibold ${linkColor(isActive)}`}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allToys" className={({ isActive }) => `font-semibold ${linkColor(isActive)}`}>
          All Items
        </NavLink>
      </li>
      <li>
        <NavLink to="/kidsplayzone" className={({ isActive }) => `font-semibold ${linkColor(isActive)}`}>
          Kids Play Zone
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => `font-semibold ${linkColor(isActive)}`}>
          About us
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({ isActive }) => `font-semibold ${linkColor(isActive)}`}>
          Contact
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/myprofile" className={({ isActive }) => `font-semibold ${linkColor(isActive)}`}>
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <>
      <nav
        className={`fixed top-0 w-10/12 mx-auto z-50 shadow-sm transition-colors duration-300 ${
          theme === "light" ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <div className="flex justify-between items-center h-16 px-2">

          {/* Logo */}
          <div className="flex gap-3 items-center">
            <Link to="/">
              <img className="w-[70px]" src={LogoImg} alt="Logo" />
            </Link>
            <Link to="/">
              <span className="text-xl font-bold hidden md:block">Toy Shop</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex menu menu-horizontal items-center gap-4">{links}</ul>

          
          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            <label className="swap swap-rotate cursor-pointer">
              <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
              {/* Sun */}
              <svg
                className="swap-off w-8 h-8 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M8.05 15.95l-1.414 1.414m12.728 0l-1.414-1.414M8.05 8.05L6.636 6.636"
                />
              </svg>
              {/* Moon */}
              <svg
                className="swap-on h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </label>

            {user ? (
              <>
                <img
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full border-2 border-blue-400 object-cover"
                  src={user.photoURL || "https://i.ibb.co/MBtjqXQ/user.png"}
                  alt="User"
                />
                <button onClick={handleLogout} className="btn btn-error text-white">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="btn">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden dropdown dropdown-end relative">
            <label tabIndex={0} className="btn btn-ghost">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 p-4 w-56 max-h-96 overflow-y-auto rounded-lg shadow-lg
                ${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}
              `}
            >
              {links}

              {/* Theme toggle inside dropdown */}
              <li className="flex justify-center mt-2">
                <label className="swap swap-rotate cursor-pointer">
                  <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
                  {/* Sun */}
                  <svg
                    className="swap-off w-6 h-6 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M8.05 15.95l-1.414 1.414m12.728 0l-1.414-1.414M8.05 8.05L6.636 6.636"
                    />
                  </svg>
                  {/* Moon */}
                  <svg
                    className="swap-on h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="h-16"></div>
    </>
  );
};

export default Navbar;

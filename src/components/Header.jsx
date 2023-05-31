import React, { useContext } from "react";
import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import icon from "../assets/icon.png";
import { AuthContext } from "../providers/AuthProviders";
import classNames from "classnames";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="container mx-auto">
      <div className="mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <img className="w-12 px-2" src={icon} alt="" />
          <h1 className="text-black font-bold text-2xl">
            <span className="text-blue-700">GREASY</span>{" "}
            <span className="text-[#ff7f00]">CHEF</span>
          </h1>
        </div>

        <div className="sm:hidden">
          <button
            type="button"
            className="block text-black hover:text-gray-500 focus:text-gray-500 focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 7h-14v2h14V7Zm0 6h-14v2h14v-2Zm0 6h-14v2h14v-2Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden sm:flex sm:items-center">
          <Link
            to="/"
            className={classNames("py-2 px-4", {
              "bg-[#ff7f00] text-white font-bold": isActive("/"),
              "text-[#ff7f00] hover:bg-[#ff7f00] hover:text-white":
                !isActive("/"),
            })}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className={classNames("py-2 px-4", {
              "bg-[#ff7f00] text-white font-bold": isActive("/blog"),
              "text-[#ff7f00] hover:bg-[#ff7f00] hover:text-white":
                !isActive("/blog"),
            })}
          >
            Blog
          </Link>
        </div>

        <div className="hidden md:block">
          {!user ? (
            <Link to="/login" className="">
              <button className="btn btn-primary border-0 bg-gradient-to-r from-[#FF8C00] to-[#FFA036] hover:text-black">
                Login
              </button>
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full relative">
                  <div>
                    {user && (
                      <img
                        src={
                          user.photoURL
                            ? user.photoURL
                            : "https://img.freepik.com/free-icon/user_318-159711.jpg"
                        }
                        alt=""
                      />
                    )}
                  </div>
                </div>
                <div className="absolute top-0 left-0 opacity-0 hover:opacity-100">
                  <p className="w-44 ps-7">{user.displayName}</p>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="justify-between" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-warning mt-2 hover:text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <Link
            to="/"
            className="block text-black hover:bg-gradient-to-r from-[#FF8C00] to-[#FFA036] hover:text-black px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>

          <Link
            to="/blog"
            className="block text-black hover:bg-gradient-to-r from-[#FF8C00] to-[#FFA036] hover:text-black px-3 py-2 rounded-md text-base font-medium"
          >
            Blog
          </Link>
          <div>
            {!user ? (
              <Link to="/login" className="">
                <button className="btn btn-primary border-0 bg-gradient-to-r from-[#FF8C00] to-[#FFA036] hover:text-black">
                  Login
                </button>
              </Link>
            ) : (
              <button
                onClick={handleLogOut}
                className="btn btn-warning mt-2 hover:text-white"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

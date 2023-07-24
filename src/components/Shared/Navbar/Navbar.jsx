import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import Logo from "./Logo";
import { useEffect, useState } from "react";

const Navbar = () => {
  const user = true;

  const [scrollBg, setScrollBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setScrollBg(true);
      } else {
        setScrollBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navOptions = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/colleges"
      >
        Colleges
      </NavLink>
      {user && (
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "default")}
          to="/myCollege"
        >
          My College
        </NavLink>
      )}
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/admission"
      >
        Admission
      </NavLink>
    </>
  );

  return (
    <nav
      className={`bg-white w-full py-3 md:py-5 fixed z-10 ${
        scrollBg ? "bg-opacity-100" : "bg-opacity-0"
      }`}
    >
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              className="menu menu-compact dropdown-content mt-3 px-4 py-3 shadow bg-black rounded-lg bg-opacity-70 w-40"
            >
              {navOptions}
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 md:gap-5">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-1 md:gap-3 items-center">
              <div
                className="tooltip tooltip-bottom"
                data-tip={
                  user.displayName ? user.displayName : "name not found"
                }
              >
                {user.photoURL ? (
                  <img
                    className="w-8 md:w-12 h-8 md:h-12 rounded-full"
                    src={user.photoURL}
                    alt="user photo"
                  />
                ) : (
                  <FaUserCircle className="text-3xl md:text-4xl text-gray-700" />
                )}
              </div>
              <button className="btn-primary">Logout</button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn-primary flex gap-2 items-center">
                Login <HiArrowLongRight className="text-2xl" />
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

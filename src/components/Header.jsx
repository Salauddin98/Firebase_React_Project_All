import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <header>
      <nav className="navbar bg-base-300">
        <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>

        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>

        {/* {user && (
          <Link className="btn btn-ghost normal-case text-xl" to="/orders">
            Orders
          </Link>
        )} */}
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={handleLogOut} className="btn btn-primary">
              Sign out
            </button>
          </>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;

import { Link, NavLink } from 'react-router-dom';

import './navbar.css';

const Navbar = ({ isAuth, logout }) => {
  return (
    <nav>
      <h1 className="logo">
        <Link to="/">Blog</Link>
      </h1>
      {isAuth && (
        <ul>
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="selected">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <button className="nav-btn" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

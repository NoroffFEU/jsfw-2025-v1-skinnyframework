/**
 * Nav component for main navigation bar.
 * Renders navigation links and the cart icon.
 * @param themeStyles - Theme styles object
 * @param routes - Array of route objects for navigation
 */
import React, { useState, FC } from 'react';
import { NavLink } from 'react-router';
import { ThemeStyles, RouteProps } from 'types/props';
import CartIcon from './CartIcon';

interface NavProps {
  themeStyles: ThemeStyles;
  routes: RouteProps[];
}

const Nav: FC<NavProps> = ({ themeStyles, routes }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={themeStyles.nav}>
      <button
        className={themeStyles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <ul
        className={`${themeStyles.navList} ${menuOpen ? themeStyles.navOpen : ''}`}>
        {routes
          .filter(({ showInNav }) => showInNav)
          .map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${themeStyles.navLink} ${isActive ? themeStyles.activeLink : ''}`
                }
                onClick={() => setMenuOpen(false)}>
                {label || path}
              </NavLink>
            </li>
          ))}
        <CartIcon themeStyles={themeStyles} />
      </ul>
    </nav>
  );
};

export default Nav;

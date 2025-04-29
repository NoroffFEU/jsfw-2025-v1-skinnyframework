import React, { useState, FC } from 'react';
import { NavLink } from 'react-router';
import { ThemeStyles, RouteProps } from 'types/props';

interface NavProps {
  themeStyles: ThemeStyles;
  routes: RouteProps[];
}

const Nav: FC<NavProps> = ({ themeStyles, routes }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={themeStyles.nav}>
      {/* Hamburger Button */}
      <button
        className={themeStyles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰ {/* Simple icon, but you can replace it with an SVG */}
      </button>

      {/* Navigation Links */}
      <ul
        className={`${themeStyles.navList} ${menuOpen ? themeStyles.navOpen : ''}`}
      >
        {routes
          .filter(({ showInNav }) => showInNav)
          .map(({ path, element }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${themeStyles.navLink} ${isActive ? themeStyles.activeLink : ''}`
                }
                onClick={() => setMenuOpen(false)} // Close menu after clicking a link
              >
                {React.isValidElement(element) && typeof element.type === 'function' ? element.type.name : ''}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Nav;

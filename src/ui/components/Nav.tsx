import { useState } from 'react';
import { NavLink } from 'react-router';

const Nav = ({ themeStyles, routes }) => {
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
          .filter(({ path }) => path !== '*') // Exclude the error route
          .map(({ path, element }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${themeStyles.navLink} ${isActive ? themeStyles.activeLink : ''}`
                }
                onClick={() => setMenuOpen(false)} // Close menu after clicking a link
              >
                {element.type.name}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Nav;

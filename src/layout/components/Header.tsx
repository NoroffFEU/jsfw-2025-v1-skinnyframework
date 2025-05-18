/**
 * Header component for the application layout.
 * Displays the logo, navigation, and dark mode toggle.
 * @param themeStyles - Theme styles object
 * @param routes - Array of route objects for navigation
 */
import { FC } from 'react';
import { RouteProps, ThemeStyles } from '../../types/props';
import Wrapper from '../../ui/components/Wrapper.jsx';
import Nav from '../../ui/components/Nav.js';
import DarkModeToggle from '../../ui/components/DarkModeToggle.tsx';
import logoSVG from '../../assets/logoSVG.svg';

interface HeaderProps {
  themeStyles: ThemeStyles;
  routes: RouteProps[];
}

const Header: FC<HeaderProps> = ({ themeStyles, routes }) => {
  return (
    <header className={themeStyles.header}>
      <Wrapper themeStyles={themeStyles}>
        <a className={themeStyles.logoLink} href="/">
          <img src={logoSVG} alt="GLiP logo" />
          <span className={themeStyles.logoText}>GLiP</span>
        </a>
        <Nav themeStyles={themeStyles} routes={routes} />
        <DarkModeToggle themeStyles={themeStyles} />
      </Wrapper>
    </header>
  );
};

export default Header;

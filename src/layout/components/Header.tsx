import Nav from "../../ui/components/Nav.js";
import Wrapper from "../../ui/components/Wrapper.jsx";

const Header = ({ themeStyles, routes }) => {
  return (
    <header className={themeStyles.header}>
      <Wrapper themeStyles={themeStyles}>
        <a className={themeStyles.logoLink} href="/">
          <img src="/src/assets/logoSVG.svg" alt="GLiP logo" />
          <span className={themeStyles.logoText}>GLiP</span>
        </a>
        <Nav themeStyles={themeStyles} routes={routes} />
      </Wrapper>
    </header>
  );
};

export default Header;
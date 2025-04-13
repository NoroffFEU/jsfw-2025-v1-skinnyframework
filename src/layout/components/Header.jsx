import Nav from "../../ui/components/Nav.jsx";

const Header = ({ themeStyles, routes }) => {
  return (
    <header className={themeStyles.header}>
      <a className={themeStyles.logoLink} href="/">
        <img src="/src/assets/logoSVG.svg" alt="GLiP logo" />
        <span className={themeStyles.logoText}>GLiP</span> {/* Explicitly add class */}
      </a>
      <Nav themeStyles={themeStyles} routes={routes} />
    </header>
  );
};

export default Header;

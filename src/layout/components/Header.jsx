const Header = ({ themeStyles }) => {
  return (
    <div role="header">
      <img src="/src/assets/logoSVG.svg" alt="GLiP logo" id="logo" />
      <h1 className={themeStyles.heading}>GLiP</h1>
    </div>
  );
};

export default Header;

import { FC, useState, useEffect } from 'react';

interface DarkModeToggleProps {
  themeStyles: { [key: string]: string };
}

const DarkModeToggle: FC<DarkModeToggleProps> = ({ themeStyles }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  // let themeToggleIcon;

  function handleThemeSwitch() {
    isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true);
  }

  useEffect(() => {
    let bodyClassName;
    isDarkMode ? (bodyClassName = 'dark') : (bodyClassName = '');
    // isDarkMode
    //   ? (themeToggleIcon = 'src/assets/darkModeToggleDark')
    //   : (themeToggleIcon = 'src/assets/darkModeToggleLight');
    document.body.className = bodyClassName;
  }, [isDarkMode]);

  return (
    <div className={themeStyles.darkModeToggle}>
      <button
        onClick={handleThemeSwitch}
        className={themeStyles.darkModetoggleBtn}>
        <span>{isDarkMode ? 'L' : 'D'}</span>
        {/* <img
          className={themeStyles.darkModeToggleIcon}
          src={themeToggleIcon}
          alt={
            isDarkMode ? 'theme toggle dark mode' : 'theme toggle light mode'
          }
        /> */}
      </button>
    </div>
  );
};

export default DarkModeToggle;

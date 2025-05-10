import { FC, useState, useEffect, use } from 'react';

interface DarkModeToggleProps {
  themeStyles: { [key: string]: string };
}

const DarkModeToggle: FC<DarkModeToggleProps> = ({ themeStyles }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleThemeSwitch() {
    isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true);
  }

  useEffect(() => {
    let bodyClassName;
    isDarkMode ? (bodyClassName = 'dark') : (bodyClassName = '');
    document.body.className = bodyClassName;
  }, [isDarkMode]);

  return (
    <div className={themeStyles.darkModeToggle}>
      <button
        onClick={handleThemeSwitch}
        className={themeStyles.darkModetoggleBtn}
      >
        {isDarkMode ? 'light mode' : 'dark mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;

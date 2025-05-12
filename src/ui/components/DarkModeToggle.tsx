// src/ui/components/DarkModeToggle.tsx

import { FC, useState, useEffect } from 'react';

interface DarkModeToggleProps {
  themeStyles: { [key: string]: string };
}

const DarkModeToggle: FC<DarkModeToggleProps> = ({ themeStyles }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function handleThemeSwitch() {
    setIsDarkMode(prev => !prev);
  }

  useEffect(() => {
    // Toggle dark mode on the body so your CSS themes take effect.
    document.body.className = isDarkMode ? 'dark' : '';
  }, [isDarkMode]);

  const svgStyles = {
    width: '40px',
    height: '40px'
  };

  return (
    <div className={themeStyles.darkModeToggle}>
      <button
        onClick={handleThemeSwitch}
        className={themeStyles.darkModeToggleBtn}
      >
        <svg
          style={svgStyles}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sun Icon – visible in light mode */}
          <g
            id="sunIcon"
            style={{
              opacity: isDarkMode ? 0 : 1,
              transform: isDarkMode ? 'scale(0.5)' : 'scale(1)',
              transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
            }}
          >
            <circle cx="50" cy="50" r="25" fill="#FFD700" />
            <g stroke="#FFD700" strokeWidth="4">
              <line x1="50" y1="10" x2="50" y2="25" />
              <line x1="50" y1="75" x2="50" y2="90" />
              <line x1="10" y1="50" x2="25" y2="50" />
              <line x1="75" y1="50" x2="90" y2="50" />
              <line x1="20" y1="20" x2="30" y2="30" />
              <line x1="70" y1="70" x2="80" y2="80" />
              <line x1="70" y1="30" x2="80" y2="20" />
              <line x1="20" y1="80" x2="30" y2="70" />
            </g>
          </g>

          {/* Moon Icon – visible in dark mode */}
          <g
            id="moonIcon"
            style={{
              opacity: isDarkMode ? 1 : 0,
              transform: isDarkMode ? 'scale(1)' : 'scale(0.5)',
              transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
            }}
          >
            <path
              d="M60 50a25 25 0 1 1-20-40 20 20 0 0 0 20 40z"
              fill="#D0D0D0"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default DarkModeToggle;

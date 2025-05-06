import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import themeStyles from './styles/theme.module.css';
import App from './App';
import './index.css';
import ContextProvider from './context/ContextProvider';

const root = document.getElementById('root');

// A function to display a friendly fallback UI when a critical error occurs.
interface FallbackUIProps {
  error: Error;
  themeStyles: Record<string, string>;
}

function displayFallbackUI({ error, themeStyles }: FallbackUIProps): void {
  console.error('Fatal error encountered:', error);
  // Clear the existing content and create a fallback UI with inline styling.
  document.body.innerHTML = `
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-color: #f8d7da;
      color: #721c24;
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 2rem;
    ">
      <h1>Something's wrong 😕</h1>
      <p>Our app hit an unexpected snag while booting up.</p>
      <p>Please try refreshing the page. If the problem persists, our devs are coming to eat your brains.</p>
      <small>Error detail: ${error.message}</small>
    </div>
  `;
}

try {
  // If the root element isn't found, throw an error to be handled gracefully.
  if (!root) {
    throw new Error(
      "The essential 'root' element is missing. Please check your index.html for a div with id='root'.",
    );
  }

  // If all is well, initialize the app.
  createRoot(root).render(
    <StrictMode>
      <ContextProvider>
        <App themeStyles={themeStyles} />
      </ContextProvider>
    </StrictMode>,
  );
} catch (error: unknown) {
  // Ensure we have a proper Error object to pass to our fallback UI
  if (error instanceof Error) {
    displayFallbackUI({ error, themeStyles });
  } else {
    displayFallbackUI({
      error: new Error(
        'An unknown error occurred while initializing the app. We have fired the person responsible.',
      ),
      themeStyles,
    });
  }
}

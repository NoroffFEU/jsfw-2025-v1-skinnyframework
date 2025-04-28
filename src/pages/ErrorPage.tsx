import { PageProps } from '../types/props';
import { FC } from 'react';

const ErrorPage: FC<PageProps> = ({ themeStyles }) => {
  return (
    <div className={themeStyles.errorPage}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};

export default ErrorPage;

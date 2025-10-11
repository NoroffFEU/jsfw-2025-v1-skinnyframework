import { FC, ReactNode } from 'react';
import { PageProps } from 'types/props';

type MainProps = PageProps & {
  children: ReactNode;
};

/**
 * Main component for the application layout.
 * Displays body content of each page.
 * @param themeStyles - Theme styles object
 * @param children - child component rendered based on route
 */
const Main: FC<MainProps> = ({ themeStyles, children }) => {
  return <main className={themeStyles.main}>{children}</main>;
};

export default Main;

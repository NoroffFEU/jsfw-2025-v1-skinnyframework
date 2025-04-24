import Header from './components/Header';
import Footer from './components/Footer';
import { FC } from 'react';
import { ThemeStyles } from '../types/themeStyles';

interface LayoutProps {
  children: React.ReactNode;
  themeStyles: ThemeStyles;
  routes: Array<{ path: string; name: string }>;
}

const Layout: FC<LayoutProps> = ({ children, themeStyles, routes }) => {
  return (
    <>
      <Header themeStyles={themeStyles} routes={routes} />
      <main>{children}</main>
      <Footer themeStyles={themeStyles} />
    </>
  );
};

export default Layout;

import Header from './components/Header';
import Footer from './components/Footer';
import { FC } from 'react';
import { LayoutProps } from '../types/props';


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

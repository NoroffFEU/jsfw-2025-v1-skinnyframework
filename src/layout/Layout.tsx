import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { FC } from 'react';
import { LayoutProps } from '../types/props';

const Layout: FC<LayoutProps> = ({ children, themeStyles, routes }) => {
  return (
    <>
      <Header themeStyles={themeStyles} routes={routes} />
      <Main themeStyles={themeStyles}>{children}</Main>
      <Footer themeStyles={themeStyles} />
    </>
  );
};

export default Layout;

import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = ({ children, themeStyles, routes }) => {
  return (
    <>
      <Header themeStyles={themeStyles} routes={routes} />
      <main>{children}</main>
      <Footer themeStyles={themeStyles} routes={routes} />
    </>
  );
};

export default Layout;

import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = ({ children, themeStyles }) => {
  return (
    <>
      <Header themeStyles={themeStyles} />
      <main>{children}</main>
      <Footer themeStyles={themeStyles} />
    </>
  );
};

export default Layout;

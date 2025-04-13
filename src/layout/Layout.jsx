import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = ({ themeStyles }) => {

  return (
    <>
      <Header themeStyles={themeStyles} />
      <h1
        id="layoutHeading"
        className={themeStyles.heading}
      >
        LAYOUT
      </h1>
      <button>a button</button>
      <Footer themeStyles={themeStyles} />
    </>
  );
};

export default Layout;

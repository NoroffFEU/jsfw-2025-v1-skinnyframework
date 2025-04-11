import Header from "./components/Header";
import Footer from "./components/Footer";

/**
 * Layout component that provides the basic structure of the application.
 * Includes a header, interactive heading, and footer.
 * The heading changes color on hover between red and green.
 * @returns {JSX.Element} The Layout component structure
 */
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
      <Footer themeStyles={themeStyles} />
    </>
  );
};

export default Layout;

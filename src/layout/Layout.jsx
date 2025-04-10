import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

/**
 * Layout component that provides the basic structure of the application.
 * Includes a header, interactive heading, and footer.
 * The heading changes color on hover between red and green.
 * @returns {JSX.Element} The Layout component structure
 */
const Layout = () => {
    const [hover, setHover] = useState(false);
    /**
     * Handles mouse enter event on the layout heading
     * Sets the hover state to true
     */
    function handleMouseEnter() {
        setHover(true);
    }
    /**
     * Handles mouse leave event on the layout heading
     * Sets the hover state to false
     */
    function handleMouseLeave() {
        setHover(false);
    }
    /**
     * Effect hook that changes the layout heading color based on hover state
     * Changes to red when hovered, green when not hovered
     */
    useEffect(() => {
        const color = hover ? 'red' : 'green';
        const layoutHeading = document.getElementById('layoutHeading');
        if (layoutHeading) {
            layoutHeading.setAttribute('style', `color: ${color}`);
        }
    }, [hover]);

    return (
        <>
            <Header />
            <h1 id="layoutHeading" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>LAYOUT</h1>
            <Footer />
        </>
    )
}

export default Layout;
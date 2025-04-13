import { NavLink } from "react-router";

const Nav = ({ themeStyles, routes }) => {
    console.log(themeStyles);
    return (
        <nav>
            <ul className={themeStyles.nav}>
                {routes
                    .filter(({ path }) => path !== "*") // Exclude error route
                    .map(({ path, element }) => (
                        <li key={path}>
                            <NavLink
                                to={path}
                                className={({ isActive }) => `${themeStyles.navLink} ${isActive ? themeStyles.active : ""}`}
                            >
                                {element.type.name}
                            </NavLink>
                        </li>
                    ))}
            </ul>
        </nav>
    );
};

export default Nav;

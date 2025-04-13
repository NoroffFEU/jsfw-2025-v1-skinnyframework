import { BrowserRouter, Routes, Route } from "react-router-dom"; // Fix incorrect import
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import themeStyles from "./styles/theme.module.css";

const routes = [
  { path: "/", element: <Home themeStyles={themeStyles} /> },
  { path: "/product", element: <Product themeStyles={themeStyles} /> },
  { path: "/cart", element: <Cart themeStyles={themeStyles} /> },
  { path: "/checkout", element: <Checkout themeStyles={themeStyles} /> },
  { path: "/contact", element: <Contact themeStyles={themeStyles} /> },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<Layout themeStyles={themeStyles}>{element}</Layout>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
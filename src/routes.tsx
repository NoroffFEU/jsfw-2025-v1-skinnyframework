// pages
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import themeStyles from './styles/theme.module.css';

const routes = [
  { path: '/', element: <Home themeStyles={themeStyles} />, showInNav: true }, // Home page
  {
    path: '/contact',
    element: <Contact themeStyles={themeStyles} />,
    showInNav: true,
  }, // Contact page
  {
    path: '/checkout',
    element: <Checkout themeStyles={themeStyles} />,
    showInNav: true,
  }, // Checkout page
  {
    path: '/product/:id',
    element: <Product themeStyles={themeStyles} />,
    showInNav: false,
  }, // Product page
  {
    path: '/cart',
    element: <Cart themeStyles={themeStyles} />,
    showInNav: false,
  }, // Cart page
  {
    path: '*',
    element: <ErrorPage themeStyles={themeStyles} />,
    showInNav: false,
  }, // Catch-all route for 404
];

export default routes;

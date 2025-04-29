import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './layout/Layout';
// pages
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import themeStyles from './styles/theme.module.css';
import { FC } from 'react';
import { PageProps } from 'types/props';

const routes = [
  { path: '/', element: <Home themeStyles={themeStyles} />, showInNav: true, }, // Home page
  { path: '/product/:id', element: <Product themeStyles={themeStyles} />, showInNav: false }, // Product page
  { path: '/cart', element: <Cart themeStyles={themeStyles} />, showInNav: true, }, // Cart page
  { path: '/checkout', element: <Checkout themeStyles={themeStyles} />, showInNav: true, }, // Checkout page
  { path: '/contact', element: <Contact themeStyles={themeStyles} />, showInNav: true }, // Contact page
  { path: '*', element: <ErrorPage themeStyles={themeStyles} />, showInNav: false }, // Catch-all route for 404
];

const App: FC<PageProps> = ({themeStyles}) => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <Layout themeStyles={themeStyles} routes={routes}>
                {element}
              </Layout>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

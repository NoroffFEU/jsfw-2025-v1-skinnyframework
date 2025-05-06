import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './layout/Layout';
import { FC } from 'react';
import { PageProps } from 'types/props';
import routes from './routes';

const App: FC<PageProps> = ({ themeStyles }) => {
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

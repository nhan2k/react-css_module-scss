import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map(
          ({ component, path, layout }, index: number) => {
            const Page = component;

            let Layout = DefaultLayout;

            if (layout) {
              Layout = layout;
            } else if (layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          }
        )}
      </Routes>
    </Router>
  );
}

export default App;

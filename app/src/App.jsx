/* eslint-disable react/display-name */
import React from 'react';
import { useRoutes } from 'hookrouter';
import GlobalStyles from './globalStyles';
import Header from './elements/Header';
import ErrorBoundary from './elements/ErrorBoundary';
import GridContainer from './elements/GridContainer';
import Navigator from './elements/Navigator';
import { AssetLiabilityContextContainer } from './context/AssetLiabilityContext';
import FormPage from './pages/FormPage';
import FinancialReportPage from './pages/FinancialReportPage';
import HomePage from './pages/HomePage';

const routes = {
  '/': () => <HomePage />,
  '/form': () => <FormPage />,
  '/report': () => <FinancialReportPage />,
};
function App() {
  const content = useRoutes(routes);
  return (
    <div className="App">
      <ErrorBoundary>
        <GlobalStyles />
        <GridContainer>
          <Header />
          <Navigator />
          <AssetLiabilityContextContainer>
            {content || <HomePage />}
          </AssetLiabilityContextContainer>
        </GridContainer>
      </ErrorBoundary>
    </div>
  );
}

export default App;

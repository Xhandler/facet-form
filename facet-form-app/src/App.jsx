/* eslint-disable react/display-name */
import React from 'react';
import { useRoutes } from 'hookrouter';

import GlobalStyles from './globalStyles';
import AssetLiabilityTable from './elements/AssetLiabilityTable';
import AssetLiabilityForm from './elements/AssetLiabilityForm';
import Header from './elements/Header';
import ErrorBoundary from './elements/ErrorBoundary';
import GridContainer from './elements/GridContainer';
import Navigator from './elements/Navigator';
import { AssetLiabilityContextContainer } from './context/AssetLiabilityContext';

const routes = {
  '/form': () => <AssetLiabilityForm label="Asset/Liability Form" />,
  '/report': () => <AssetLiabilityTable />,
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
            {content || <AssetLiabilityForm label="Asset/Liability Form" />}
          </AssetLiabilityContextContainer>
        </GridContainer>
      </ErrorBoundary>
    </div>
  );
}

export default App;

import React from 'react';
import GlobalStyles from './globalStyles';
import GridContainer from './elements/GridContainer';
import CodeChallengeHeader from './elements/CodeChallengeHeader';
import AssetLiabilityTable from './elements/AssetLiabilityTable';
import AssetLiabilityForm from './elements/AssetLiabilityForm';
import Navigator from './elements/Navigator';
import { AssetLiabilityContextContainer } from './context/AssetLiabilityContext';
import { useRoutes } from 'hookrouter';

const routes = {
  '/form': () => <AssetLiabilityForm label="Asset/Liability Form" />,
  '/report': () => <AssetLiabilityTable />
}
function App() {
  const content = useRoutes(routes);
  return (
    <div className="App">
      <GlobalStyles />
      <GridContainer>
        <Navigator />
        <CodeChallengeHeader />
        <AssetLiabilityContextContainer>
          {content || <AssetLiabilityForm label="Asset/Liability Form" />}
        </AssetLiabilityContextContainer>
      </GridContainer>
    </div>
  );
}

export default App;

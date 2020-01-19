import React from 'react';
import GlobalStyles from './globalStyles';
import Container from './elements/Container';
import CodeChallengeHeader from './elements/CodeChallengeHeader';
import AssetLiabilityTable from './elements/AssetLiabilityTable';
import AssetLiabilityForm from './elements/AssetLiabilityForm';
import { AssetLiabilityContextContainer } from './context/AssetLiabilityContext';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <CodeChallengeHeader />
      <AssetLiabilityContextContainer>
            <AssetLiabilityForm label="Asset/Liability Form" />
            <AssetLiabilityTable />
      </AssetLiabilityContextContainer>
    </div>
  );
}

export default App;

import React, { useContext } from 'react';
import styled from 'styled-components';
import AssetLiabilityContext from '../context/AssetLiabilityContext';
import PieChart from '../elements/PieChart';

function HomePage({ className }) {
  const { tableContent } = useContext(AssetLiabilityContext);
  const { networth, assets, liabilities } = tableContent.total;

  const totalEntryAmount = Number(liabilities) + Number(assets);
  const liabilityPercent = (Number(liabilities) / totalEntryAmount) * 100;
  const assetPercent = (Number(assets) / totalEntryAmount) * 100;
  // Excuse this slopiness, floats and JS don't like each other.
  return (
    <div className={className}>
      <PieChart
        assetPercent={assetPercent}
        liabilityPercent={liabilityPercent}
      />
      <div className="summary">
        <h3>Summary:</h3>
        <div>
          <h4>Assets ${assets}</h4>
        </div>
        <div>
          <h4>Liabilities ${liabilities}</h4>
        </div>
        <div>
          <h4>Networth ${networth}</h4>
        </div>
      </div>
    </div>
  );
}

export default styled(HomePage)`
  display: flex;
  flex-direction: row;
  height: 80vh;
  .summary {
    margin: auto;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

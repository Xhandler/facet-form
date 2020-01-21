import React from 'react';
import styled from 'styled-components';
import AssetLiabilityTable from '../elements/AssetLiabilityTable';

function FinancialReportPage({ className }) {
  return (
    <div className={className}>
      <AssetLiabilityTable />
    </div>
  );
}

export default styled(FinancialReportPage)`
  grid-area: content;
  margin-right: 1rem;
  margin-top: 0.5rem;
  height: 83vh;
  overflow: auto;
  @media only screen and (max-width: 600px) {
    margin: 0 0 3.6rem 0;
  }
`;

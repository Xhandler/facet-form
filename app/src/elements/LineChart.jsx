import React from 'react';
import styled from 'styled-components';

function LineChart({ className, assetPercent, liabilityPercent }) {
  return (
    <div className={className}>
      <h4>Asset/Liability Chart</h4>
      {assetPercent > 0 ? <div className="asset-chart" /> : ''}
      {liabilityPercent > 0 ? <div className="liability-chart" /> : ''}
    </div>
  );
}
export default styled(LineChart)`
  align-self: center;
  margin: auto;
  width: 60%;
  h4 {
    text-align: left;
  }
  @media only screen and (max-width: 600px) {
    h4 {
      text-align: center;
    }
  }
  padding: 0.5rem;
  .liability-chart {
    height: 100px;
    display: inline-block;
    background-color: red;
    width: ${props => `${props.liabilityPercent}%`};
  }
  .asset-chart {
    display: inline-block;
    height: 100px;
    background-color: green;
    width: ${props => `${props.assetPercent}%`};
  }
`;

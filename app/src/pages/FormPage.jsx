import React from 'react';
import styled from 'styled-components';
import AssetLiabilityForm from '../elements/AssetLiabilityForm';

function FormPage({ className }) {
  return (
    <div className={className}>
      <AssetLiabilityForm />
    </div>
  );
}
export default styled(FormPage)`
  grid-area: content;
  width: 100%;
  h3 {
    font-weight: 600;
    font-size: 20px;
    border-bottom: 2px solid #dedce8;
  }
`;

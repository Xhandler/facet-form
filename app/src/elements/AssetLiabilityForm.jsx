/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import styled from 'styled-components';
import AssetLiabilityContext, {
  ASSET,
  LIABILITY,
} from '../context/AssetLiabilityContext';

function AssetLiabilityForm({ className, label }) {
  const { formData, handleFormChange, handleFormSumbit } = useContext(
    AssetLiabilityContext
  );

  return (
    <form onSubmit={handleFormSumbit} className={className}>
      <h3>{label}</h3>
      <span>
        <label>Name:</label>
        <input
          type="text"
          name="entryName"
          onChange={handleFormChange}
          value={formData.entryName}
        />
      </span>
      <span>
        <label>Amount:</label>
        <input
          type="number"
          min="0"
          step="0.01"
          name="entryAmount"
          value={formData.entryAmount}
          onChange={handleFormChange}
        />
      </span>
      <div>
        <span>
          <label>Asset:</label>
          <input
            onChange={handleFormChange}
            type="radio"
            checked={formData.entryType === ASSET}
            value={ASSET}
            name="entryType"
          />
        </span>
        <span>
          <label>Liability:</label>
          <input
            onChange={handleFormChange}
            type="radio"
            checked={formData.entryType === LIABILITY}
            value={LIABILITY}
            name="entryType"
          />
        </span>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}

AssetLiabilityForm.defaultProps = { label: 'Asset/Liability Form' };
export default styled(AssetLiabilityForm)`
  background-color: #616a86;
  margin-right: 1rem;
  font-weight: 500;
  padding: 4rem 8rem 4rem 8rem;
  margin: 4rem;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    padding: 0;
    margin: 0;
    & > div {
      padding: 1rem;
    }
  }
  input[type='text'],
  input[type='number'] {
    flex-grow: 1;
    height: 2rem;
  }
  input[type='submit'] {
    flex-grow: 1;
    font-size: 18px;
    font-weight: 700;
    margin: 1rem;
    color: #000;
  }
  input[type='submit']:hover {
    background-color: #3e9434;
    color: #eed;
  }
  label {
    min-width: 30%;
  }
  & > span {
    display: flex;
    justify-content: space-between;
    align-content: center;
    border-bottom: 2px solid #dedce8;
  }
  & > div {
    display: flex;
    justify-content: space-evenly;
    border-bottom: 2px solid #dedce8;
  }
  & > div > span {
    float: right;
    label {
      font-size: 1rem;
    }
  }
  & > * {
    padding: 1rem;
  }
`;

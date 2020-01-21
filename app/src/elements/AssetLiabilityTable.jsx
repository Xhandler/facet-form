import React, { useContext } from 'react';
import styled from 'styled-components';
import AssetLiabilityContext from '../context/AssetLiabilityContext';
import Icon from './Icon';

const AssetLiabilityTableHeader = ({ headers }) => (
  <thead>
    <tr>
      {headers.map((name, i) => (
        <th key={`al-th-${i}`}>{name}</th>
      ))}
    </tr>
  </thead>
);

AssetLiabilityTableHeader.defaultProps = {
  headers: [],
};

const AssetLiabilityTableBody = ({ content, handleDeleteEntry }) => (
  <tbody>
    {content.map(({ entryName, entryAmount, entryType, id }) => (
      <tr key={`al-th-${id}`}>
        <td>{entryName}</td>
        <td>${entryAmount}</td>
        <td>{entryType}</td>
        <td>
          <button type="button" onClick={() => handleDeleteEntry(id)}>
            <Icon icon="trash" size="lg" />
          </button>
        </td>
      </tr>
    ))}
  </tbody>
);
const AssetLiabilityTableFooter = ({ total }) => (
  <tfoot>
    <tr>
      <td>Total Assets</td>
      <td colSpan="3">${total.assets}</td>
    </tr>
    <tr>
      <td>Total Liabilities</td>
      <td colSpan="3">${total.liabilities}</td>
    </tr>
    <tr>
      <td>Networth</td>
      <td colSpan="3">${total.networth}</td>
    </tr>
  </tfoot>
);

function AssetLiabilityTable({ className }) {
  const { handleDeleteEntry, tableContent } = useContext(AssetLiabilityContext);

  const { entries, total } = tableContent;

  return (
    <table className={className}>
      <caption>Financial Report</caption>
      <AssetLiabilityTableHeader
        headers={['Entry Name', 'Balance', 'Type', 'Delete']}
      />
      <AssetLiabilityTableBody
        content={entries}
        handleDeleteEntry={handleDeleteEntry}
      />
      <AssetLiabilityTableFooter total={total} />
    </table>
  );
}

export default styled(AssetLiabilityTable)`
  width: 100%;
  background-color: #383c4c;
  button {
    text-align: center;
    height: '100%';
    width: '100%';
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }
  button:hover > svg {
    background-color: red;
  }
  caption {
    font-weight: 600;
    font-size: 20px;
    text-align: left;
  }
`;

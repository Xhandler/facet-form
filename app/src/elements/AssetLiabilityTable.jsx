import React, { useContext } from 'react';
import styled from 'styled-components';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import AssetLiabilityContext from '../context/AssetLiabilityContext';

fontawesome.library.add(faTrash);

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
            <FontAwesomeIcon icon="trash" size="lg" />
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
    <div className={className}>
      <table>
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
    </div>
  );
}

export default styled(AssetLiabilityTable)`
  grid-area: content;
  margin-right: 1rem;
  margin-top: 0.5rem;
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
  @media only screen and (max-width: 600px) {
    margin: 0;
  }
  table {
    width: 100%;
    background-color: #383c4c;
  }
  caption {
    font-weight: 600;
    font-size: 20px;
    margin-right: 10rem;
  }
`;

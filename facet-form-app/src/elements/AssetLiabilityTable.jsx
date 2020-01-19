import React, { useContext } from 'react';
import AssetLiabilityContext from '../context/AssetLiabilityContext';
import styled from 'styled-components';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(faTrash);

const AssetLiabilityTableHeader = ({ headers }) => (
<thead>
    <tr>
        {headers.map((name, i) => <th key={`al-th-${i}`}>{name}</th>)}
    </tr>
</thead>
);
const AssetLiabilityTableBody = ({content}) => (
    <tbody>
        {content.map(({ entryName, entryAmont, type}, i) => (
            <tr key={`al-th-${i}`}>
                <td>
                    {entryName}
                </td>
                <td>
                    {entryAmont}
                </td>
                <td>
                    {type}
                </td>
                <td>
                    <button style={{height:"100%", width:"100%"}}>
                        <FontAwesomeIcon icon="trash" size="lg"/>
                    </button>
                </td>
            </tr>
        ))}
    </tbody>
)
function AssetLiabilityTable({ className }) {
    const { deleteEntry, table } = useContext(AssetLiabilityContext);

    return (
        <div>
            <table className={className}>
                <AssetLiabilityTableHeader headers={["Entry Name", "Amount", "Type", "Delete"]} />
                <AssetLiabilityTableBody content={[
                    {
                        entryName: "Chandler",
                        entryAmont: 9123,
                        type: "ASSET"
                    }
                ]}/>
            </table>
        </div>
    )

}

export default AssetLiabilityTable;
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
const AssetLiabilityTableBody = ({content, handleDeleteEntry}) => (
    <tbody>
        {content.map(({ entryName, entryAmount, entryType, id}, i) => (
            <tr key={`al-th-${i}`}>
                <td>
                    {entryName}
                </td>
                <td>
                    ${entryAmount}
                </td>
                <td>
                    {entryType}
                </td>
                <td>
                    <button onClick={() => handleDeleteEntry(id)} style={{height:"100%", width:"100%"}}>
                        <FontAwesomeIcon icon="trash" size="lg"/>
                    </button>
                </td>
            </tr>
        ))}
    </tbody>
)
const AssetLiabilityTableFooter = ({total}) => (
    <tfoot>
        <tr>
            <td>Assets</td>
            <td>${total.assets}</td>
            <td>Liabilities</td>
            <td>${total.liabilities || '0'}</td>
            <td>Net</td>
            <td>${total.networth}</td>
        </tr>
    </tfoot>
)
function AssetLiabilityTable({ className }) {
    const { handleDeleteEntry, tableContent } = useContext(AssetLiabilityContext);

    const { entries, total } = tableContent;

    return (
        <div>
            <table className={className}>
                <AssetLiabilityTableHeader headers={["Entry Name", "Amount", "Type", "Delete"]} />
                <AssetLiabilityTableBody content={entries}
                handleDeleteEntry={handleDeleteEntry}/>
                <AssetLiabilityTableFooter total={total} />
            </table>
        </div>
    )

}

export default styled(AssetLiabilityTable)`
grid-area: content;
`;
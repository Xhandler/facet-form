import React, { useContext } from 'react';
import styled from 'styled-components';
import AssetLiabilityContext, { ASSET, LIABILITY } from '../context/AssetLiabilityContext';


function AssetLiabilityForm({className, label}) {
    const {formData, handleFormChange, handleFormSumbit} = useContext(AssetLiabilityContext);

    return (
        <div className={className}>
            <h2><u>{label}</u></h2>
            <form  onSubmit={handleFormSumbit}>
                <span>
                    <label>Entry Name:</label>
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
                        onChange={handleFormChange} />
                    </span>
                <div>
                    <span>
                        <label>Asset:</label>
                        <input onChange={handleFormChange} type="radio" checked={formData.entryType === ASSET} value={ASSET} name="entryType"/>
                    </span>
                    <span>
                        <label>Liability:</label>
                        <input onChange={handleFormChange} type="radio" checked={formData.entryType === LIABILITY} value={LIABILITY} name="entryType"/> 
                    </span>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

AssetLiabilityForm.defaultProps = { label: "Asset/Liability Form"};

export default styled(AssetLiabilityForm)`
text-align: center;
border: 1px solid #333;
background-color: lightgray;
grid-area: content;
form {
    padding: 8rem;
    display: flex;
    flex-direction: column;
}
@media only screen and (max-width: 600px){
    form {
        padding: 0;
    }
}
form > span {
    display: flex;
    justify-content: space-between;
    align-content: center;
}
form > div {
    display: flex;
    justify-content: space-evenly;
}
form > * {
    padding: 1rem;
}
`;
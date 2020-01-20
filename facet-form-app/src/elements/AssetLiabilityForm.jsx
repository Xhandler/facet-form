import React, { useContext } from 'react';
import styled from 'styled-components';
import AssetLiabilityContext, { ASSET, LIABILITY } from '../context/AssetLiabilityContext';


function AssetLiabilityForm({className, label}) {
    const {formData, handleFormChange, handleFormSumbit} = useContext(AssetLiabilityContext);

    return (
        <div className={className}>
            <form  onSubmit={handleFormSumbit}>
                <h3>{label}</h3>
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
grid-area: content;
flex-grow: 1;
form {
    background-color: #616A86;
    margin-right: 1rem;
    font-weight: 500;
    padding: 8rem;
    display: flex;
    flex-direction: column;
}
h3 {
    font-weight: 500;
    font-size: 20px;
    border-bottom: 2px solid #DEDCE8;
}
@media only screen and (max-width: 600px){
    form {
        padding: 0;
        margin: 0;

    }
    form > div {
        padding: 1rem;
    }
}
input[type="text"], input[type="number"] {
    flex-grow: 1;
    height: 2rem;
}
label {
    min-width: 30%;
}
form > span {
    display: flex;
    justify-content: space-between;
    align-content: center;
    border-bottom: 2px solid #DEDCE8;
}
form > div {
    display: flex;
    justify-content: space-evenly;
    border-bottom: 2px solid #DEDCE8;

}
form > div > span {
    float: right;
    label {
        font-size: 1rem;
    }
}
form > * {
    padding: 1rem;
}
`;
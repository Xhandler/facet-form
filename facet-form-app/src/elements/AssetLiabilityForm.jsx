import React, { useContext } from 'react';
import styled from 'styled-components';
import AssetLiabilityContext from '../context/AssetLiabilityContext';


function AssetLiabilityForm({className, label}) {
    const {formData, handleFormChange, handleFormSumbit} = useContext(AssetLiabilityContext);

    return (
        <div className={className}>
            <h2><u>{label}</u></h2>
            <form  onSubmit={handleFormSumbit}>
                <label>Entry Name:</label>
                <input 
                    type="text"
                    name="entryName"
                    onChange={handleFormChange}
                    value={formData.entryName}
                />
                <label>Amount:</label>
                <input 
                    type="number"
                    min="0"
                    name="entryAmount" 
                    defaultValue={formData.entryAmount}
                    onChange={handleFormChange} />
                <div>
                    <input type="radio" defaultChecked value="ASSET" name="type"/> Asset
                    <input type="radio" value="LIABILITY" name="type"/> Liablity
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

AssetLiabilityForm.defaultProps = { label: "Asset/Liability Form"};

export default AssetLiabilityForm;
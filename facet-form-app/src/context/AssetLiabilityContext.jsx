import React, { createContext, useState } from 'react';

const defaultFormData = {
    entryName: "",
    entryAmount: 0,
    type: "ASSET"
};

const AssetLiabilityContext = createContext({
    defaultFormData,
    loading: false,
    table: {
        content: [],
        total: 0
    }
});

export function AssetLiabilityContextContainer({children}) {
    const [formData, setFormData] = useState({
        entryName: "",
        entryAmount: 0,
        type: "ASSET"
    });

    const handleFormChange = event => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFormSumbit = event => {
        event.preventDefault();

    };

    const handleDeleteEntry = event => [
        console.log(event)
    ];
    return (
        <AssetLiabilityContext.Provider value = {{
                handleFormSumbit,
                handleFormChange,
                handleDeleteEntry,
                formData
            }}>
            {children}
        </AssetLiabilityContext.Provider>
    );
}

export default AssetLiabilityContext;
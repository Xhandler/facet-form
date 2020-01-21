import React, { createContext, useState, useEffect } from 'react';

const API = `http://${window.location.host}/api/financial`;

export const ASSET = 'ASSET';
export const LIABILITY = 'LIABILITY';

const defaultFormData = {
  entryName: '',
  entryAmount: 0,
  entryType: ASSET,
};
const defaultTableContent = {
  entries: [],
  total: {
    networth: 0,
    assets: 0,
    liabilities: 0,
  },
};

const AssetLiabilityContext = createContext({
  formData: defaultFormData,
  tableContent: defaultTableContent,
});

export function AssetLiabilityContextContainer({ children }) {
  const [formData, setFormData] = useState(defaultFormData);
  const [loading, setLoading] = useState(true);

  const [tableContent, setTableContent] = useState(defaultTableContent);

  const handleFormChange = event => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSumbit = event => {
    event.preventDefault();
    setLoading(true);
    fetch(`${API}/entry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        entryAmount: Number(formData.entryAmount),
      }),
    }).then(res => {
      setFormData(defaultFormData);

      if (res.status === 200) {
        res.json().then(setTableContent);
        setLoading(false);
      }
    });
  };

  const handleDeleteEntry = id => {
    fetch(`${API}/entry`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    }).then(res => {
      if (res.status === 200) {
        res.json().then(setTableContent);
      }
    });
  };
  useEffect(() => {
    fetch(`${API}/report`).then(res => {
      res.json().then(setTableContent);
      setLoading(false);
    });
  }, []);
  return (
    <AssetLiabilityContext.Provider
      value={{
        loading,
        formData,
        tableContent,
        handleFormSumbit,
        handleFormChange,
        handleDeleteEntry,
      }}
    >
      {children}
    </AssetLiabilityContext.Provider>
  );
}

export default AssetLiabilityContext;

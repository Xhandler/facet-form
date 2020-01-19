import React, { createContext, useState, useEffect } from "react";
const API = `http://${window.location.host}/api/financial`;

const defaultFormData = {
  entryName: "",
  entryAmount: 0,
  entryType: "ASSET"
};

const AssetLiabilityContext = createContext({
  defaultFormData,
  loading: false,
  table: {
    content: [],
    total: 0
  }
});

export function AssetLiabilityContextContainer({ children }) {
  const [formData, setFormData] = useState({
    entryName: "",
    entryAmount: 0,
    entryType: "ASSET"
  });
  const [loading, setLoading] = useState(true);

  const [tableContent, setTableContent] = useState({
    entries: [],
    total: {
      networth: 0,
      assets: 0,
      liabilities: 0
    }
  });

  const handleFormChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSumbit = event => {
    event.preventDefault();
    setLoading(true);
    fetch(`${API}/entry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then(res => {
      setFormData(defaultFormData);
      res.json().then(setTableContent)
      setLoading(false);
    });
  };

  const handleDeleteEntry = id => {
    fetch(`${API}/entry`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    }).then(
      res => res.json().then(setTableContent)
    );
  };
  useEffect(() => {
    fetch(`${API}/report`).then(
      res => {
        res.json().then(setTableContent)
        setLoading(false);
      }
    );
  }, [])
  return (
    <AssetLiabilityContext.Provider
      value={{
        loading,
        formData,
        tableContent,
        handleFormSumbit,
        handleFormChange,
        handleDeleteEntry
      }}
    >
      {children}
    </AssetLiabilityContext.Provider>
  );
}

export default AssetLiabilityContext;

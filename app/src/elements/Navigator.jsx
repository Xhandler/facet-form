import React from 'react';
import styled from 'styled-components';
import { A } from 'hookrouter';

function Navigator({ className }) {
  return (
    <nav className={className}>
      <A href="/form">Entry Form</A>
      <A href="/report">Financial Report</A>
    </nav>
  );
}

export default styled(Navigator)`
  grid-area: nav;
  flex-direction: column;
  border-right: 1px solid #222;
  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.24);
  display: flex;
  margin-bottom: 1.5rem;
  background-color: rgba(63, 76, 107, 1);
  a {
    text-decoration: none;
    text-align: center;
    padding: 1rem;
    color: #eee;
  }
  a:visited {
    text-decoration: none;
    color: #eee;
  }
  a:hover {
    background-color: #555;
    color: gold;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0;
    min-height: 0.5fr;
    a {
      flex-grow: 1;
      width: 50%;
    }
  }
`;

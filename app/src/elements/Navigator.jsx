import React from 'react';
import styled from 'styled-components';
import { A } from 'hookrouter';
import Icon from './Icon';

function Navigator({ className }) {
  return (
    <nav className={className}>
      <A href="/">
        <u>Home</u> <Icon size="lg" icon="home" />
      </A>
      <A href="/form">
        <u>Entry Form</u> <Icon size="lg" icon="edit" />
      </A>
      <A href="/report">
        <u>Financial Report</u> <Icon size="lg" icon="table" />{' '}
      </A>
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
    text-align: right;
    padding: 1.2rem;
    color: #eee;
    margin: 0.3rem;
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
    position: absolute;
    bottom: 0;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0;
    a {
      text-align: center;
      flex-grow: 1;
      width: 1/3;
    }
    a > u {
      font-size: 0;
    }
  }
`;

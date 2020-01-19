import {
    createGlobalStyle
} from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}
body {
    margin: 0;
}
td, th {
    padding: .4rem;
    text-align: left;
}
tr {
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
}
table {
    border-bottom: 2px solid #dddddd;
    border-collapse: collapse;
}
tbody tr:nth-child(even) {
  background-color: #eee;
}
tbody tr:nth-child(odd) {
  background-color: #fff;
}
table thead {
  color: white;
  background-color: #555;
}
input {
    border: 4px solid white; 
    -webkit-box-shadow: 
      inset 0 0 8px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1); 
    -moz-box-shadow: 
      inset 0 0 8px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1); 
    box-shadow: 
      inset 0 0 8px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1); 
    background: rgba(255,255,255,0.5);
}
`;

export default GlobalStyle;
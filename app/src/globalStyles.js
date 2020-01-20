import {
    createGlobalStyle
} from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    color: #EED;
}
.App {
  max-height: 100vh;
}
body {
    margin: 0;
    background-color: #383C4C;
}
td, th {
    padding: .4rem;
    text-align: left;
}
tr {
    border-top: 1px solid #EED;
    border-bottom: 1px solid #EED;
}
table {
    border: 2px solid #EED;
    border-collapse: collapse;
}
tbody tr:nth-child(even) {
  background-color: #6F7999;
}
tbody tr:nth-child(odd) {
  background-color: #464B5F;
}
table thead {
  color: #EED;
  background-color: #383C4C;  
}
input {
    color: #555;
    font-weight: 500;
    border: 3px solid #6F7999; 
    -webkit-box-shadow: 
      inset 0 0 4px  rgba(0,0,0,0.1),
            0 0 8px rgba(0,0,0,0.1); 
    -moz-box-shadow: 
      inset 0 0 4px  rgba(0,0,0,0.1),
            0 0 8px rgba(0,0,0,0.1); 
    box-shadow: 
      inset 0 0 4px  rgba(0,0,0,0.1),
            0 0 8px rgba(0,0,0,0.1); 
    background: rgba(255,255,255,0.5);
}
input[type='radio'] { transform: scale(1.2); }
`;

export default GlobalStyle;
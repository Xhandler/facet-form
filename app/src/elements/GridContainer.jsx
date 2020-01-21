import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-areas:
    'header header'
    'nav content';
  grid-template-columns: 1.5fr 8.5fr;
  grid-template-rows: auto 1fr;
  grid-gap: 10px;
  height: 100vh;
  @media only screen and (max-width: 600px) {
    grid-template-areas:
      'header'
      'content';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 9fr ;
  }
`;

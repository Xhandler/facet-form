import styled from 'styled-components';

export default styled.div`
  align-self: center;
  height: 250px;
  width: 250px;
  margin: auto;
  background-image: ${props =>
    `conic-gradient(green ${props.assetPercent}%, red ${props.liabilityPercent}%)`};
  border-radius: 50%;
`;

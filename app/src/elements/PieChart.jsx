import styled from 'styled-components';

export default styled.div`
  align-self: center;
  height: 250px;
  width: 250px;
  margin: auto;
  background-image: ${({ assetPercent, liabilityPercent }) => {
    if (assetPercent <= 0) return `conic-gradient(red, red)`;

    if (liabilityPercent <= 0) return `conic-gradient(green, green)`;

    return `conic-gradient(green ${assetPercent}%, red ${liabilityPercent}%)`;
  }};
  border-radius: 50%;
`;

import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  padding: 10px;
  picture {
    border-radius: 100%;
    overflow: hidden;
    img {
      width: 44px;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 6px;
    span:nth-child(1) {
      font-weight: 600;
    }
    span:nth-child(2) {
      font-size: 13px;
    }
  }
`;

export { MainWrapper };

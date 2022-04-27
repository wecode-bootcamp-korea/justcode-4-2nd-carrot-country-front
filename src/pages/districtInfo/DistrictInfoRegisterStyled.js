import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  padding: 100px 0;
  max-width: 890px;

  .imageTextWrapper {
    font-size: 20px;
    padding: 10px 15px;
    color: silver;
  }
`;

const PhotoLine = styled.div`
  @media (max-width: 890px) {
    padding: 10px 10px;
  }

  @media (min-width: 891px) {
    padding: 10px 10px;
  }
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  margin: auto;
  border-top: 1px solid #f2f2f1;
  border-bottom: 1px solid #f2f2f1;
  max-width: 1024px;
  width: auto;
  height: 150px;
  padding: 15px 0;

  .imageContainer {
    display: flex;
    align-items: center;
    position: relative;
    width: auto;
    height: 100%;
    margin-left: 16px;
    aspect-ratio: 1/1;

    .photoDiscard {
      position: absolute;
      right: -17px;
      top: -17px;
      z-index: 10;
      font-size: 40px;
      background-color: white;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  .eachImage {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 10px;
  }

  .eachImage:hover {
    cursor: pointer;
  }
`;

const PhotoButton = styled.button`
  display: flex;
  aspect-ratio: 1/1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;

  :hover {
    cursor: pointer;
  }
  .camera {
    display: flex;
    font-size: 200%;
    padding: 5%;
  }
`;

const PhotoCount = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5%;
  font-size: 150%;
`;
const PhotoTotal = styled.p`
  color: #f47804;
`;

const PhotoLimit = styled.p`
  color: lightgray;
`;

const PhotoInput = styled.input`
  display: none;
`;

export {
  Wrapper,
  PhotoLine,
  PhotoButton,
  PhotoCount,
  PhotoTotal,
  PhotoLimit,
  PhotoInput,
};

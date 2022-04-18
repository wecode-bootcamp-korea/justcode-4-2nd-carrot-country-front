import styled from 'styled-components';

const MainWrapper = styled.main`
  img {
    width: 100%;
  }
`;

const TopArticle = styled.article``;

const BottomArticle = styled.article`
  @media (max-width: 690px) {
    flex-direction: column;
    img {
      width: 60%;
    }
    section:nth-child(2) {
      align-items: center;
      h1 {
        font-size: 28px;
      }
      div {
        width: 100%;
        align-items: center;
        flex-direction: column;
        margin-bottom: 20px;
        button {
          width: 70%;
          margin-bottom: 20px;
        }
      }
    }
  }
  @media (min-width: 691px) and (max-width: 890px) {
    flex-direction: column;
    img {
      width: 60%;
    }
    section:nth-child(2) {
      align-items: center;
      h1 {
        font-size: 34px;
      }
      div {
        width: 100%;
        align-items: center;
        flex-direction: column;
        margin-bottom: 20px;
        button {
          width: 70%;
          margin-bottom: 20px;
        }
      }
    }
  }
  @media (min-width: 891px) {
    flex-direction: row;
    section:nth-child(2) {
      flex-direction: row;
      align-items: start;
      h1 {
        font-size: 40px;
      }
      div {
        button {
          margin-right: 20px;
        }
      }
    }
  }
  display: flex;
  section {
    flex: 1;
  }
  section:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      transition: 0.5s;
      font-weight: 600;
    }
    p {
      padding-top: 30px;
      color: #666;
    }
    div {
      display: flex;
      padding-top: 30px;
      button {
        border: 0px;
        border-radius: 8px;
        padding: 15px 20px;
        font-size: 18px;
        font-weight: 600;
        color: #ffff;
        cursor: pointer;
        background: ${props => props.theme.signColor};
        &:hover {
          background: #ff8a3d82;
        }
      }
    }
  }
`;

export { MainWrapper, TopArticle, BottomArticle };

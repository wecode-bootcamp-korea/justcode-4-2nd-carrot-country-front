import styled from 'styled-components';

const MainWrapper = styled.main`
  @media (max-width: 890px) {
    article {
      flex-direction: column;
      text-align: center;
      padding-top: 50px;

      h1 {
        font-size: 34px;
      }
      img {
        width: 450px;
      }
    }
    article:nth-child(2) {
      flex-direction: column-reverse;

      div {
        width: 100%;
        align-items: center;
        flex-direction: column;
        margin-bottom: 20px;
        button {
          width: 350px;
          margin-bottom: 20px;
        }
      }
    }
  }
  @media (min-width: 891px) {
    article {
      flex-direction: row;
      justify-content: space-evenly;

      h1 {
        font-size: 40px;
      }
      img {
        width: 500px;
      }
    }

    article:nth-child(2) {
      div {
        button {
          margin-right: 20px;
        }
      }
    }
  }
  article {
    display: flex;

    h1 {
      font-weight: 600;
    }
    p {
      padding-top: 30px;
    }
    span {
      padding-top: 5px;
    }
    p,
    span {
      color: #666;
    }
  }
  article:nth-child(1) {
    background-color: #faf7f2;
  }
  article:nth-child(2) {
  }
`;

const TopArticle = styled.article`
  section:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const BottomArticle = styled.article`
  section:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;

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

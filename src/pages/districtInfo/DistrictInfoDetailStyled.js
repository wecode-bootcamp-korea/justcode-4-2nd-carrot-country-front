import styled from 'styled-components';

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  cursor: pointer;
`;

const InfoWrapper = styled.section`
  @media (max-width: 890px) {
    padding: 0px 15px;
  }
  @media (min-width: 891px) {
    width: 677px;
    margin: 0px auto;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid #99999940;
  margin-bottom: 30px;
`;

const InfoTop = styled.div`
  padding-bottom: 30px;
  h1 {
    padding-bottom: 8px;
    font-weight: 500;
    font-size: 20px;
  }
`;

const InfoBottom = styled.div`
  border-bottom: 1px solid #99999940;
  div {
    padding-bottom: 30px;
  }
  div:nth-child(1) {
    color: #333;
    p {
      padding-bottom: 8px;
    }
  }
  div:nth-child(2) {
    span {
      padding: 0px 6px;
      color: #71717199;
      font-size: 13px;
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .ChatBtn {
    border: 1px solid ${props => props.theme.signColor};
    border-radius: 50px;
    padding: 15px 20px;
    cursor: pointer;
    :hover {
      background-color: ${props => props.theme.signColor};
      span {
        color: #ffff;
      }
    }
    span {
      color: ${props => props.theme.signColor};
    }
  }
`;
const CommentsWrapper = styled.section`
  @media (max-width: 890px) {
    padding: 0px 15px;
  }
  @media (min-width: 891px) {
    width: 677px;
    margin: 0px auto;
  }
`;

const CommentTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 6px;
  border-bottom: 1px solid #99999940;
  .heart {
    font-size: 18px;
    margin-left: 3px;
    cursor: pointer;
    transition: transform 300ms ease;
  }
  .heart:hover {
    transform: scale(1.2);
  }
  span {
    font-size: 15px;
    font-weight: 600;
  }
  .agree {
    margin-left: 13px;
  }
`;

export {
  MainWrapper,
  InfoWrapper,
  InfoTop,
  InfoBottom,
  Line,
  UserInfo,
  CommentsWrapper,
  CommentTitle,
};

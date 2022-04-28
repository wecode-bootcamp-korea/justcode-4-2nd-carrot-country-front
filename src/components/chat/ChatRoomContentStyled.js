import theme from 'styles/theme';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column-reverse;
  overflow-y: scroll;
  padding: 0 10px;
  .textWrapper {
    li {
      display: flex;
      margin: 10px;
      font-size: 15px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .isMy {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      .chatWrapper {
        padding: 15px 20px;
        background-color: ${theme.signColor};
        color: white;
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }
      .timeWrapper {
        padding-right: 10px;
        color: silver;
        font-size: 13px;
      }
    }
    .isOther {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      flex-direction: row-reverse;
      .chatWrapper {
        padding: 15px 20px;
        background-color: #eaebee;
        border-top-right-radius: 1rem;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }
      .timeWrapper {
        padding-left: 10px;
        color: silver;
        font-size: 13px;
      }
    }
  }
`;

const NoTalkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 30px;
  color: silver;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 1px solid silver;
  padding: 0 10px;
  height: 64px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  .stateWrapper {
    border: 1px solid gray;
    border-radius: 0.3em;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: bolder;
  }

  .middleWrapper {
    display: flex;
    align-items: center;
    .imageWrapper {
      border: 1px solid silver;
      border-radius: 0.3em;
      text-align: center;
      color: silver;
      width: 50px;
      height: 50px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .textWrapper {
      padding-left: 20px;
      p:first-child {
        padding-bottom: 5px;
        font-size: 13px;
      }
      p:last-child {
        font-weight: bolder;
      }
    }
  }
`;

export { MainWrapper, ProductWrapper, NoTalkWrapper };

import theme from 'styles/theme';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column-reverse;
  overflow-y: scroll;
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
  align-items: center;
  border-bottom: 1px solid silver;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  .imageWrapper {
    width: 50px;
    img {
      width: 100%;
    }
  }
  .textWrapper {
    p:first-child {
      font-weight: 700;
    }
  }
`;

export { MainWrapper, ProductWrapper, NoTalkWrapper };

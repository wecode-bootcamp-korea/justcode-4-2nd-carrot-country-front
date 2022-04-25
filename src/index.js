import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </ThemeProvider>
  </>
);

// React.StrictMode : 자동적으로 함수 내 렌더링과 커밋을 지켜보고 경고해준다.

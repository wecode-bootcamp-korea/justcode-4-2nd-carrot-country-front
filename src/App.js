import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store/store';
import Header from 'nav/Header';
import Footer from 'nav/Footer';
import Main from 'pages/main/Main';
import Login from 'components/login/Login';
import Signup from 'components/signup/Signup';

function App() {
  return (
    <BrowserRouter basename="/">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;

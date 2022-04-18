import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store/store";
import Header from "nav/Header";
import Footer from "nav/Footer";
import Main from "pages/Main";
import Login from "pages/Login";

function App() {
  return (
    <BrowserRouter basename="/">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;

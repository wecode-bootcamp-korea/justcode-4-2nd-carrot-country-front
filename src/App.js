import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider } from 'context';
import Header from 'nav/Header';
import Footer from 'nav/Footer';
import Main from 'pages/main/Main';
import ProductRegister from 'pages/product/ProductRegister';
import ProductDetail from 'pages/product/ProductDetail';
import DistrictInfo from 'pages/districtInfo/DistrictInfo';

function App() {
  return (
    <BrowserRouter basename="/">
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/detail" element={<ProductDetail />} />
          <Route path="/product-register" element={<ProductRegister />} />
          <Route path="/district-info" element={<DistrictInfo />} />
        </Routes>
        <Footer />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

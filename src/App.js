import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider } from 'context/context';

import Header from 'nav/Header';
import Footer from 'nav/Footer';
import Main from 'pages/main/Main';
import ProductRegister from 'pages/product/ProductRegister';
import ProductDetail from 'pages/product/ProductDetail';
import DistrictInfo from 'pages/districtInfo/DistrictInfo';
import Mypage from 'pages/mypage/Mypage';
import ProductList from 'pages/product/ProducInfo';
import Chat from 'pages/chat/Chat';
import DIRegister from 'pages/districtInfo/DistrictInfoRegister';
import DIDetail from 'pages/districtInfo/DistrictInfoDetail';
import SearchMain from 'pages/search/SearchMain';

function App() {
  return (
    <BrowserRouter basename="/">
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/detail" element={<ProductDetail />} />
          <Route path="/product/register" element={<ProductRegister />} />
          <Route path="/district-info" element={<DistrictInfo />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/district-info/register" element={<DIRegister />} />
          <Route path="/district-info/detail" element={<DIDetail />} />
          <Route path="/search" element={<SearchMain />} />
        </Routes>
        <Footer />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

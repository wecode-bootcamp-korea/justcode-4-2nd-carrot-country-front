import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CLIENT_PORT } from 'config';
import Signup from 'components/signup/Signup';
import {
  HeaderSize,
  HeaderWrapper,
  LogoWrapper,
  SearchBarWrapper,
  SearchBar,
  NavMenu,
  ChatButton,
} from './HeaderStyled';
import { IoSearchOutline } from 'react-icons/io5';
function Header() {
  const navigate = useNavigate();
  const [isSearchForcus, setIsSearchForcus] = useState(false);
  const [useOpenSignup, setUseOpenSignup] = useState(false);

  const goToMain = () => {
    navigate('/');
  };

  return (
    <HeaderSize>
      <HeaderWrapper>
        <LogoWrapper onClick={goToMain}>
          <img
            src={`${CLIENT_PORT}/images/logo/logo2.png`}
            alt="logo"
            width="120px"
          />
        </LogoWrapper>

        <SearchBarWrapper isFocus={isSearchForcus}>
          <SearchBar
            type="search"
            placeholder="동네 이름, 물품명 등을 검색해보세요!"
            onFocus={() => {
              setIsSearchForcus(true);
            }}
            onBlur={() => {
              setIsSearchForcus(false);
            }}
          />
          <IoSearchOutline />
        </SearchBarWrapper>
        <NavMenu>
          <li>동네매물</li>
          <li>동네소식</li>
          <li>|</li>
          <li>로그인</li>
          <li onClick={() => setUseOpenSignup(true)}>회원가입</li>
        </NavMenu>
        <ChatButton>당근채팅</ChatButton>
      </HeaderWrapper>
      <Signup visible={useOpenSignup} setVisible={setUseOpenSignup} />
    </HeaderSize>
  );
}

export default Header;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HeaderSize,
  HeaderWrapper,
  LogoWrapper,
  SearchBarWrapper,
  SearchBar,
  NavMenu,
  NavButton,
  ChatButton,
} from './HeaderStyled';
import { CLIENT_PORT } from 'config';
import { IoSearchOutline } from 'react-icons/io5';
import { AiOutlineMenu } from 'react-icons/ai';

function Header() {
  const navigate = useNavigate();
  const [isSearchForcus, setIsSearchForcus] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const goToMain = () => {
    navigate('/');
  };

  // const goToProducts = () => {
  //   navigate('');
  // };

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
        <NavButton
          onClick={() => {
            setIsButtonClicked(prev => !prev);
          }}
        >
          <AiOutlineMenu />
        </NavButton>
        <NavMenu isButtonClicked={isButtonClicked}>
          <li>동네매물</li>
          <li>동네소식</li>
          <li>|</li>
          <li>로그인</li>
          <li>회원가입</li>
        </NavMenu>
        <ChatButton>당근채팅</ChatButton>
      </HeaderWrapper>
    </HeaderSize>
  );
}

export default Header;

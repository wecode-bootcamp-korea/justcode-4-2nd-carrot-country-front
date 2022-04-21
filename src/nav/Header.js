import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CLIENT_PORT } from 'config';
import Signup from 'components/signup/Signup';
import Login from 'components/login/Login';
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
import { IoSearchOutline } from 'react-icons/io5';
import { AiOutlineMenu } from 'react-icons/ai';

function Header() {
  const [isSearchForcus, setIsSearchForcus] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [useOpenSignup, setUseOpenSignup] = useState(false);
  const [useOpenLogin, setUseOpenLogin] = useState(false);
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  // const goToProducts = () => {
  //   navigate('');
  // };

  const goToDistrictInfo = () => {
    navigate('/district-info');
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
        <NavButton
          onClick={() => {
            setIsButtonClicked(prev => !prev);
          }}
        >
          <AiOutlineMenu />
        </NavButton>
        <NavMenu isButtonClicked={isButtonClicked}>
          <li>동네매물</li>
          <li onClick={goToDistrictInfo}>동네소식</li>
          <li>|</li>
          <li onClick={() => setUseOpenLogin(true)}>로그인</li>
          <li onClick={() => setUseOpenSignup(true)}>회원가입</li>
        </NavMenu>
        <ChatButton>당근채팅</ChatButton>
      </HeaderWrapper>
      {useOpenLogin && (
        <Login visible={useOpenLogin} setVisible={setUseOpenLogin} />
      )}
      {useOpenSignup && (
        <Signup visible={useOpenSignup} setVisible={setUseOpenSignup} />
      )}
    </HeaderSize>
  );
}

export default Header;

import React, { useContext, useState } from 'react';
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
import { UserContext, UserDispatchContext } from 'context/context';

function Header() {
  const [isSearchForcus, setIsSearchForcus] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [useOpenSignup, setUseOpenSignup] = useState(false);
  const [useOpenLogin, setUseOpenLogin] = useState(false);
  const [useKeyword, setUseKeyword] = useState('');
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);

  const goToMain = () => {
    navigate('/');
  };
  const goToDistrictInfo = () => {
    navigate('/district-info');
  };
  const goToProducts = () => {
    navigate('/product');
  };
  const gotoChat = () => {
    navigate('/chat');
  };
  const handleLogout = () => {
    const logoutconfirm = window.confirm('로그아웃 하시겠습니까?');
    if (logoutconfirm) {
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
      dispatch({ type: 'LOGOUT' });
      navigate('/');
    }
  };

  const handleSearch = e => {
    const { value } = e.target;
    setUseKeyword(value);
  };

  const handleKeyDown = e => {
    if (e.keyCode === 13 && useKeyword !== '') {
      navigate('/search', { state: { keyword: useKeyword } });
    }
  };

  const handleClick = () => {
    navigate('/search', { state: { keyword: useKeyword } });
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
            type="text"
            placeholder="동네 이름, 물품명 등을 검색해보세요!"
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              setIsSearchForcus(true);
            }}
            onBlur={() => {
              setIsSearchForcus(false);
            }}
          />
          <IoSearchOutline
            onClick={() => handleClick()}
            className="maginfier"
          />
        </SearchBarWrapper>
        <NavButton
          onClick={() => {
            setIsButtonClicked(prev => !prev);
          }}
        >
          <AiOutlineMenu style={{}} />
        </NavButton>
        <NavMenu isButtonClicked={isButtonClicked}>
          <li onClick={goToProducts}>동네매물</li>
          <li onClick={goToDistrictInfo}>동네소식</li>
          <li>|</li>
          {user.id !== '' ? (
            <>
              <li onClick={() => handleLogout()}>로그아웃</li>
              <li onClick={() => setUseOpenLogin(true)}>마이페이지</li>
            </>
          ) : (
            <>
              <li onClick={() => setUseOpenLogin(true)}>로그인</li>
              <li onClick={() => setUseOpenSignup(true)}>회원가입</li>
            </>
          )}
        </NavMenu>
        {user.id !== '' && (
          <ChatButton onClick={() => gotoChat()}>당근채팅</ChatButton>
        )}
      </HeaderWrapper>
      {useOpenLogin && (
        <Login
          visible={useOpenLogin}
          setVisible={setUseOpenLogin}
          setOpenSignup={setUseOpenSignup}
        />
      )}
      {useOpenSignup && (
        <Signup visible={useOpenSignup} setVisible={setUseOpenSignup} />
      )}
    </HeaderSize>
  );
}

export default Header;

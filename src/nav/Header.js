import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CLIENT_PORT } from 'config';
import Signup from 'components/signup/Signup';
import Login from 'components/login/Login';
import Mypage from 'pages/Mypage';
import {
  HeaderSize,
  HeaderWrapper,
  LogoWrapper,
  SearchBarWrapper,
  SearchBar,
  NavMenu,
  NavButton,
  ChatButton,
  ChatButtonWrapper,
} from './HeaderStyled';
import { IoSearchOutline } from 'react-icons/io5';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillCircleFill } from 'react-icons/bs';
import { UserContext, UserDispatchContext } from 'context/context';
import { socket } from 'apis/socket';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSearchForcus, setIsSearchForcus] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [useOpenSignup, setUseOpenSignup] = useState(false);
  const [useOpenLogin, setUseOpenLogin] = useState(false);
  const [useOpenMypage, setUseOpenMypage] = useState(false);
  const [useKeyword, setUseKeyword] = useState('');
  const user = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);
  const [isNewAlarm, setIsNewAlarm] = useState(false);

  socket.on('new_alarm', (roomId, chat) => {
    if (location.pathname !== '/chat') {
      setIsNewAlarm(true);
    }
  });

  useLayoutEffect(() => {
    setIsButtonClicked(false);
  }, [location.pathname]);

  const handleNavigate = path => {
    navigate(path);
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
        <LogoWrapper onClick={() => handleNavigate('/')}>
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
          <li onClick={() => handleNavigate('/product')}>동네매물</li>
          <li onClick={() => handleNavigate('/district-info')}>동네소식</li>
          <li>|</li>
          {user.id !== '' ? (
            <>
              <li onClick={() => handleLogout()}>로그아웃</li>
              <li onClick={() => handleNavigate('/mypage')}>마이페이지</li>
            </>
          ) : (
            <>
              <li onClick={() => setUseOpenLogin(true)}>로그인</li>
              <li onClick={() => setUseOpenSignup(true)}>회원가입</li>
            </>
          )}
        </NavMenu>
        {user.id !== '' && (
          <ChatButtonWrapper style={{ position: 'relative' }}>
            <ChatButton
              onClick={() => {
                if (isNewAlarm) {
                  setIsNewAlarm(false);
                }
                handleNavigate('/chat');
              }}
            >
              당근채팅
            </ChatButton>
            {isNewAlarm && <BsFillCircleFill size={12} />}
          </ChatButtonWrapper>
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

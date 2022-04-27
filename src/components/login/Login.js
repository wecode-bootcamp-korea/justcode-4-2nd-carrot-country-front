// modules
import React, { useState, useContext } from 'react';
import { CLIENT_PORT } from 'config.js';
import { loginUser } from 'apis/user';
import { UserDispatchContext } from 'context/context';
// components
import Modal from 'components/modal/Modal';
// styles
import { AiFillCheckSquare } from 'react-icons/ai';
import {
  LoginBox,
  Id,
  Password,
  LoginBtn,
  Save,
  Usersign,
  Usersignup,
} from 'components/login/LoginStyle';

function Login(props) {
  const { visible, setVisible, setOpenSignup } = props;
  const dispatch = useContext(UserDispatchContext);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [useSave, setUseSave] = useState(false);
  const [useFadeOut, setUseFadeOut] = useState(false);

  const handleSave = () => {
    setUseSave(!useSave);
  };

  const goToSignup = () => {
    setUseFadeOut(true);
    setTimeout(() => {
      setVisible(false);
      setUseFadeOut(false);
      setOpenSignup(true);
    }, 500);
  };

  const handleLogin = () => {
    loginUser(id, pw).then(result => {
      const { message, token, user } = result;
      if (message === 'INVALID_USER') {
        alert('아이디 또는 비밀번호가 잘못 되어있습니다.');
      } else if (message === 'SUCCESS_LOGIN') {
        if (useSave) {
          localStorage.setItem('token', token);
        } else {
          sessionStorage.setItem('token', token);
        }
      }
      dispatch({
        type: 'LOGIN',
        payload: {
          id: user.id,
          nickname: user.nickname,
          city: user.city,
          district: user.district,
        },
      });
      setUseFadeOut(true);
      setTimeout(() => {
        setVisible(false);
        setUseFadeOut(false);
      }, 500);
    });
  };

  const handleIdInput = e => {
    setId(e.target.value);
  };

  const handlePwInput = e => {
    setPw(e.target.value);
  };

  const isValidButton = isValidId(id) && isValidPw(pw);

  function isValidId(str) {
    const regId = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{5,12}$/;
    return regId.test(str);
  }

  function isValidPw(str) {
    const regPw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/;
    return regPw.test(str);
  }

  return (
    <Modal
      width="365px"
      visible={visible}
      setVisible={setVisible}
      useFadeOut={useFadeOut}
    >
      <LoginBox width="200px">
        <img
          src={`${CLIENT_PORT}/images/logo/logo1.png`}
          alt="logo"
          width="225px"
        />
        <div>
          <Id
            onChange={handleIdInput}
            type="text"
            placeholder="아이디를 입력하세요"
            id="id"
            name="id"
            required
          />
          <Password
            onChange={handlePwInput}
            type="password"
            placeholder="비밀번호를 입력하세요"
            id="password"
            name="password"
            required
          />
        </div>
        <LoginBtn disabled={!isValidButton} onClick={handleLogin}>
          로그인
        </LoginBtn>
        <Save isChecked={useSave} onClick={handleSave}>
          <AiFillCheckSquare size={18} />
          <span>자동로그인</span>
        </Save>
        <Usersign>
          아직 회원이 아니신가요?
          <Usersignup onClick={goToSignup}>회원가입</Usersignup>
        </Usersign>
      </LoginBox>
    </Modal>
  );
}

export default Login;

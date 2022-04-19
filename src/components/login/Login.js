import styled from 'styled-components';
import { CLIENT_PORT } from 'config.js';
import { Link } from 'react-router-dom';
import Modal from 'components/modal/Modal';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import {
  LoginBox,
  Id,
  Password,
  LoginBtn,
  Save,
  StyledCheckBox,
  Usersign,
  Usersignup,
} from 'components/login/LoginStyle';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [color, setColor] = useState('red');

  const handleLogin = () => {
    fetch('localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'INVALID_USER') {
          alert('아이디 또는 비밀번호가 잘못 되어있습니다.');
        } else if (result.message === 'SUCCESS_LOGIN') {
          alert('환영합니다.');
          // loginSuccess();
          // claseModal();
        }
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

  const saveInfo = () => {
    color === 'none' ? setColor('none') : setColor('red');
  };

  return (
    <Modal width="365px">
      <LoginBox width="200px">
        <img
          src={`${CLIENT_PORT}/images/logo/logo1.png`}
          alt="logo"
          width="225px"
        />
        <Id
          onChange={handleIdInput}
          type="text"
          placeholder="아이디를 입력하세요"
          id="id"
          name="id"
        />
        <Password
          onChange={handlePwInput}
          type="password"
          placeholder="비밀번호를 입력하세요"
          id="password"
          name="password"
        />
        <LoginBtn disabled={!isValidButton} onClick={handleLogin}>
          로그인
        </LoginBtn>
        <Save onClick={saveInfo}>
          <StyledCheckBox></StyledCheckBox>로그인 상태 유지
        </Save>
        <Usersign>
          아직 회원이 아니신가요?
          <Usersignup>회원가입</Usersignup>
        </Usersign>
      </LoginBox>
    </Modal>
  );
}

export default Login;

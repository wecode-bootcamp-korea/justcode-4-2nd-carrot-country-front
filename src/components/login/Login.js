import styled from 'styled-components';
import { CLIENT_PORT } from 'config.js';
import { Link } from 'react-router-dom';
import Modal from 'components/modal/Modal';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

//스타일
const LoginBox = styled.div`
  display: inline-block;
  width: 350px;
  height: 450px;
  border: 2px solid #e4e4e4;
  border-radius: 8px;
  text-align: center;
  flex-direction: column;
  padding: 50px 10px;
`;

const Email = styled.input`
  width: 250px;
  padding: 13px;
  margin: 25px 10px 5px 10px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #f6f6f6;
`;

const Password = styled.input`
  width: 250px;
  padding: 13px;
  margin: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #f6f6f6;
`;

const LoginBtn = styled.button`
  width: 90%;
  margin-top: 20px;
  padding: 10px 0px;
  cursor: pointer;
  color: white;
  font-size: 17px;
  font-weight: 550;
  border-radius: 5px;
  border: 1px solid lightgray;
  background-color: #ff8a3d82;
  ${({ login }) => {
    return login ? `background-color: #ff8a3d82;` : `background-color: #red;`;
  }}
`;
// LoginBtn.defaultProps = {
//   btnDisabled : {
//     main : 'palevioletred'
//   }
// }
// const btnDisabled = {
//   main: 'palevioletred'
// }

const Usersign = styled.div`
  font-size: 15px;
  margin-top: 180px;
  text-align: center;
`;

const Usersignup = styled.span`
  color: #ff8a3d;
  font-size: 15px;
  margin-left: 10px;
  cursor: pointer;
`;

function Login() {
  // console.log(1,CLIENT_PORT);
  //기능
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const isValidInput = inputId.includes('@') && inputPw.length > 5;

  const handleIdInput = e => {
    setInputId(e.target.value);
  };

  const handlePwInput = e => {
    setInputPw(e.target.value);
  };

  const navigate = useNavigate();

  const handleSignIn = () => {
    fetch('localhost:3000/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // email: id,
        // password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과 : ', result));
  };

  const goToList = () => {
    navigate('/');
  };

  return (
    <Modal width="373px">
      <LoginBox width="200px">
        <img
          src={`${CLIENT_PORT}/images/logo/logo1.png`}
          alt="logo"
          width="200px"
        />
        <Email
          value={inputId}
          type="text"
          placeholder="이메일을 입력하세요"
          onChange={handleIdInput}
        />
        <Password
          value={inputPw}
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handlePwInput}
        />
        <LoginBtn
          onClick={goToList}
          login={true}
          // className={`loginBtn ${isValidInput ? '' : 'btnDisabled'}`}
        >
          로그인
        </LoginBtn>
        <Usersign>
          아직 회원이 아니신가요?
          <Usersignup onClick={handleSignIn}>회원가입</Usersignup>
        </Usersign>
      </LoginBox>
    </Modal>
  );
}

export default Login;

import React from 'react';
import styled from 'styled-components';
import { CLIENT_PORT } from 'config.js';
import { Link } from 'react-router-dom';
import Modal from 'components/modal/Modal';
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// const Modal = styled.div`
//   width: 300px;
// `;

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
  background-color: #ef8d27f7;
`;

const Usersignup = styled.div`
  margin-top: 180px;
  font-size: 15px;
  text-align: center;
`;

function Login() {
  // console.log(1,CLIENT_PORT);

  return (
    <Modal>
      <LoginBox width="200px">
        <img
          src={`${CLIENT_PORT}/images/logo/logo1.png`}
          alt="logo"
          width="200px"
        />
        <Email type="text" placeholder="이메일을 입력하세요" />
        <Password type="number" placeholder="비밀번호를 입력하세요" />
        <LoginBtn>로그인</LoginBtn>
        <Usersignup>
          계정이 없으신가요? <>회원가입</>
        </Usersignup>
      </LoginBox>
    </Modal>
  );
}

export default Login;

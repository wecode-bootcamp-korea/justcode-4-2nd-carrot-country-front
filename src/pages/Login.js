import React from "react";
import styled from "styled-components";
import {CLIENT_PORT} from "config.js";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

const LoginPage = styled.div`
display: inline-block;
`
const LoginBox = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 350px;
height: 500px;
border: 2px solid gray;
border-radius: 8px;
padding: 0px 10px;
`;
// const Logo = styled.div`
// background-image: url(${Logo});
// `;
const Email = styled.input`
width: 250px;
padding: 13px;
margin: 10px;
border: 1px solid gray;
border-radius: 5px;
`;
const Password = styled.input`
width: 250px;
padding: 13px;
margin: 10px;
border: 1px solid gray;
border-radius: 5px;
`;
const LoginBtn = styled.button`
cursor: pointer;
font-size: 20px;
`;
const UsersignupBtn = styled.button`
cursor: pointer;
font-size: 20px;
`;

function Login() {
  // console.log(1,CLIENT_PORT);

  return (
    <LoginPage>
      <LoginBox>
      <img
        src={`${CLIENT_PORT}/images/logo/logo1.png`}
        alt="logo"
        width="200px"
      />
      <Email type="text" placeholder="이메일을 입력하세요"/>
      <Password type="number" placeholder="비밀번호를 입력하세요"/>
      <LoginBtn>로그인</LoginBtn>
      <UsersignupBtn>회원가입</UsersignupBtn>
      </LoginBox>
    </LoginPage>
  );
}

export default Login;

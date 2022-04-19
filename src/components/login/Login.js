import styled from 'styled-components';
import { CLIENT_PORT } from 'config.js';
import { Link } from 'react-router-dom';
import Modal from 'components/modal/Modal';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import { fetchLogin } from './FetchLogin';
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

//스타일
const LoginBox = styled.div`
  display: inline-block;
  width: 350px;
  height: 450px;
  border-radius: 8px;
  text-align: center;
  flex-direction: column;
  padding: 50px 10px;
`;

const Id = styled.input`
  width: 250px;
  padding: 14px;
  margin: 25px 10px 5px 10px;
  border: 1px solid #adadad;
  border-radius: 5px;
  background-color: #f6f6f6;
`;

const Password = styled.input`
  width: 250px;
  padding: 14px;
  margin: 10px;
  border: 1px solid #adadad;
  border-radius: 5px;
  background-color: #f6f6f6;
`;

const LoginBtn = styled.button`
  width: 90%;
  margin: 20px 5px 0px 0px;
  padding: 11px 0px;
  cursor: pointer;
  color: white;
  font-size: 17px;
  font-weight: 550;
  border-radius: 5px;
  border: 1px solid #adadad;
  background-color: #ff8a3d;
  ${({ disabled }) => disabled && `background-color: #efefef;`}
`;

const Save = styled.p`
  margin: 5px 190px 0px 0px;
  font-size: 13px;
`;

const StyledCheckBox = styled.div`
  display: inline-block;
  margin-right: 3px;
  width: 15px;
  height: 15px;
  border-radius: 4px;
  border: solid 0.1rem #dddddd;
  background-color: ${props => props.color};
`;

const Usersign = styled.div`
  border-top: 1px solid #adadad;
  font-size: 14px;
  margin-top: 120px;
  padding-top: 30px;
  text-align: center;
`;

const Usersignup = styled.span`
  color: #ff8a3d;
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
`;

function Login() {
  const [color, setColor] = useState('red');
  const [isloginButtonOn, setIsloginButtonOn] = useState(false);
  const [loginInputObj, setLoginInputObj] = useState({
    userId: '',
    password: '',
  });

  const idRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{5,12}$/;
  const pwRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/;

  const idChecked = idRegExp.test(useId) || useId.trim() === '';
  const pwChecked = pwRegExp.test(usePw) || usePw.trim() === '';
  const nameChecked = nameRegExp.test(useName) || useName.trim() === '';

  const IdValid = () => {};
  const PwValid = () => {};

  const { setUser } = useUserContext();

  const [account, setAccount] = useState({
    id: '',
    password: '',
  });

  const onChangeAccount = e => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const saveInfo = () => {
    color === 'red' ? setColor('yellow') : setColor('red');
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
          value={inputId}
          onChange={onChangeAccount}
          type="text"
          placeholder="아이디를 입력하세요"
          id="id"
          name="id"
        />
        <Password
          value={inputPw}
          onChange={onChangeAccount}
          type="password"
          placeholder="비밀번호를 입력하세요"
          id="password"
          name="password"
        />
        <LoginBtn disabled={isloginButtonOn} onClick={onSubmitAccount}>
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

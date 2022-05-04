import styled from 'styled-components';

const LoginBox = styled.div`
  width: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 21px 23px 23px 23px;
`;

const LogoBox = styled.div`
  img {
    width: 100%;
  }
`;
const Id = styled.input`
  width: 100%;
  padding: 14px;
  margin: 50px 0px 20px 0px;
  border: 0;
  border-bottom: 1px solid ${props => props.theme.signColor};
  :focus {
    outline: none;
  }
`;

const Password = styled.input`
  width: 100%;
  padding: 14px;
  border: 0;
  border-bottom: 1px solid ${props => props.theme.signColor};
  :focus {
    outline: none;
  }
`;

const LoginBtn = styled.button`
  width: 100%;
  margin: 20px 0px 2px 0px;
  padding: 11px 0px;
  cursor: pointer;
  color: white;
  font-size: 17px;
  font-weight: 550;
  border-radius: 5px;
  border: 0;
  background-color: #ff8a3d;
  ${({ disabled }) => disabled && `background-color: #ff8a3d96;`}
  ${({ disabled }) => disabled && `cursor: default`}
`;

const Usersign = styled.div`
  padding: 35px 0px 10px 0px;
  margin-top: 93px;
  text-align: center;
  font-size: 13px;
`;

const Usersignup = styled.span`
  margin: 0px 0px 0px 10px;
  cursor: pointer;
  color: #ff8a3d;
`;

const Save = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0px 0px 0px;
  font-size: 13px;
  color: ${props => (props.isChecked ? props.theme.signColor : '#8c8c8c8f')};
  cursor: pointer;
  span {
    margin-left: 4px;
  }
`;

export {
  LoginBox,
  LogoBox,
  Id,
  Password,
  LoginBtn,
  Save,
  Usersign,
  Usersignup,
};

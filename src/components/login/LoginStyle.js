import styled from 'styled-components';

const LoginBox = styled.div`
  @media (max-width: 800px) {
    width: 365px;
    margin: auto;
  }
  @media (min-width: 800px) {
    width: 365px;
    margin: auto;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 21px 23px 23px 23px;
  div {
    text-align: center;
  }
`;

const Id = styled.input`
  width: 255px;
  padding: 14px;
  margin: 26px 0px 4px 0px;
  border: 1px solid #adadad;
  border-radius: 5px;
  background-color: #f6f6f6;
`;

const Password = styled.input`
  width: 255px;
  padding: 14px;
  margin: 10px;
  border: 1px solid #adadad;
  border-radius: 5px;
  background-color: #f6f6f6;
`;

const LoginBtn = styled.button`
  width: 255px;
  margin: 20px 0px 2px 0px;
  padding: 11px 0px;
  cursor: pointer;
  color: white;
  font-size: 17px;
  font-weight: 550;
  border-radius: 5px;
  border: 1px solid #adadad;
  background-color: #ff8a3d;
  ${({ disabled }) => disabled && `background-color: #ff8a3d96;`}
`;

const Usersign = styled.div`
  width: 300px;
  border-top: 1px solid #adadad;
  font-size: 13px;
  margin-top: 93px;
  padding: 35px 0px 10px 0px;
  text-align: center;
`;

const Usersignup = styled.span`
  color: #ff8a3d;
  font-size: 13px;
  margin: 0px 0px 2px 10px;
  cursor: pointer;
`;

const Save = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 170px 0px 0px;
  font-size: 13px;
  color: ${props => (props.isChecked ? props.theme.signColor : '#8c8c8c8f')};
  svg {
    cursor: pointer;
  }
  span {
    margin-left: 4px;
  }
`;

export { LoginBox, Id, Password, LoginBtn, Save, Usersign, Usersignup };

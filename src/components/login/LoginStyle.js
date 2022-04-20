import styled from 'styled-components';

const LoginBox = styled.div`
  display: inline-block;
  border-radius: 8px;
  text-align: center;
  flex-direction: column;
  padding: 27px 10px;
`;

const Id = styled.input`
  width: 255px;
  padding: 14px;
  margin: 25px 10px 5px 10px;
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
  ${({ disabled }) => disabled && `background-color: #efefef;`}
`;

const Save = styled.p`
  margin: 5px 143px 0px 0px;
  font-size: 12px;
`;

const StyledCheckBox = styled.button`
  display: inline-block;
  margin-right: 3px;
  width: 15px;
  height: 15px;
  border-radius: 4px;
  border: solid 0.1rem #dddddd;
  cursor: pointer;
  background: ${props => props.color || 'white'};
`;

const Usersign = styled.div`
  border-top: 1px solid #adadad;
  font-size: 13px;
  margin-top: 95px;
  padding-top: 28px;
  text-align: center;
`;

const Usersignup = styled.span`
  color: #ff8a3d;
  font-size: 13px;
  margin: 0px 0px 2px 10px;
  cursor: pointer;
`;

export {
  LoginBox,
  Id,
  Password,
  LoginBtn,
  Save,
  StyledCheckBox,
  Usersign,
  Usersignup,
};

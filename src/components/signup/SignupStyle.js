import styled from 'styled-components';

const SignupBtn = styled.button`
  border: none;
  padding: 15px 0px;
  color: #ffff;
  font-weight: 600;
  border-radius: 5px;
  background-color: ${props => props.theme.signColor};
  cursor: pointer;
  :hover {
    background-color: #ff8a3d96;
  }
  :focus {
    outline: none;
  }
`;
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  h1 {
    font-size: 24px;
    padding-bottom: 20px;
  }
  input,
  select {
    border: none;
    padding: 15px 0px;
    :focus {
      outline: none;
    }
  }
  select {
    color: #666;
  }
`;

const Block = styled.section`
  margin-bottom: 20px;
`;
const InputWrapper = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid
    ${props => (props.isChecked ? props.theme.signColor : '#ff0000')};
  span:nth-child(2) {
    margin-left: 10px;
    font-size: 12px;
    color: ${props => (props.isChecked ? props.theme.signColor : '#ff0000')};
  }
  input {
    width: 80%;
    flex: 1;
  }
`;
const SelectWrapper = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.signColor};
  select {
    width: 100%;
  }
`;
const InputIdWrapper = styled.div`
  display: flex;
  button {
    border: 0px;
    text-align: end;
    margin-block: auto;
    color: ${props => (props.idChecked ? props.theme.signColor : '#ff0000')};
    font-size: 12px;
    background-color: #ffff;
    cursor: pointer;
    :focus {
      outline: none;
      border-bottom: 1px solid;
    }
    :disabled {
      cursor: default !important;
    }
  }
`;

const PolicyAgreed = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 13px;
  color: ${props => (props.isChecked ? props.theme.signColor : '#8c8c8c8f')};
  svg {
    cursor: pointer;
  }
  span {
    margin-left: 4px;
  }
`;
export {
  InputIdWrapper,
  SelectWrapper,
  Block,
  InputWrapper,
  MainWrapper,
  SignupBtn,
  PolicyAgreed,
};

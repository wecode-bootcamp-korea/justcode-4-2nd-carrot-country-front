import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function LeavePageButton({ content }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return <Button onClick={goBack}>{content}</Button>;
}

export default LeavePageButton;

const Button = styled.button`
  display: flex;
  width: 90px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border: 1px solid #d6d6d6;
  color: #b3b3b3;
  background-color: transparent;
  border-radius: 5px;

  :hover {
    cursor: pointer;
  }
`;

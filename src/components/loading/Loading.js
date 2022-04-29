import styled, { keyframes } from 'styled-components';
import theme from 'styles/theme';
import { FaCarrot } from 'react-icons/fa';

function Loading() {
  return (
    <LoadingWrapper>
      <FaCarrot />
    </LoadingWrapper>
  );
}

export default Loading;

const turnCarrot = keyframes`
0%{
    transform: rotate(270deg);
}
100%{
    transform: rotate(-90deg);
}
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${theme.signColor};
  font-size: 50px;
  animation: ${turnCarrot} 1s linear infinite;
  transform-origin: 50% 50%;
  opacity: 0.5;
`;

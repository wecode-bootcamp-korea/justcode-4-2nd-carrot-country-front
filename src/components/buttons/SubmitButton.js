import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import theme from 'styles/theme';
import { AiOutlinePlus } from 'react-icons/ai';

function SubmitButton() {
  const [isListOpen, setIsListOpen] = useState(false);
  return (
    <>
      <Background isListOpen={isListOpen} />
      <ButtonWrapper>
        <ContentWrapper isListOpen={isListOpen}>
          <ListWrapper isListOpen={isListOpen}>
            <li>📥 내 물건 팔기</li>
            <li>💌 내 소식 올리기</li>
          </ListWrapper>
        </ContentWrapper>
        <StyledButton
          isListOpen={isListOpen}
          onClick={() => {
            setIsListOpen(prev => !prev);
          }}
        >
          <AiOutlinePlus style={{ width: '100%' }} />
        </StyledButton>
      </ButtonWrapper>
    </>
  );
}

export default SubmitButton;

const turnButton = keyframes`
    0%{
        transform: rotate(0.5turn);
    }
    100%{
        transform: rotate(0.12turn);
    }
`;

const upList = keyframes`
    0%{
        height: 0px;
        opacity: 0;
    }
    50%{
        height: 100%;
    }
    70%{
        height: 190%;
        border-radius: 0.3em;
        opacity: 0.7;
    }
    80%{
        height: max-content;
        border-radius: 0.3em;
        opacity: 1;
    }
    100%{
        height: max-content;
        border-radius: 0.3em;
     
    }
`;

const animateButton = css`
  animation: ${turnButton} 0.5s ease;
`;

const animateList = css`
  animation: ${upList} 0.3s linear;
`;

const transformButton = css`
  transform: rotate(0.12turn);
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  display: ${props => (props.isListOpen ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 4vw;
  z-index: 20;
  @media (max-width: 690px) {
    right: 20px;
  }
  @media (min-width: 691px) and (max-width: 890px) {
    right: 2vw;
  }
  @media (min-width: 891px) {
    right: 3vw;
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 50%;
  background-color: ${props => (props.isListOpen ? 'white' : theme.signColor)};
  font-size: 40px;
  color: ${props => (props.isListOpen ? 'black' : 'white')};
  font-weight: bolder;
  max-width: 70px;
  max-height: 70px;
  width: 7vw;
  height: 7vw;
  min-width: 60px;
  min-height: 60px;
  ${props => props.isListOpen && animateButton};
  ${props => props.isListOpen && transformButton};
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  position: absolute;
  bottom: 70px;
  right: 0;
  display: ${props => (props.isListOpen ? 'block' : 'none')};
  ${props => props.isListOpen && animateList}
  width:  max-content;
  height: max-content;
  overflow: hidden;
`;

const ListWrapper = styled.ul`
  flex-direction: column;
  margin: 10px 0;
  border-radius: 0.3em;
  padding: 20px 10px;
  width: max-content;
  height: max-content;
  background-color: white;
  font-size: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;

  li {
    padding: 10px 40px 10px 20px;
    width: max-content;
    color: gray;

    :hover {
      color: black;
    }
  }
`;

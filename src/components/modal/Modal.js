import React from 'react';
import { MdClose } from 'react-icons/md';

import styled, { keyframes } from 'styled-components';

function Modal(props) {
  const { children, width, height, title, closeBtn, visible, setVisible } =
    props;

  const handleCancle = () => {
    setVisible(false);
  };

  return (
    <MainWrapper visible={visible} onClick={() => handleCancle()}>
      <Content width={width} height={height} onClick={e => e.stopPropagation()}>
        <Title>
          {!closeBtn && (
            <div>
              <MdClose size="28px" onClick={() => handleCancle()} />
            </div>
          )}
          {title && <h1>{title}</h1>}
        </Title>
        {children}
      </Content>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  @media (max-width: 690px) {
  }
  @media (min-width: 691px) and (max-width: 890px) {
    padding-top: 100px;
  }
  @media (min-width: 891px) {
    padding-top: 100px;
  }

  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const FadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -20%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const Content = styled.div`
  @media (max-width: 690px) {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 691px) and (max-width: 890px) {
    width: ${props => (props.width ? props.width : '600px')};
    height: ${props => (props.height ? props.height : '')};
  }
  @media (min-width: 891px) {
    width: ${props => (props.width ? props.width : '600px')};
    height: ${props => (props.height ? props.height : '')};
  }
  animation: ${FadeInDown} 0.6s;
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
`;

const Title = styled.div`
  padding: 40px 40px 0px;
  font-size: 24px;

  div {
    text-align: end;
    svg {
      cursor: pointer;
    }
  }
`;

export default Modal;

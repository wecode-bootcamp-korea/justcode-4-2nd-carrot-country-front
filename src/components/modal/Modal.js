import React from 'react';
import styled from 'styled-components';

function Modal(props) {
  const { children, width, height } = props;
  return (
    <MainWrapper>
      <Content width={width} height={height}>
        {children}
      </Content>
    </MainWrapper>
  );
}

export default Modal;

const MainWrapper = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: ${props => (props.width ? props.width : '50%')};
  height: ${props => (props.height ? props.height : '')};
`;

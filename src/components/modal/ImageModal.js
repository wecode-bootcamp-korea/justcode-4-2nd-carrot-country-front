import { CLIENT_PORT } from 'config';
import React from 'react';

import { MdClose } from 'react-icons/md';

import styled from 'styled-components';

function ImageModal(props) {
  const { urls, visible, setVisible, width } = props;
  return (
    <MainWrapper visible={visible}>
      <Container width={width}>
        <MdClose size={34} onClick={() => setVisible(false)} />
        {urls.map((url, idx) => {
          return (
            <img src={CLIENT_PORT + url} alt={url} width={width} key={idx} />
          );
        })}
      </Container>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #000;
`;

const Container = styled.div`
  @media (max-width: 890px) {
  }
  @media (min-width: 891px) {
    width: ${props => props.width}px;
    margin: auto;
  }
  background-color: #ffff;
  svg {
    position: fixed;
    top: 10px;
    right: 10px;
    color: #999;
  }
  img {
    width: 100%;
  }
  img:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export default ImageModal;

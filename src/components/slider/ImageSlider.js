import React, { useState } from 'react';
import { CLIENT_PORT } from 'config';

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

import styled from 'styled-components';

function ImageSlider(props) {
  const { urls, width, height } = props;
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const handleNext = () => {
    // 이미지 길이보다 작다는 조건문 추가
    setIndex(index + 1);
  };

  return (
    <MainWrapper width={width}>
      <MdOutlineArrowBackIos size={28} onClick={handlePrev} />
      <ImageWrapper index={index} width={width} height={height}>
        {urls.map((url, idx) => {
          return (
            <div key={idx}>
              <img src={CLIENT_PORT + url} alt={url} />
            </div>
          );
        })}
      </ImageWrapper>
      <MdOutlineArrowForwardIos size={28} onClick={handleNext} />
    </MainWrapper>
  );
}

const MainWrapper = styled.section`
  width: ${props => (props.width ? props.width + 64 + 'px' : '734px')};
  margin: 0px auto;
  display: flex;
  align-items: center;
  svg {
    color: #666;
    cursor: pointer;
  }
`;
const ImageWrapper = styled.div`
  width: ${props => (props.width ? props.width + 'px' : '670px')};
  height: ${props => (props.height ? props.height + 'px' : '500px')};
  display: flex;
  overflow: hidden;
  border-radius: 20px;
  div {
    transform: translate(
      ${props =>
        props.width
          ? props.index * -props.width + 'px'
          : props.index * -670 + 'px'},
      0px
    );
    transition: 0.6s;
    img {
      width: ${props => (props.width ? props.width + 'px' : '670px')};
      height: auto;
    }
  }
`;
export default ImageSlider;

import React, { useState, useEffect } from 'react';
import { CLIENT_PORT } from 'config';

import ImageModal from 'components/modal/ImageModal';

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { BsFillCircleFill } from 'react-icons/bs';

import styled from 'styled-components';

const WIDTH = 684;
const HEIGHT = 500;

function ImageSlider(props) {
  const { urls } = props;
  const [index, setIndex] = useState(0);
  const [useVisible, setUseVisible] = useState(false);
  const [useWidth, setUseWidth] = useState(
    window.innerWidth > 890 ? WIDTH : window.innerWidth
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const handleResize = () => {
    setUseWidth(window.innerWidth);
  };
  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const handleNext = () => {
    if (urls.length !== index + 1) {
      setIndex(index + 1);
    }
  };
  return (
    <MainWrapper>
      <MdOutlineArrowBackIos
        size={30}
        className="prevBtn"
        onClick={handlePrev}
      />
      <ImageWrapper index={index} changeWidth={useWidth}>
        {urls.map((url, idx) => {
          return (
            <div key={idx} onClick={() => setUseVisible(true)}>
              <img src={CLIENT_PORT + url} alt={url} />
            </div>
          );
        })}
        <DotWrapper changeWidth={useWidth}>
          {urls.map((__, idx) => {
            const isCurrent = index === idx;
            return (
              <DotItem key={idx} isCurrent={isCurrent}>
                <BsFillCircleFill size={8} />
              </DotItem>
            );
          })}
        </DotWrapper>
      </ImageWrapper>
      <MdOutlineArrowForwardIos
        size={30}
        onClick={handleNext}
        className="nextBtn"
      />
      <ImageModal
        urls={urls}
        visible={useVisible}
        setVisible={setUseVisible}
        width={WIDTH}
      />
    </MainWrapper>
  );
}

const MainWrapper = styled.section`
  @media (max-width: 890px) {
  }
  @media (min-width: 891px) {
    width: ${WIDTH + 8}px;
    margin: 0px auto;
  }
  position: relative;
  svg {
    cursor: pointer;
  }
  .prevBtn,
  .nextBtn {
    position: absolute;
    top: 50%;
    z-index: 1;
    color: #66666663;
  }
  .prevBtn {
    left: 10px;
  }
  .nextBtn {
    right: 10px;
  }
`;

const ImageWrapper = styled.div`
  @media (max-width: 890px) {
    div {
      transform: translate(
        ${props =>
          props.changeWidth
            ? props.index * -props.changeWidth + 'px'
            : props.index * -670 + 'px'},
        0px
      );
      img {
        width: ${props =>
          props.changeWidth ? props.changeWidth + 'px' : '670px'};
        height: auto;
      }
    }
  }
  @media (min-width: 891px) {
    width: ${WIDTH}px;
    border-radius: 8px;
    div {
      transform: translate(
        ${props =>
          props.width
            ? props.index * -props.width + 'px'
            : props.index * -670 + 'px'},
        0px
      );
      img {
        width: ${WIDTH}px;
        height: auto;
      }
    }
  }
  height: ${HEIGHT}px;
  position: relative;
  display: flex;
  overflow: hidden;
  div {
    align-self: center;
    transition: 0.6s;
    cursor: pointer;
  }
`;
const DotWrapper = styled.span`
  @media (max-width: 890px) {
    width: ${props => props.changeWidth}px;
  }
  @media (min-width: 891px) {
    width: ${WIDTH}px;
  }
  position: absolute;
  height: 36px;
  bottom: 0;
  text-align: center;
  box-shadow: inset 0px -20px 20px 0px #444444ba;
`;

const DotItem = styled.span`
  svg {
    margin: 0px 2px;
    color: ${props => (props.isCurrent ? '#ffff' : '#8c8c8c63')};
  }
`;
export default ImageSlider;

import React, { useState, useEffect } from 'react';
import { SERVER_PORT } from 'config';

import ImageModal from 'components/modal/ImageModal';

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { BsFillCircleFill } from 'react-icons/bs';

import styled from 'styled-components';

const WIDTH = 677;
const HEIGHT = 500;

function ImageSlider(props) {
  const { images } = props;
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
  }, []);

  const handleResize = () => {
    setUseWidth(window.innerWidth);
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (images.length !== index + 1) {
      setIndex(index + 1);
    }
  };
  return (
    <MainWrapper>
      <MdOutlineArrowBackIos
        size={28}
        className="prevBtn"
        onClick={handlePrev}
      />
      <ImageWrapper
        index={index}
        changeWidth={useWidth}
        onClick={() => setUseVisible(true)}
      >
        {images.map((image, idx) => {
          return (
            <div key={idx}>
              <img src={SERVER_PORT + '/' + image.imageUrl} alt={image.id} />
            </div>
          );
        })}
        <DotWrapper changeWidth={useWidth}>
          {images.map((__, idx) => {
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
        size={28}
        onClick={handleNext}
        className="nextBtn"
      />
      {useVisible && (
        <ImageModal
          images={images}
          visible={useVisible}
          setVisible={setUseVisible}
          width={WIDTH}
        />
      )}
    </MainWrapper>
  );
}

const MainWrapper = styled.section`
  @media (max-width: 890px) {
    .prevBtn {
      left: 10px;
    }
    .nextBtn {
      right: 10px;
    }
  }
  @media (min-width: 891px) {
    width: ${WIDTH}px;
    margin: 0px auto;
    .prevBtn {
      left: -30px;
    }
    .nextBtn {
      right: -30px;
    }
  }
  position: relative;
  svg {
    cursor: pointer;
  }
  .prevBtn,
  .nextBtn {
    position: absolute;
    top: 50%;
    color: #666666cc;
  }
`;

const ImageWrapper = styled.div`
  @media (max-width: 890px) {
    div {
      transform: translate(
        ${props =>
          props.changeWidth
            ? props.index * -props.changeWidth + 'px'
            : props.index * -WIDTH + 'px'},
        0px
      );
      img {
        width: ${props =>
          props.changeWidth ? props.changeWidth + 'px' : WIDTH};
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
            : props.index * -WIDTH + 'px'},
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

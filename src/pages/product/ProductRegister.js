import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { BsFillCameraFill } from 'react-icons/bs';
import { TiDelete } from 'react-icons/ti';

const Register = () => {
  const [selectedImage, setSelectedImage] = useState([]); //업로드한 이미지들을 저장
  const [imageURLs, setImageURLs] = useState([]); //이미지 src를 저장
  const hiddenFileInput = useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  }; //버튼을 눌렀을때 이벤트가 실행되게 함

  useEffect(() => {
    if (selectedImage.length < 1) {
      return;
    }
    if (selectedImage.length > 10) {
      alert('사진을 10개를 초과할 수 없어요');
      setSelectedImage([]);
      setImageURLs([]);
    } else {
      const newImageURLs = [];
      selectedImage.forEach(image =>
        newImageURLs.push(URL.createObjectURL(image))
      );
      setImageURLs(newImageURLs);
    }
  }, [selectedImage, imageURLs]);

  // useEffect(() => {
  //   if (selectedImage.length < 1) {
  //     return;
  //   }
  //   if (selectedImage.length > 10) {
  //     alert('사진을 10개를 초과할 수 없어요');
  //     setSelectedImage([]);
  //     setImageURLs([]);
  //   } else {
  //     selectedImage.forEach(image =>
  //       setImageURLs([...imageURLs, URL.createObjectURL(image)])
  //     );
  //   }
  // }, [selectedImage]);

  const onImageChange = event => {
    setSelectedImage([...event.target.files]);
  }; //파일 업로드

  const deleteImage = src => {
    let imageIndex = imageURLs.indexOf(src);
    selectedImage.splice(imageIndex, 1);
    imageURLs.splice(imageIndex, 1);
    if (imageURLs.length === 1) {
      imageURLs.pop(0);
      selectedImage.pop(0);
    }
  };

  return (
    <div>
      <PhotoLine>
        <PhotoButton onClick={handleClick}>
          <BsFillCameraFill className={'camera'} />
          <PhotoCount>
            <PhotoTotal>{selectedImage.length}</PhotoTotal>
            <PhotoLimit> /10</PhotoLimit>
          </PhotoCount>
          <PhotoInput
            type={'file'}
            ref={hiddenFileInput}
            accept={'image/*'}
            multiple
            onChange={onImageChange}
          />
        </PhotoButton>
        {imageURLs.map(imageSrc => (
          <div className="imageContainer">
            <TiDelete
              className={'photoDiscard'}
              value={imageSrc}
              onClick={() => deleteImage(imageSrc)}
            />
            <img src={imageSrc} className={'eachImage'} />
          </div>
        ))}
      </PhotoLine>
    </div>
  );
};

const PhotoLine = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  width: auto;
  height: 150px;
  border: 1px solid black;
  padding: 2vh;
  margin: 0 1vw 1vw 1vw;

  .imageContainer {
    display: flex;
    align-items: center;
    position: relative;
    width: auto;
    height: 100%;
    margin-left: 2vh;
    aspect-ratio: 1/1;

    .photoDiscard {
      position: absolute;
      right: -2.5vh;
      top: -2.5vh;
      z-index: 10;
      font-size: 5vh;
      cursor: pointer;
    }
  }

  .eachImage {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid red;
  }

  .eachImage:hover {
    cursor: pointer;
  }
`;

const PhotoButton = styled.button`
  display: flex;
  aspect-ratio: 1/1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;

  :hover {
    cursor: pointer;
  }
  .camera {
    display: flex;
    font-size: 200%;
    padding: 5%;
  }
`;

const PhotoCount = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5%;
  font-size: 150%;
`;
const PhotoTotal = styled.p`
  color: #f47804;
`;

const PhotoLimit = styled.p`
  color: lightgray;
`;

const PhotoInput = styled.input`
  display: none;
`;

export default Register;

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { BsFillCameraFill } from 'react-icons/bs';

const Register = () => {
  const [selectedImage, setSelectedImage] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const hiddenFileInput = useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  useEffect(() => {
    if (selectedImage.length < 1) {
      return;
    }
    const newImageURLs = [];
    selectedImage.forEach(image =>
      newImageURLs.push(URL.createObjectURL(image))
    );
    setImageURLs(newImageURLs);
  }, [selectedImage]);

  const onImageChange = event => {
    // const fileUploaded = event.target.files[0];
    // hiddenFileInput.handleFile(fileUploaded);
    setSelectedImage([...event.target.files]);
  }; //파일 업로드

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
            <img src={imageSrc} className={'eachImage'} />
          </div>
        ))}
      </PhotoLine>
    </div>
  );
};

const PhotoLine = styled.div`
  display: flex;
  height: 10vw;
  border: 1px solid black;
  margin-bottom: 2%;

  .imageContainer {
    width: 10vw;
    margin-left: 1%;
    aspect-ratio: 1/1;
    border-radius: 10px;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: auto;
  background-color: white;
  border: 1px solid lightgray;
  margin-left: 1%;
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

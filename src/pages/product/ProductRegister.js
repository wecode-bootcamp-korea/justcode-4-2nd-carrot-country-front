import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { usePrompt } from 'hoc/blocker';
import styled from 'styled-components';
import { BsFillCameraFill } from 'react-icons/bs';
import { TiDelete } from 'react-icons/ti';
import Editor from './Editor';

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState([]); //업로드한 이미지들을 저장
  const [imageURLs, setImageURLs] = useState([]); //이미지 src를 저장
  const [openModal, setOpenModal] = useState(false);
  // const [buttonEnable, setButtonEnable] = useState(false);
  const [productId, setProductId] = useState(0);
  const [modalImageInfo, setModalImageInfo] = useState({
    index: 0,
    imageSrc: '',
  });
  const hiddenFileInput = useRef(null);
  const imageRef = useRef(null);

  usePrompt(
    '변경내용이 저장되지 않습니다. 페이지를 떠나시겠습니까?',
    !Boolean(productId)
  );

  useEffect(() => {
    if (Boolean(productId)) {
      goToDetail();
    }
  }, [productId]);

  const goToDetail = () => {
    navigate(`/product/detail`, { state: { productId: productId } });
  };

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  const handleClick = event => {
    hiddenFileInput.current.click();
  }; //버튼을 눌렀을때 이벤트가 실행되게 함

  useEffect(() => {
    if (selectedImage.length === 0) {
      return;
    }
    if (selectedImage.length > 10) {
      alert('사진을 10개를 초과할 수 없어요');
      setSelectedImage([]);
      setImageURLs([]);
      return;
    }
  }, [selectedImage]);

  useEffect(() => {
    const newImageURLs = [];
    selectedImage.forEach(image =>
      newImageURLs.push(URL.createObjectURL(image))
    );
    setImageURLs(newImageURLs);
  }, [selectedImage]);

  const onImageChange = event => {
    setSelectedImage([...event.target.files]);
  }; //파일 업로드

  const deleteImage = src => {
    if (imageURLs.length === 0) {
      return;
    } else {
      const imageIndex = imageURLs.indexOf(src);
      setSelectedImage(prev => {
        const arr = [...prev];
        arr.splice(imageIndex, 1);
        return arr;
      });

      setImageURLs(prev => {
        const arr = [...prev];
        arr.splice(imageIndex, 1);
        return arr;
      });
    }
  };

  // const openImage = e => {
  //   setModalImageInfo({
  //     index: e.target.value.index + 1,
  //     imageSrc: e.target.value,
  //   });
  //   setOpenModal(true);
  // };

  return (
    <WholeWrapper>
      <RegisterWrapper>
        <PhotoLine>
          <PhotoForm
            onClick={handleClick}
            action="/profile"
            method="post"
            encType="multipart/form-data"
          >
            <BsFillCameraFill className="camera" />
            <PhotoCount>
              <PhotoTotal>{selectedImage.length}</PhotoTotal>
              <PhotoLimit> /10</PhotoLimit>
            </PhotoCount>
            <PhotoInput
              type="file"
              ref={hiddenFileInput}
              name={'images/*'}
              accept={'image/*'}
              multiple
              onChange={e => {
                onImageChange(e);
              }}
              required
            />
          </PhotoForm>
          {imageURLs.map((imageSrc, index) => (
            <div key={index} className="imageContainer">
              <TiDelete
                className="photoDiscard"
                value={imageSrc}
                onClick={() => deleteImage(imageSrc)}
              />
              <img
                src={imageSrc}
                alt="selectedimage"
                className="eachImage"
                value={imageSrc}
                ref={imageRef}
                onClick={() => setOpenModal(true)}
              />
            </div>
          ))}
        </PhotoLine>

        <PhotoModal onClick={() => setOpenModal(false)} open={openModal}>
          <ModalPhotoLine>
            <TiDelete
              className="modalTurnOff"
              onClick={() => setOpenModal(false)}
            />
            {imageURLs.map((imageSrc, index) => (
              <ModalImageContainer key={index}>
                <img
                  alt="productimage"
                  src={imageSrc}
                  className="modalEachImage"
                />
              </ModalImageContainer>
            ))}
          </ModalPhotoLine>
        </PhotoModal>
        <Editor selectedImage={selectedImage} setProductId={setProductId} />
      </RegisterWrapper>
    </WholeWrapper>
  );
};

//styled-components 시작

const WholeWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
  /* max-width: 1024px; */
  @media (max-width: 1024px) {
    padding: 0px 15px;
  }
  @media (min-width: 891px) {
    width: 677px;
    margin: 0px auto;
  }
`;
const RegisterWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  width: 677px;
  padding: 80px 0;
`;

const PhotoLine = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  width: auto;
  padding-top: 20px;
  //스마트폰
  @media (max-width: 690px) {
    height: 100px;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    width: 677px;
    height: 140px;
    margin: 0px auto;
  }
  // 모니터
  @media (min-width: 891px) {
    width: 677px;
    height: 150px;
    margin: 0px auto;
  }

  .imageContainer {
    display: flex;
    align-items: center;
    position: relative;
    width: auto;
    height: 100%;
    margin-left: 16px;
    aspect-ratio: 1/1;

    .photoDiscard {
      position: absolute;
      right: -17px;
      top: -17px;
      z-index: 10;
      font-size: 40px;
      cursor: pointer;
    }
  }

  .eachImage {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 10px;
  }

  .eachImage:hover {
    cursor: pointer;
  }
`;

const PhotoForm = styled.form`
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

const PhotoModal = styled.div`
  display: ${props => (props.open === true ? 'flex' : 'none')};
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  z-index: 20;
`;

const ModalPhotoLine = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  overflow-x: auto;
  height: 80%;

  .modalPhotoDiscard {
    position: fixed;
    z-index: 21;
    font-size: 100vh;
    color: white;
    cursor: pointer;
  }
`;

const ModalImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  aspect-ratio: 1/1;
  width: 70%;
  height: auto;
  /* object-position: center; */
  background-color: black;

  .modalEachImage {
    display: flex;
    max-width: 100%;
    max-height: 100%;
    object-fit: fill;
  }
`;

export default Register;

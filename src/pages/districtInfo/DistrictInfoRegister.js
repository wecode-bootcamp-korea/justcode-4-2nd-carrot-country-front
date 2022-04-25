import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePrompt } from 'blocker';
import {
  Wrapper,
  PhotoLine,
  PhotoButton,
  PhotoCount,
  PhotoTotal,
  PhotoLimit,
  PhotoInput,
  ButtonWrapper,
  SubmitButton,
} from './DistrictInfoRegisterStyled';
import Editor from 'pages/districtInfo/Editor';
import WGButton from 'components/buttons/LeavePageButton';
import { BsFillCameraFill } from 'react-icons/bs';
import { TiDelete } from 'react-icons/ti';

function DistrictInfoRegister() {
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [selectedImage, setSelectedImage] = useState([]); //업로드한 이미지들을 저장
  const [imageURLs, setImageURLs] = useState([]); //이미지 src를 저장
  const [openModal, setOpenModal] = useState(false);
  const hiddenFileInput = useRef(null);
  const imageRef = useRef(null);

  usePrompt('변경내용이 저장되지 않습니다. 페이지를 떠나시겠습니까?', true);

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  const onPhotoButtonClick = () => {
    hiddenFileInput.current.click();
  };
  const onImageChange = event => {
    setSelectedImage([...event.target.files]);
  };
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

  const onSubmit = () => {
    text.ops && console.log(text.ops[0].insert, title);
  };

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

  return (
    <Wrapper>
      <Editor setTitle={setTitle} setText={setText} />
      <PhotoLine>
        <PhotoButton onClick={onPhotoButtonClick}>
          <BsFillCameraFill className="camera" />
          <PhotoCount>
            <PhotoTotal>{selectedImage.length}</PhotoTotal>
            <PhotoLimit> /10</PhotoLimit>
          </PhotoCount>
          <PhotoInput
            type="file"
            ref={hiddenFileInput}
            accept={'image/*'}
            multiple
            onChange={e => {
              onImageChange(e);
            }}
            required
          />
        </PhotoButton>
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
              // onClick={() =>
              //   console.log('imageSrc: ', imageSrc, 'key: ', index)
              // }
            />
          </div>
        ))}
      </PhotoLine>
      <ButtonWrapper>
        <SubmitButton onClick={onSubmit}>완료</SubmitButton>
        <WGButton content="취소" />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default DistrictInfoRegister;

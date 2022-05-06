import { useState, useEffect, useRef } from 'react';

import {
  Wrapper,
  PhotoLine,
  PhotoButton,
  PhotoCount,
  PhotoTotal,
  PhotoLimit,
  PhotoInput,
} from './DistrictInfoRegisterStyled';
import Editor from 'pages/districtInfo/Editor';
import { BsFillCameraFill } from 'react-icons/bs';
import { TiDelete } from 'react-icons/ti';

function DistrictInfoRegister() {
  const [selectedImage, setSelectedImage] = useState([]); //업로드한 이미지들을 저장
  const [imageURLs, setImageURLs] = useState([]); //이미지 src를 저장
  const [openModal, setOpenModal] = useState(false);

  const hiddenFileInput = useRef(null);
  const imageRef = useRef(null);

  const onPhotoButtonClick = () => {
    hiddenFileInput.current.click();
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

  return (
    <Wrapper>
      <div className="imageTextWrapper">
        <p>이미지 등록하기 (선택)</p>
      </div>
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
            name={'images/*'}
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
              //
            />
          </div>
        ))}
      </PhotoLine>
      <Editor selectedImage={selectedImage} />
    </Wrapper>
  );
}

export default DistrictInfoRegister;

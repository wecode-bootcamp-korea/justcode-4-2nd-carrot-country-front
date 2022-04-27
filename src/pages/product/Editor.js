import { useRef, useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';

import { type } from '@testing-library/user-event/dist/type';
import { postProduct, postImage } from 'apis/product';
import { SERVER_PORT } from 'config';
import { UserContext } from 'context/context';
// import {
//   ProductContext,
//   ProductDispatchContext,
// } from './ProductRegisterContext';
// import Responsive from '../common/Responsive';

const Editor = props => {
  //게시글 내용
  const user = useContext(UserContext);
  const quillElement = useRef(null); //quill div ref
  const quillInstance = useRef(null); //quill 생성용
  const categorySelection = useRef(null);
  const selectBox = useRef(null);
  const [buttonEnable, setButtonEnable] = useState(false); //버튼 활성화
  const [priceInput, setPriceInput] = useState(false); //₩ 색 변경위한 state
  const [allContents, setAllContents] = useState({
    title: '',
    categoryId: NaN,
    cityId: NaN,
    districtId: NaN,
    userId: NaN,
    price: '0',
    description: '',
  }); //게시글 정보 묶어서 저장

  // 카테고리 받아와서 넘기기 위한 State
  const [category, setCategory] = useState({
    categories: [
      {
        id: 0,
        categoryName: '',
      },
    ],
  });

  useEffect(() => {
    fetch(`${SERVER_PORT}/categories`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCategory(data);
      });
  }, []);
  // useEffect(() => {
  //   setAllContents({
  //     ...allContents,
  //     cityId: user.city.id,
  //     districtId: user.district.id,
  //     userId: user.id,
  //   });
  // }, []);

  //이미지 url 폼데이터로 변환 하는 함수
  const handleURLs = () => {
    console.log('images', props.selectedImage);
    const formData = new FormData();
    for (let i = 0; i < props.selectedImage.length; i++) {
      formData.append('images', props.selectedImage[i]);
    }
    for (let value of formData.values()) {
      console.log(value);
    }
    return formData;
  };

  //가격정보 저장과 원 이모티콘 색 변환을 위한 불리언 값  저ㅇ
  const onPriceChange = e => {
    if (e.target.value.length > 9) {
      e.target.value = 999999999;
    }
    setAllContents({ ...allContents, price: e.target.value });
    setPriceInput(true);
  };
  //제목 저장
  const onChangeTitle = e => {
    setAllContents({
      ...allContents,
      title: e.target.value,
    });
  };
  //선택된 카테고리 저장
  const onCategorySelect = e => {
    setAllContents({ ...allContents, categoryId: e.target.value });
  };

  //게시글 내용을 저장하는 함수
  const handleSubmit = () => {
    setAllContents({
      ...allContents,
      cityId: user.city.id,
      districtId: user.district.id,
      userId: user.id,
    });
    const descriptionText = quillElement.current.innerText;
    console.log(allContents);
    return { ...allContents, description: descriptionText };
  };

  const onCategoryNotSelected = () => {
    categorySelection.current.focus();
  };

  //완료 버튼 클릭시 인풋 값 확인 후 전송
  const onButtonClick = async () => {
    const sendableResult = handleSubmit();
    const imageResult = handleURLs();
    if (sendableResult.description.length < 5) {
      alert('내용을 5자 이상 등록해주세요');
      return;
    }
    if (sendableResult.title.length < 1) {
      alert('제목을 더 입력해주세요');
      return;
    }
    if (!sendableResult.categoryId || sendableResult.categoryId == '0') {
      onCategoryNotSelected();
      alert('카테고리를 선택해주세요');
      return;
    }
    if (props.selectedImage.length < 1) {
      alert('사진을 등록해주세요');
      return;
    } else {
      postProduct(sendableResult, imageResult);
    }
  };

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      //추후에 props 받아와서 동네이름 수정해야함
      placeholder: `${user.city.cityName}시 ${user.district.districtName}에 올릴 게시글 내용을 작성해주세요. (가품 및 판매금지품목은 게시가 제한될 수 있어요.)`,
    });
  }, [user]);

  return user.id ? (
    <EditorBlock>
      <TitleInput placeholder=" 글 제목" onChange={e => onChangeTitle(e)} />
      <PriceAndCategoryWrapper>
        <PriceWrapper>
          <Won priceValid={priceInput}>₩</Won>
          <PriceInput
            type="number"
            placeholder=" 가격 (선택사항)"
            onChange={e => onPriceChange(e)}
            max="999999999"
          />
        </PriceWrapper>
        <CatergoryWrapper onChange={e => e.target.blur()}>
          <CategorySelect
            ref={selectBox}
            required
            id="categories"
            name="categories"
            placeholder="카테고리"
            onChange={e => onCategorySelect(e)}
          >
            <PlaceHolder value="0" ref={categorySelection}>
              카테고리 선택
            </PlaceHolder>
            {category.categories.map(props => (
              <DropDown key={props.id} value={props.id}>
                {props.categoryName}
              </DropDown>
            ))}
          </CategorySelect>
        </CatergoryWrapper>
      </PriceAndCategoryWrapper>
      <EditorWrapper>
        <QuillWrapper>
          <div ref={quillElement} />
        </QuillWrapper>
      </EditorWrapper>
      <ButtonWrapper>
        <SubmitButton
          button={buttonEnable}
          // onClick={buttonEnable ? () => handleSubmit() : null}
          onClick={() => onButtonClick()}
        >
          완료
        </SubmitButton>
      </ButtonWrapper>
    </EditorBlock>
  ) : null;
};

const EditorWrapper = styled.div`
  /* display: flex;
  justify-content: center;
  overflow: auto; */
`;
const EditorBlock = styled.div`
  display: flex;
  flex-direction: column;
  /* @media (max-width: 1024px) {
    padding: 0px 15px;
  }
  @media (min-width: 891px) {
    width: 677px;
    margin: 0px auto;
  } */
  @media (max-width: 690px) {
    width: 500px;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    width: 677px;
    margin: 0px auto;
  }
  // 모니터
  @media (min-width: 891px) {
    padding: 0px 15px;
  }
`;

const TitleInput = styled.input`
  font-size: 25px;
  outline: none;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid #f37802;
  margin: 20px 0;
  width: 100%;
`;

const PriceAndCategoryWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: flex-start;
  align-items: center;
`;

const PriceWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 41px;
  margin-right: 10px;
  border-bottom: 1px solid #f37802;
`;

const Won = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding-left: 10px;
  color: ${props => (props.priceValid === true ? '#F37802' : '#757575')};
`;

const PriceInput = styled.input`
  display: flex;
  font-size: 20px;
  outline: none;
  padding-bottom: 2px;
  border: none;
  width: 100%;

  &&::-webkit-outer-spin-button,
  &&::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const CatergoryWrapper = styled.div`
  display: flex;
  width: 50%;
  margin-left: 10px;
  border-bottom: 1px solid #f37802;
`;

const CategorySelect = styled.select`
  display: flex;
  align-items: center;
  width: 170px;
  height: 40px;
  padding: 0;
  border: none;
  font-size: 20px;
  border-radius: 3px;
`;

const PlaceHolder = styled.option`
  color: gray;
`;
const DropDown = styled.option`
  display: flex;
  flex-direction: row;
  font-size: 15px;
`;

const QuillWrapper = styled.div`
  margin: 20px 10px 0 10px;
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 20px;
    line-height: 1.5;
  }

  .ql-editor.ql-blanck::before {
    left: 0px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px;
`;

const SubmitButton = styled.button`
  display: flex;
  width: 90px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border: none;
  color: white;
  background-color: #f37802;
  border-radius: 5px;

  :hover {
    cursor: ${props => (props.button ? 'cursor' : null)};
  }
`;

export default Editor;

import { useRef, useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
// import Responsive from '../common/Responsive';

const Editor = () => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);
  // const quillPriceElement = useRef(null);
  // const quillPriceInstance = useRef(null);
  const selectBox = useRef(null);
  const [priceInput, setPriceInput] = useState(false);
  const [category, setCategory] = useState({
    categories: [
      {
        id: 0,
        categoryName: '',
      },
    ],
  });

  const inputValue = e => {
    if (e.target.value.length !== 0) {
      setPriceInput(true);
    } else setPriceInput(false);
  };

  useEffect(() => {
    fetch('/data/categoriesMockData.json')
      .then(res => res.json())
      .then(data => {
        setCategory(data);
      });
  }, []);

  console.log(category);
  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      //추후에 props 받아와서 동네이름 수정해야함
      placeholder: `봉래동2가에 올릴 게시글 내용을 작성해주세요. (가품 및 판매금지품목은 게시가 제한될 수 있어요.)`,
      //   modules: {
      //     toolbar: [
      //       [{ header: '1' }, { header: '2' }],
      //       ['bold', 'italic', 'underline', 'strike'],
      //       [{ list: 'ordered' }, { list: 'bullet' }],
      //       ['blockquote', 'link'],
      //     ],
      //   },
    });
  }, []);

  //   useEffect(() => {
  //     quillPriceInstance.current = new Quill(quillPriceElement.current, {
  //       placeholder: `봉래동2가에 올릴 게시글 내용을 작성해주세요.(가품 및 판매금지품목은 게시가 제한될 수 있어요.)`,
  //     });
  //   }, []);

  return (
    <EditorBlock>
      <TitleInput placeholder=" 글 제목" />
      <PriceAndCategoryWrapper>
        <PriceWrapper>
          <Won priceValid={priceInput}>₩</Won>
          <PriceInput
            type="number"
            placeholder=" 가격 (선택사항)"
            onChange={e => inputValue(e)}
          />
        </PriceWrapper>
        <CatergoryWrapper onChange={e => e.target.blur()}>
          <CategorySelect
            ref={selectBox}
            required
            id="categories"
            name="categories"
            placeholder="카테고리"
          >
            <PlaceHolder value="" disabled selected>
              카테고리 선택
            </PlaceHolder>
            {category.categories.map(props => (
              <DropDown key={props.id} value={props.categoryName}>
                {props.categoryName}
              </DropDown>
            ))}
          </CategorySelect>
        </CatergoryWrapper>
      </PriceAndCategoryWrapper>
      {/* <QuillPriceAndCategoryWrapper>
        <div ref={quillPriceElement} />
      </QuillPriceAndCategoryWrapper> */}
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

const EditorBlock = styled.div``;

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
  width: 50%;

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
  width: 200px;
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

export default Editor;

import { useRef, useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
import AreaTag from 'components/list/AreaTag';
import { postDistrict } from 'apis/district';
import { UserContext } from 'context/context';
import LeavePageButton from 'components/buttons/LeavePageButton';
import theme from 'styles/theme';

const Editor = props => {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const quillElement = useRef(null);
  const quillInstance = useRef(null);
  const [allContents, setAllContents] = useState({
    title: '',
    content: '',
  }); //게시글 정보 묶어서 저장

  const { selectedImage, districtInfoId, setdistrictInfoId } = props;

  const goToDetail = () => {
    navigate(`/district-info/detail`, {
      state: { districtInfoId: districtInfoId },
      replace: true,
    });
  };

  const onHandleURLs = () => {
    const formData = new FormData();
    for (let i = 0; i < selectedImage.length; i++) {
      formData.append('images', selectedImage[i]);
    }
    return formData;
  };
  const onChangeTitle = e => {
    setAllContents({
      ...allContents,
      title: e.target.value,
    });
  };
  const onHandleSubmit = () => {
    setAllContents({
      ...allContents,
    });
    const contentText = quillElement.current.innerText;
    return { ...allContents, content: contentText };
  };

  const onButtonClick = async () => {
    const sendableResult = onHandleSubmit();
    const imageResult = onHandleURLs();
    if (sendableResult.content.length < 5) {
      alert('내용을 5자 이상 등록해주세요');
      return;
    }
    if (sendableResult.title.length < 1) {
      alert('제목을 더 입력해주세요');
      return;
    } else {
      postDistrict(sendableResult, imageResult).then(data =>
        setdistrictInfoId(data.infoId)
      );
      Boolean(districtInfoId) && goToDetail();
    }
  };

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      placeholder: `${user.city.cityName} ${user.district.districtName}에 올릴 게시글 내용을 작성해주세요. (부적절한 내용을 담은 게시글은 삭제됩니다.)`,
    });
  }, [user]);

  return (
    <EditorBlock>
      <HeadRWrapper>
        <TitleInput placeholder=" 글 제목" onBlur={e => onChangeTitle(e)} />
        <div className="userName">
          <p>{user.nickname} •</p>
        </div>
        <AreaTag
          city={user.city.cityName}
          district={user.district.districtName}
        />
      </HeadRWrapper>
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={() => onButtonClick()}>완료</SubmitButton>
        <LeavePageButton content="취소" />
      </ButtonWrapper>
    </EditorBlock>
  );
};

const EditorBlock = styled.div`
  margin: auto;
  padding: 20px 10px;
  max-width: 1024px;
`;

const HeadRWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid ${theme.signColor};

  * {
    margin: 0;
    width: max-content;
  }

  div {
    padding: 0 20px 0 0;
  }

  .userName {
    padding-right: 0px;
    padding-bottom: 8px;
    p {
      color: ${theme.signColor};
      font-size: 18px;
    }
  }
`;

const TitleInput = styled.input`
  font-size: 25px;
  outline: none;
  padding-bottom: 8px;
  border: none;
  margin: 20px 0;
  width: 100%;
`;

const QuillWrapper = styled.div`
  margin: 20px 10px 0 10px;
  border-bottom: 1px solid ${theme.signColor};
  height: 350px;
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
  justify-content: flex-end;
  margin: auto;
  padding: 25px;
  max-width: 1024px;
`;

const SubmitButton = styled.button`
  display: flex;
  width: 90px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-right: 10px;
  border: none;
  color: white;
  background-color: ${theme.signColor};
  border-radius: 5px;

  :hover {
    cursor: pointer;
  }
`;

export default Editor;

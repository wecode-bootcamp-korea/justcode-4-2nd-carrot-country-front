import { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
import AreaTag from 'components/list/AreaTag';
import theme from 'styles/theme';

const Editor = ({ setTitle, setText }) => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

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

  useEffect(() => {
    if (quillElement.current) {
      setText(quillInstance.current.getContents());
    }
  });

  const putTitle = e => {
    setTitle(e.target.value);
  };

  return (
    <EditorBlock>
      <HeadRWrapper>
        <TitleInput placeholder=" 글 제목" onBlur={e => putTitle(e)} />
        <AreaTag city={'서울'} district={'봉래동2가'} />
      </HeadRWrapper>
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

const EditorBlock = styled.div`
  margin: auto;
  padding: 0 10px;
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

export default Editor;

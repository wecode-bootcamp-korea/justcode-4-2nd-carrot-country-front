import { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
// import Responsive from '../common/Responsive';

const Editor = () => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      placeholder: '내용을 작성하세요...',
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

  return (
    <EditorBlock>
      <TitleInput placeholder="제목을 입력하세요" />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

const EditorBlock = styled.div`
  padding: 5rem 5rem;
`;

const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid gray;
  margin-bottom: 2rem;
  width: 100%;
`;

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }

  .ql-editor.ql-blanck::before {
    left: 0px;
  }
`;

export default Editor;

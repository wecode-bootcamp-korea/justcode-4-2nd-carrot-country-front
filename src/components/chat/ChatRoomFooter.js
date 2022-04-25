import React, { useState } from 'react';

import { handleNewText } from 'apis/socket';

import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

const user = {
  id: 2,
};

function ChatRoomFooter(props) {
  const { roomId, chats, setChats } = props;
  const [useText, setUseText] = useState('');

  const handleEnterKey = e => {
    const { keyCode } = e;
    if (keyCode === 13) {
      handleSubmit();
    }
  };

  const handleText = e => {
    const { value } = e.target;
    setUseText(value);
  };

  const handleSubmit = () => {
    if (useText !== '') {
      handleNewText(user.id, roomId, useText, handleCallback);
      setUseText('');
    }
  };

  const handleCallback = params => {
    setChats([...chats, params]);
  };

  return (
    <MainWrapper>
      <input
        className="chatInput"
        value={useText}
        onChange={handleText}
        onKeyDown={handleEnterKey}
      />
      <BsFillArrowUpCircleFill
        className="submitBtn"
        size={24}
        onClick={handleSubmit}
      />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid;
  .chatInput {
    flex: 1;
    padding: 10px;
    border: 0;
    :focus {
      outline: none;
    }
  }
  .submitBtn {
    margin: 10px;
    color: ${props => props.theme.signColor};
  }
`;

export default ChatRoomFooter;

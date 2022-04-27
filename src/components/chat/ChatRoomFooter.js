import React, { useState, useContext } from 'react';

import { handleNewText } from 'apis/socket';
import { UserContext } from 'context/context';

import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

function ChatRoomFooter(props) {
  const user = useContext(UserContext);
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
    params.isMyChat = true;
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
  border: 1px solid black;
  border-radius: 0.3em;
  margin-left: 15px;
  width: 95%;
  height: 100px;
  background-color: white;

  .chatInput {
    flex: 1;
    align-self: flex-start;
    padding: 10px;
    border: 0;
    border-radius: 0.3em;
    font-size: 15px;
    :focus {
      outline: none;
    }
  }
  .submitBtn {
    align-self: flex-end;
    margin: 10px;
    color: ${props => props.theme.signColor};
  }
`;

export default ChatRoomFooter;

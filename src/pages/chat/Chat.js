// modules
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
// components
import ChatList from 'components/chat/ChatList';
import ChatRoom from 'components/chat/ChatRoom';
// styles
import styled from 'styled-components';

function Chat() {
  const location = useLocation();
  const roomId = location.state?.roomId;
  const [useRoomId, setUseRoomId] = useState(roomId ? roomId : null);
  return (
    <MainWrapper>
      <section className="chatContainer" id="chatListWrapper">
        <ChatList useRoomId={useRoomId} setUseRoomId={setUseRoomId} />
      </section>
      <section className="chatContainer" id="chatRoomWrapper">
        <ChatRoom useRoomId={useRoomId} setUseRoomId={setUseRoomId} />
      </section>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  @media (max-width: 890px) {
    #chatListWrapper {
      display: none;
    }
    #chatRoomWrapper {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
  @media (min-width: 891px) and (max-width: 1024px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media (min-width: 1025px) {
    width: 1005px;
    margin: 0px auto;
  }
  display: flex;
  height: 100vh;
  padding-bottom: 10px;
  padding-top: 70px;
  .chatContainer {
    flex: 1;
  }
  #chatListWrapper {
    border: 1px solid red;
  }
  #chatRoomWrapper {
    border: 1px solid blue;
  }
`;
export default Chat;

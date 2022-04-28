// modules
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// components
import ChatList from 'components/chat/ChatList';
import ChatRoom from 'components/chat/ChatRoom';
// styles
import styled from 'styled-components';
import { socket } from 'apis/socket';

function Chat() {
  const location = useLocation();
  const roomId = location.state?.roomId;

  const [useRoomId, setUseRoomId] = useState(roomId ? roomId : null);
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    if (roomId) {
      socket.emit('enter_room', roomId, () => {});
    }
  }, [roomId]);

  return (
    <MainWrapper>
      <section className="chatContainer" id="chatListWrapper">
        <ChatList
          useRoomId={useRoomId}
          setUseRoomId={setUseRoomId}
          forceUpdate={forceUpdate}
        />
      </section>
      <section className="chatContainer" id="chatRoomWrapper">
        <ChatRoom
          useRoomId={useRoomId}
          setUseRoomId={setUseRoomId}
          forceUpdate={forceUpdate}
          setForceUpdate={setForceUpdate}
        />
      </section>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  #chatRoomWrapper {
    position: relative;
  }
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
  #chatListWrapper {
    flex: 1.2;
  }
  #chatRoomWrapper {
    flex: 1.8;
  }
`;

export default Chat;

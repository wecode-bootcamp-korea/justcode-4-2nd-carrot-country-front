import React, { useEffect, useState } from 'react';
import { SERVER_PORT } from 'config';

import { socket } from 'apis/socket';

import ChatRoomContent from './ChatRoomContent';
import ChatRoomFooter from './ChatRoomFooter';

import styled from 'styled-components';
import { getChats } from 'apis/chat';

function ChatRoomDelay(props) {
  const { useRoomId } = props;

  return useRoomId ? <ChatRoom roomId={useRoomId} /> : <NotFoundRoom />;
}

function ChatRoom(props) {
  const { roomId } = props;
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (roomId) {
      getChats(roomId).then(data => setChats(data.chats));
    }
  }, [roomId]);

  useEffect(() => {
    socket.on('new_text', params => {
      setChats([...chats, params]);
    });
  }, [chats]);

  return (
    <MainWrapper>
      <ChatRoomContent roomId={roomId} chats={chats} setChats={setChats} />
      <ChatRoomFooter roomId={roomId} chats={chats} setChats={setChats} />
    </MainWrapper>
  );
}

function NotFoundRoom() {
  return <div>채팅할 상대를 선택해주세요</div>;
}

const MainWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default ChatRoomDelay;

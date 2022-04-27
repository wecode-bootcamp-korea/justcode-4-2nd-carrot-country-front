import React, { useEffect, useState } from 'react';

import { socket } from 'apis/socket';

import ChatRoomContent from './ChatRoomContent';
import ChatRoomFooter from './ChatRoomFooter';

import styled from 'styled-components';

import { getChats } from 'apis/chat';

import { BiMessageSquareDots } from 'react-icons/bi';

function ChatRoomDelay(props) {
  const { useRoomId, roomInfo } = props;

  return useRoomId ? (
    <ChatRoom roomId={useRoomId} roomInfo={roomInfo} />
  ) : (
    <NotFoundRoom />
  );
}

function ChatRoom(props) {
  const { roomId, roomInfo } = props;
  const [chats, setChats] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (roomId) {
      getChats(roomId).then(data => {
        console.log('DATA >> ', data);
        setChats(data.chats);
        setProduct(data.product);
      });
    }
  }, [roomId]);
  console.log('chat >> ', chats);
  console.log('product >> ', product);

  useEffect(() => {
    socket.on('new_text', params => {
      params.isMyChat = false;
      setChats([...chats, params]);
    });
  }, [chats]);

  return (
    <MainWrapper>
      <ChatRoomContent
        roomId={roomId}
        chats={chats}
        setChats={setChats}
        product={product}
        roomInfo={roomInfo}
      />
      <ChatRoomFooter roomId={roomId} chats={chats} setChats={setChats} />
    </MainWrapper>
  );
}

function NotFoundRoom() {
  return (
    <NotFoundRoomWrapper>
      <IconWrapper>
        <BiMessageSquareDots />
      </IconWrapper>
      <p>채팅할 상대를 선택해주세요</p>
    </NotFoundRoomWrapper>
  );
}

const MainWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const NotFoundRoomWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  color: gray;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const IconWrapper = styled.div`
  margin-bottom: 10px;
  color: silver;
  font-size: 8vw;
`;

export default ChatRoomDelay;

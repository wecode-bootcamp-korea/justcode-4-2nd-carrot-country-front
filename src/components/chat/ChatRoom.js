import React, { useEffect, useState } from 'react';

import { socket } from 'apis/socket';

import ChatRoomContent from './ChatRoomContent';
import ChatRoomFooter from './ChatRoomFooter';

import styled from 'styled-components';

import { getChats } from 'apis/chat';

import { BiMessageSquareDots } from 'react-icons/bi';

function ChatRoomDelay(props) {
  const { useRoomId } = props;

  return useRoomId ? <ChatRoom {...props} /> : <NotFoundRoom />;
}

function ChatRoom(props) {
  const { useRoomId, roomInfo, forceUpdate, setForceUpdate } = props;
  const [chats, setChats] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (useRoomId) {
      getChats(useRoomId).then(data => {
        setChats(data.chats);
        setProduct(data.product);
      });
    }
  }, [useRoomId]);

  useEffect(() => {
    socket.on('new_text', params => {
      setChats([...chats, params]);
    });
  }, [chats]);

  const handleCallback = params => {
    setChats([...chats, params]);
    setForceUpdate(!forceUpdate);
  };

  return (
    <MainWrapper>
      <ChatRoomContent
        roomId={useRoomId}
        chats={chats}
        setChats={setChats}
        product={product}
        roomInfo={roomInfo}
      />
      <ChatRoomFooter roomId={useRoomId} handleCallback={handleCallback} />
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
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const NotFoundRoomWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
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

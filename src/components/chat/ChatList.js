import { SERVER_PORT } from 'config';
import React, { useEffect, useState } from 'react';
import { handleEnterRoom } from 'apis/socket';
import styled from 'styled-components';

const user = { id: 1 };

function ChatListDelay(props) {
  const { useRoomId, setUseRoomId } = props;
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(`${SERVER_PORT}/chats?userId=${user.id}`)
      .then(res => res.json())
      .then(data => setRooms(data.rooms));
  }, []);

  return rooms.length > 0 ? (
    <ChatList useRoomId={useRoomId} setUseRoomId={setUseRoomId} rooms={rooms} />
  ) : (
    <NotFoundRooms />
  );
}

function ChatList(props) {
  const { rooms, setUseRoomId } = props;

  const handleCallback = roomId => {
    setUseRoomId(roomId);
  };
  return (
    <MainWrapper>
      {rooms.map(room => {
        return (
          <div
            className="roomWrapper"
            key={room.id}
            onClick={() => {
              handleEnterRoom(room.id, handleCallback);
            }}
          >
            <span>{room.buyer.nickname}</span>
          </div>
        );
      })}
    </MainWrapper>
  );
}

function NotFoundRooms() {
  return <div>대화방이 없습니다.</div>;
}
const MainWrapper = styled.div`
  height: 100%;
  overflow: scroll;
  .roomWrapper {
    padding: 10px;
  }
`;

export default ChatListDelay;

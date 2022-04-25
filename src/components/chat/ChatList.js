import React, { useEffect, useState } from 'react';
import { handleEnterRoom } from 'apis/socket';
import { getChatRooms } from 'apis/chat';
// import UserProfile from 'components/profile/UserProfile';

import styled from 'styled-components';

const user = { id: 2 };

function ChatListDelay(props) {
  const { useRoomId, setUseRoomId } = props;
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getChatRooms(user.id).then(data => setRooms(data.rooms));
  }, []);

  return rooms && rooms.length > 0 ? (
    <ChatList useRoomId={useRoomId} setUseRoomId={setUseRoomId} rooms={rooms} />
  ) : (
    <NotFoundRooms />
  );
}

function ChatList(props) {
  const { rooms, setUseRoomId } = props;
  const { product } = props;

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
            {/* <UserProfile className="userImage" user={product.user} /> */}
            <span className="buyerNickname">{room.buyer.nickname}</span>
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
    padding: 25px;
    border: 1px solid #efeff0;
    cursor: pointer;
  }
  .buyerNickname {
    color: gray;
  }
  /* .userImage {
    width: 20px;
    background-color: aliceblue;
  } */
`;

// const Scroll = styled.nav`
//   display: flex;
//   overflow: auto;
//   height: 45px;
//   &::-webkit-scrollbar {
//     width: 8px;
//     height: 8px;
//     border-radius: 6px;
//     background: rgba(255, 255, 255, 0.4);
//   }
//   &::-webkit-scrollbar-thumb {
//     background: rgba(0, 0, 0, 0.3);
//     border-radius: 6px;
//   }
// `;
export default ChatListDelay;

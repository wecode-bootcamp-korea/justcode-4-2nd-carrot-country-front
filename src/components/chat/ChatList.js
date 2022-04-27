import React, { useContext, useEffect, useState } from 'react';
import { handleEnterRoom } from 'apis/socket';
import { getChatRooms } from 'apis/chat';
import { UserContext } from 'context/context';
import { SERVER_PORT, CLIENT_PORT } from 'config';

import { ImList } from 'react-icons/im';
import styled from 'styled-components';
import moment from 'moment';

function ChatListDelay(props) {
  const { useRoomId, setUseRoomId } = props;
  const [rooms, setRooms] = useState([]);
  const myInfo = useContext(UserContext);

  useEffect(() => {
    getChatRooms(myInfo.id).then(data => setRooms(data.rooms));
  }, [myInfo]);

  return (
    <MainWrapper>
      <ChatProfile>
        <img
          src={`${CLIENT_PORT}/images/profile/userImageNotFound.png`}
          alt="userImage"
        />
        <h1>{myInfo.nickname}</h1>
      </ChatProfile>
      {rooms && rooms.length > 0 ? (
        <ChatList
          myInfo={myInfo}
          useRoomId={useRoomId}
          setUseRoomId={setUseRoomId}
          rooms={rooms}
        />
      ) : (
        <NotFoundRooms />
      )}
    </MainWrapper>
  );
}

function ChatList(props) {
  const { myInfo, rooms, useRoomId, setUseRoomId } = props;
  const handleCallback = roomId => {
    setUseRoomId(roomId);
  };

  return (
    <ChatRoomWrapper>
      {rooms.map(room => {
        const otherUser =
          myInfo.id === room.buyer.id
            ? room.product.user.nickname
            : room.buyer.nickname;
        const otherUserDistrict =
          myInfo.id === room.buyer.id
            ? room.product.user.district.districtName
            : myInfo.district.districtName;
        const lastTime = room.lastVisitAt ? room.lastVisitAt : room.createdAt;

        const isEnter = useRoomId === room.id;

        return (
          <ItemWrapper
            isEnter={isEnter}
            key={room.id}
            onClick={() => {
              handleEnterRoom(room.id, handleCallback);
            }}
          >
            <div className="userImage">
              <img
                src={`${CLIENT_PORT}/images/profile/userImageNotFound.png`}
                alt="userImage"
              />
            </div>
            <div className="userMiddle">
              <div className="userInfo">
                <span>{otherUser}</span>
                <span>{otherUserDistrict}</span>
                <span>{moment(lastTime).format('HH:mm')}</span>
              </div>
              <p className="lastChat">{room.chat[0]?.text}</p>
            </div>
            <div className="productImage">
              <img
                src={`${SERVER_PORT}/${room.product.productImage[0].imageUrl}`}
                alt="productImage"
              />
            </div>
          </ItemWrapper>
        );
      })}
    </ChatRoomWrapper>
  );
}

function NotFoundRooms() {
  return (
    <NotFoundWrapper>
      <ImList size={60} color="silver" />
      <p>대화방이 없네요</p>
    </NotFoundWrapper>
  );
}
const MainWrapper = styled.div`
  height: 100%;
  border-right: 1px solid #f0f0f0;
  border-left: 1px solid #f0f0f0;
`;

const ChatProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${props => props.theme.signColor};
  color: #ffff;
  img {
    width: 44px;
    margin: 10px 20px;
    border-radius: 100%;
  }
  h1 {
    margin-right: 15px;
    font-size: 18px;
    font-weight: bold;
  }
`;

const ChatRoomWrapper = styled.div`
  height: 100%;
  overflow: scroll;
`;

const ItemWrapper = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  background-color: ${props => (props.isEnter ? '#f0f0f0' : '#ffff')};
  :hover {
    background-color: #f0f0f0;
  }
  .userImage {
    img {
      width: 44px;
      border-radius: 100%;
      border: 0.5px solid silver;
    }
  }
  .userMiddle {
    width: 0px;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 10px;
    .userInfo {
      span:nth-child(1) {
        font-weight: bold;
        font-size: 14px;
      }
      span:nth-child(2),
      span:nth-child(3) {
        font-size: 13px;
        margin-left: 6px;
        color: gray;
      }
    }
    .lastChat {
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      color: #424242;
    }
  }
  .productImage {
    img {
      width: 44px;
      border: 0.5px solid silver;
      border-radius: 5px;
    }
  }
`;

const NotFoundWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  p {
    margin-top: 30px;
    color: gray;
  }
`;
export default ChatListDelay;

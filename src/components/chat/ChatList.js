import React, { useContext, useEffect, useState } from 'react';
import { handleEnterRoom, socket } from 'apis/socket';
import { getChatRooms } from 'apis/chat';
import { UserContext } from 'context/context';
import { SERVER_PORT, CLIENT_PORT } from 'config';
import moment from 'moment';

import { ImList } from 'react-icons/im';
import { BsFillCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

function ChatListDelay(props) {
  const { useRoomId, setUseRoomId, forceUpdate } = props;
  const [rooms, setRooms] = useState([]);
  const myInfo = useContext(UserContext);

  useEffect(() => {
    if (myInfo.id) {
      getChatRooms(myInfo.id).then(data => {
        data.rooms.sort((a, b) => {
          return a.chat.length === 0 || b.chat.length === 0
            ? 1
            : moment(a.chat[0]?.createdAt).format('YYYY-MM-DD HH:mm:ss') >
              moment(b.chat[0]?.createdAt).format('YYYY-MM-DD HH:mm:ss')
            ? -1
            : 1;
        });
        setRooms(data.rooms);
      });
    }
  }, [myInfo, forceUpdate]);

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
          setRooms={setRooms}
        />
      ) : (
        <NotFoundRooms />
      )}
    </MainWrapper>
  );
}

function ChatList(props) {
  const { rooms, setRooms, useRoomId, setUseRoomId } = props;

  const handleCallback = roomId => {
    setUseRoomId(roomId);
  };

  socket.on('new_alarm', (roomId, chat) => {
    const updateRoom = rooms.map(room => {
      if (room.id === roomId) {
        room.chat[0].text = chat.text;
        room.chat[0].createdAt = chat.createdAt;
        room.newText = true;
      }
      return room;
    });

    updateRoom.sort((a, b) => {
      return a.chat.length === 0 || b.chat.length === 0
        ? 1
        : moment(a.chat[0]?.createdAt).format('YYYY-MM-DD HH:mm:ss') >
          moment(b.chat[0]?.createdAt).format('YYYY-MM-DD HH:mm:ss')
        ? -1
        : 1;
    });
    setRooms(updateRoom);
  });

  return (
    <ChatListWrapper>
      {rooms.map(room => {
        return (
          <ChatListItem
            key={room.id}
            room={room}
            rooms={rooms}
            setRooms={setRooms}
            useRoomId={useRoomId}
            handleCallback={handleCallback}
          />
        );
      })}
    </ChatListWrapper>
  );
}

function ChatListItem(props) {
  const { room, rooms, setRooms, useRoomId, handleCallback } = props;
  const myInfo = useContext(UserContext);
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
  const isNew = !!room.newText;

  return (
    <ItemWrapper
      id={room.id}
      isEnter={isEnter}
      newAlarm={room.newAlarm ? true : false}
      onClick={() => {
        handleEnterRoom(room.id, handleCallback);
        let updateRoom = rooms.map(_room => {
          if (_room.id === room.id) {
            delete _room.newText;
          }
          return _room;
        });
        setRooms(updateRoom);
      }}
    >
      <div className="userImage">
        <img
          src={`${CLIENT_PORT}/images/profile/userImageNotFound.png`}
          alt="userImage"
        />
        {isNew && <BsFillCircleFill size={10} />}
      </div>
      <div className="userMiddle" id={room.id}>
        <div className="userInfo">
          <span>{otherUser}</span>
          <span>{otherUserDistrict}</span>
          <span>{moment(lastTime).format('h:mm a')}</span>
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
  display: flex;
  flex-direction: column;
  border-right: 1px solid #f0f0f0;
  border-left: 1px solid #f0f0f0;
`;

const ChatProfile = styled.div`
  display: flex;
  background-color: ${props => props.theme.signColor};
  color: #ffff;
  img {
    width: 44px;
    margin: 10px 10px 10px 20px;
    border-radius: 100%;
  }
  h1 {
    margin: auto 0px;
    font-weight: bold;
  }
`;

const ChatListWrapper = styled.div`
  height: 100%;
  overflow: scroll;
  #new {
    background-color: red !important;
  }
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
    position: relative;
    img {
      width: 44px;
      border-radius: 100%;
      border: 0.5px solid silver;
    }
    svg {
      position: absolute;
      left: 0;
      color: ${props => props.theme.signColor};
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
    width: 44px;
    height: 44px;
    img {
      width: 100%;
      height: 100%;
      border: 0.5px solid silver;
      border-radius: 5px;
      object-fit: cover;
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

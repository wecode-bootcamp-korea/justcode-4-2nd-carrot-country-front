// modules
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// components
import ChatList from 'components/chat/ChatList';
import ChatRoom from 'components/chat/ChatRoom';
// styles
import styled, { keyframes, css } from 'styled-components';
import { socket } from 'apis/socket';

function Chat() {
  const location = useLocation();
  const roomId = location.state?.roomId;

  const [useRoomId, setUseRoomId] = useState(roomId ? roomId : null);
  const [forceUpdate, setForceUpdate] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    if (roomId) {
      socket.emit('enter_room', roomId, () => {});
    }
  }, [roomId]);

  return (
    <MainWrapper dropDown={dropDown}>
      <section className="chatContainer" id="chatListWrapper">
        <ChatList
          useRoomId={useRoomId}
          setUseRoomId={setUseRoomId}
          forceUpdate={forceUpdate}
          dropDown={dropDown}
          setDropDown={setDropDown}
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

const dropDownAnimation = keyframes`
  0%{
    height: 64px;
  }100%{
    height: 100%;
  }
`;

const dropUpAnimation = keyframes`
 0%{
  height: 100%;
 }100%{
  height: 64px;
 }
`;

const dropDownStyled = css`
  animation: ${dropDownAnimation} 0.2s linear;
`;

const dropUpStyled = css`
  animation: ${dropUpAnimation} 0.1s linear;
`;

const MainWrapper = styled.main`
  @media (max-width: 890px) {
    flex-direction: column;

    #chatListWrapper {
      ${props => (props.dropDown ? dropDownStyled : dropUpStyled)}
      height: ${props => (props.dropDown ? 100 + '%' : 64 + 'px')};
    }
    #chatRoomWrapper {
      min-height: 0%;
      display: ${props => (props.dropDown ? 'none' : '')};
      border-top: 1px solid silver;
    }
  }
  @media (min-width: 891px) and (max-width: 1024px) {
    padding-left: 10px;
    padding-right: 10px;
    #chatListWrapper {
      flex: 1.2;
    }
    #chatRoomWrapper {
      flex: 1.8;
      position: relative;
    }
  }
  @media (min-width: 1025px) {
    width: 1005px;
    margin: 0px auto;
    #chatListWrapper {
      flex: 1.2;
    }
    #chatRoomWrapper {
      flex: 1.8;
      position: relative;
    }
  }
  display: flex;
  height: 100vh;
  padding-bottom: 10px;
  padding-top: 70px;

  #chatListWrapper {
  }
  #chatRoomWrapper {
    height: 100%;
  }
`;

export default Chat;

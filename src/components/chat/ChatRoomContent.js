import React from 'react';
import moment from 'moment';

import styled from 'styled-components';

function ChatRoomContentDelay(props) {
  const { chats } = props;

  return chats.length > 0 ? (
    <ChatRoomContent chats={chats} />
  ) : (
    <NotFoundChats />
  );
}

function ChatRoomContent(props) {
  const { chats } = props;
  return (
    <MainWrapper>
      <ul className="textWrapper">
        {chats.map(chat => {
          return (
            <li key={chat.id}>
              <div>
                <span>{moment(chat.createdAt).format('YY-MM-DD HH:mm')}</span>
              </div>
              <div>
                <span>{chat.text}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </MainWrapper>
  );
}

function NotFoundChats() {
  return <MainWrapper>아직 대화가 없습니다.</MainWrapper>;
}

const MainWrapper = styled.div`
  flex: 1;
  overflow: scroll;
  .textWrapper {
    li {
      display: flex;
      margin: 10px;
      border: 1px solid;
    }
  }
`;

export default ChatRoomContentDelay;

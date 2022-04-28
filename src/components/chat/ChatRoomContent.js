import React, { useContext } from 'react';
import moment from 'moment';
import { SERVER_PORT } from 'config';
import { UserContext } from 'context/context';
import {
  MainWrapper,
  ProductWrapper,
  NoTalkWrapper,
} from './ChatRoomContentStyled';
import { BsChatDots } from 'react-icons/bs';
import { FaImage } from 'react-icons/fa';

function ChatRoomContentDelay(props) {
  const { chats, product } = props;

  return chats.length > 0 ? (
    <>
      <ChatProductComtent product={product} />
      <ChatRoomContent chats={chats} />
    </>
  ) : (
    <NotFoundChats />
  );
}

function ChatProductComtent(props) {
  const { product } = props;

  return (
    product && (
      <ProductWrapper>
        <div className="middleWrapper">
          <div className="imageWrapper">
            {product.productImage.length ? (
              <img
                src={SERVER_PORT + '/' + product.productImage[0].imageUrl}
                alt="productUImages"
              />
            ) : (
              <FaImage />
            )}
          </div>
          <div className="textWrapper">
            <p>{product.title}</p>
            <p>{Number(product.price).toLocaleString('ko-KR')}원</p>
          </div>
        </div>
        <div className="stateWrapper">
          <p>판매중</p>
        </div>
      </ProductWrapper>
    )
  );
}

function ChatRoomContent(props) {
  const me = useContext(UserContext);
  const { chats } = props;

  return (
    <MainWrapper>
      <ul className="textWrapper">
        {chats.map(chat => {
          return (
            <li
              key={chat.id}
              className={
                chat.user !== undefined
                  ? chat.user.id === me.id
                    ? 'isMy'
                    : 'isOther'
                  : chat.isMyChat
                  ? 'isMy'
                  : 'isOther'
              }
            >
              <div className="timeWrapper">
                <span>
                  {moment(chat.createdAt).format('YYYY.MM.DD. HH:mm a')}
                </span>
              </div>
              <div className="chatWrapper">
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
  return (
    <NoTalkWrapper>
      아직 대화가 없습니다.
      <BsChatDots />
    </NoTalkWrapper>
  );
}

export default ChatRoomContentDelay;

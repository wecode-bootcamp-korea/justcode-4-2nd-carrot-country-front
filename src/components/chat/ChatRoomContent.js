import React, { useContext } from 'react';
import moment from 'moment';
import { SERVER_PORT } from 'config';
import { UserContext } from 'context/context';
import { UserProfile } from 'components/profile/UserProfile';
import {
  MainWrapper,
  ProductWrapper,
  NoTalkWrapper,
} from './ChatRoomContentStyled';
import { BsChatDots } from 'react-icons/bs';
import { FaImage } from 'react-icons/fa';
import { priceFormat } from 'utils/format';

function ChatRoomContentDelay(props) {
  const me = useContext(UserContext);
  const { chats, product } = props;

  console.log('여기~!', product);

  return chats.length > 0 ? (
    <>
      <ChatUserProfile me={me} />
      <ChatProductComtent product={product} />
      <ChatRoomContent chats={chats} me={me} />
    </>
  ) : (
    <NotFoundChats />
  );
}

function ChatUserProfile(props) {
  return (
    <>
      <></>
    </>
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
            <p>{priceFormat(product.price)}</p>
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
  const myInfo = useContext(UserContext);
  const { chats } = props;

  return (
    <MainWrapper>
      <ul className="textWrapper">
        {chats.map((chat, idx) => {
          const prevChat = chats[idx - 1];
          const nextChat = chats[idx + 1];
          const prevDate = moment(prevChat?.createdAt).format('YYYY-MM-DD');
          const curDate = moment(chat?.createdAt).format('YYYY-MM-DD');
          const curTime = moment(chat?.createdAt).format('YYYY-MM-DD HH:mm');
          const nextTime = moment(nextChat?.createdAt).format(
            'YYYY-MM-DD HH:mm'
          );
          let textTime = '';
          let isNewDate = false;
          if (chat?.user?.id !== nextChat?.user?.id) {
            textTime = moment(chat.createdAt).format('h:mm a');
          }
          if (textTime === '' && idx !== 0 && curTime !== nextTime) {
            textTime = moment(chat.createdAt).format('h:mm a');
          }
          if (idx === 0 || prevDate !== curDate) {
            isNewDate = true;
          }
          return (
            <div key={chat.id}>
              {isNewDate && (
                <div className="newDateLine">
                  <span>{curDate}</span>
                </div>
              )}
              <li
                key={chat.id}
                className={
                  chat.user !== undefined
                    ? chat.user.id === myInfo.id
                      ? 'isMy'
                      : 'isOther'
                    : chat.isMyChat
                    ? 'isMy'
                    : 'isOther'
                }
              >
                <div className="timeWrapper">
                  <span>{textTime}</span>
                </div>
                <div className="chatWrapper">
                  <div dangerouslySetInnerHTML={{ __html: chat.text }} />
                </div>
              </li>
            </div>
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

import React from 'react';
import moment from 'moment';
import theme from 'styles/theme';

import styled from 'styled-components';

function ChatRoomContentDelay(props) {
  const { chats } = props;
  const { product } = props;

  return chats.length > 0 ? (
    <>
      {/* <ChatProductComtent product={product} /> */}
      <ChatRoomContent chats={chats} />
    </>
  ) : (
    <NotFoundChats />
  );
}

// function ChatProductComtent(props) {
//   const { product } = props;

//   return (
//     <ProductWrapper>
//       <div className="imageWrapper">
//         <img
//           src={SERVER_PORT + '/' + product.productImage[0].imageUrl}
//           alt="productUImages"
//         />
//       </div>
//       <div className="textWrapper">
//         <p>{product.title}</p>
//         <p>{Number(product.price).toLocaleString('ko-KR')}원</p>
//       </div>
//     </ProductWrapper>
//   );
// }

function ChatRoomContent(props) {
  const { chats } = props;

  return (
    <MainWrapper>
      <ul className="textWrapper">
        {chats.map(chat => {
          return (
            <li key={chat.id} className={chat.isMyChat ? 'isMy' : 'isOther'}>
              <div>
                <span>{moment(chat.createdAt).format('YY-MM-DD HH:mm')}</span>
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
  return <MainWrapper>아직 대화가 없습니다.</MainWrapper>;
}

const MainWrapper = styled.div`
  flex: 1;
  overflow-y: scroll;
  .textWrapper {
    li {
      display: flex;
      margin: 10px;
      font-size: 15px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .isMy {
      justify-content: flex-end;
      .chatWrapper {
        padding: 15px 20px;
        background-color: ${theme.signColor};
        color: white;
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }
    }
    .isOther {
      justify-content: flex-end;
      flex-direction: row-reverse;
      .chatWrapper {
        padding: 15px 20px;
        background-color: #eaebee;
        border-top-right-radius: 1rem;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }
    }
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid silver;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  .imageWrapper {
    width: 50px;
    img {
      width: 100%;
    }
  }
  .textWrapper {
    p:first-child {
      font-weight: 700;
    }
  }
`;

export default ChatRoomContentDelay;

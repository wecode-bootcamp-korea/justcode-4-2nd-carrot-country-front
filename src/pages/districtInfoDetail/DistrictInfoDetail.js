// import React, { useContext } from 'react';
import { useState } from 'react';
import UserProfile from 'components/profile/UserProfile';
import ImageSlider from 'components/slider/ImageSlider';
import { SERVER_PORT } from 'config';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import styled from 'styled-components';
import { Usersign } from 'components/login/LoginStyle';

const user = {
  id: '1',
  nickname: '최초사용자',
  city: '서울',
  district: '용산구',
};
const imageUrl = [
  `/images/districtInfoDetail/districtInfoImg1.jpg`,
  `/images/districtInfoDetail/districtInfoImg2.jpg`,
  `/images/districtInfoDetail/districtInfoImg3.jpg`,
  `/images/districtInfoDetail/districtInfoImg4.jpg`,
];

function DistrictInfoDetail() {
  const [comment, setComment] = useState([]);
  const [heart, setHeart] = useState('lightgray');
  // const [trash, setTrash] = useState('');

  const handleComment = e => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    if (comment !== '') {
      fetch(`${SERVER_PORT}/infos/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: localStorage.getItem('token'),
          infoId: '1',
          comment: comment,
        }),
      });
    }
  };

  const handleHeart = () => {
    heart === 'lightgray' ? setHeart('tomato') : setHeart('lightgray');
  };

  // const handleRemove = e => {
  //   // setTrashs(trashs.filter(trash => trash.id !== id));
  //   const {comments} = this.state;
  //   const_comments = comments.filter((key) => key.id !== id);
  // };

  return (
    <MainWrapper>
      <ImageSlider urls={imageUrl} />
      <InfoWrapper>
        <UserInfo>
          <UserProfile user={user} />
        </UserInfo>
        <Line />
        <InfoTop>
          <h1>우리 동네 카페 추천해요</h1>
        </InfoTop>
        <InfoBottom>
          <div
            dangerouslySetInnerHTML={{
              __html: `<p>이번 주말에 날씨가 좋아 용산역에서 가까운 카페 가봤네요~</p><p>새로 오픈한 카페여서 그런지 깔끔하고 직원분들도 친절하시네여ㅎㅎ</p><p>디저트도 짱 맛!! 추천합니당!! ㅎㅎ</p>`,
            }}
          />
          <div>
            <span>4시간 전</span>
            <span>조회 72</span>
          </div>
        </InfoBottom>
      </InfoWrapper>
      <CommentsWrapper>
        <CommentTitle>
          <span>좋아요</span>
          <AiFillHeart
            className="heart"
            style={{ color: heart }}
            onClick={handleHeart}
          />
        </CommentTitle>
        <Comments>
          <div>
            {comment.map}
            <UserInfo>
              <UserProfile user={user} />
              <BsFillTrashFill
                className="trashIcon"
                // onClick={() => this.handleRemove(e.id)}
              />
            </UserInfo>
          </div>
          <p>와~ 굉장히 넓네요! 케이크도 맛있어보여요^^</p>
          <span className="time">56분 전</span>
        </Comments>
      </CommentsWrapper>
      <CommentSignup>
        <form>
          <input
            type="text"
            value={comment}
            onChange={handleComment}
            placeholder="댓글을 입력해주세요"
          />
          <BsFillArrowRightCircleFill
            className="submitIcon"
            onClick={handleSubmit}
          />
        </form>
      </CommentSignup>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 70px;
`;

const InfoWrapper = styled.section`
  @media (max-width: 890px) {
    padding: 0px 15px;
  }
  @media (min-width: 891px) {
    width: 677px;
    margin: 0px auto;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid #99999940;
  margin-bottom: 30px;
`;

const InfoTop = styled.div`
  padding-bottom: 30px;
  h1 {
    padding-bottom: 8px;
    font-weight: 500;
    font-size: 20px;
  }
`;

const InfoBottom = styled.div`
  border-bottom: 1px solid #99999940;
  div {
    padding-bottom: 30px;
  }
  div:nth-child(1) {
    color: #333;
    p {
      padding-bottom: 8px;
    }
  }
  div:nth-child(2) {
    span {
      padding: 0px 6px;
      color: #71717199;
      font-size: 13px;
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .ChatBtn {
    border: 1px solid ${props => props.theme.signColor};
    border-radius: 50px;
    padding: 15px 20px;
    cursor: pointer;
    :hover {
      background-color: ${props => props.theme.signColor};
      span {
        color: #ffff;
      }
    }
    span {
      color: ${props => props.theme.signColor};
    }
  }
`;
const CommentsWrapper = styled.section`
  @media (max-width: 890px) {
    padding: 0px 15px;
  }
  @media (min-width: 891px) {
    width: 677px;
    margin: 0px auto;
  }
`;

const CommentTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 6px;
  border-bottom: 1px solid #99999940;
  .heart {
    font-size: 18px;
    margin-left: 3px;
    cursor: pointer;
    transition: transform 300ms ease;
  }
  .heart:hover {
    transform: scale(1.2);
  }
  span {
    font-size: 15px;
    font-weight: 600;
  }
  .agree {
    margin-left: 13px;
  }
`;

const Comments = styled.div`
  padding: 20px 6px 20px 6px;
  border-bottom: 1px solid #99999940;
  /* div {
    display: flex;
    align-items: center;
  } */
  p {
    padding: 15px 0px;
    font-size: 15px;
    line-height: 1.47;
    letter-spacing: -0.5px;
  }
  .time {
    font-size: 13px;
    color: #71717199;
  }
  .trashIcon {
    margin-left: 10px;
    width: 15px;
    color: #ababab;
  }
`;

const CommentSignup = styled.div`
  @media (max-width: 890px) {
    padding: 0px 15px;
  }
  @media (min-width: 891px) {
    width: 677px;
    margin: 0px auto;
  }
  form {
    display: flex;
    align-items: center;
    margin: 20px 0px;
  }
  input {
    width: 500px;
    height: 40px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: #f6f6f6;
  }
  .submitIcon {
    margin-left: 10px;
    font-size: 25px;
    color: #ff8a3d96;
  }
  .submitIcon:hover {
    color: #ff8a3d;
  }
`;

export default DistrictInfoDetail;

// import React, { useContext } from 'react';
import { useState } from 'react';
import { SERVER_PORT } from 'config';
import CommentInput from 'components/comment/CommentInput';
import UserProfile from 'components/profile/UserProfile';
import ImageSlider from 'components/slider/ImageSlider';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
// import { Usersign } from 'components/login/LoginStyle';

import {
  MainWrapper,
  InfoWrapper,
  InfoTop,
  InfoBottom,
  Line,
  UserInfo,
  CommentsWrapper,
  CommentTitle,
  CommentSignup,
} from './DistrictInfoDetailStyled';

const user = {
  id: '1',
  nickname: '최초사용자',
  city: '서울',
  district: '용산구',
};
const imageUrl = [
  {
    id: 1,
    imageUrl: 'aaaaa1650789523542.jpg',
  },
];

function DIDetail() {
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
      <ImageSlider images={imageUrl} />
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
        <CommentInput />
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

export default DIDetail;

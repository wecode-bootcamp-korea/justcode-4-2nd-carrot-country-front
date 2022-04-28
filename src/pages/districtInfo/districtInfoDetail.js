import { useContext, useEffect, useState } from 'react';
import { UserContext } from 'context/context';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { SERVER_PORT } from 'config';
import { getDistrictDetail } from 'apis/district';
import CommentInput from 'components/comment/CommentInput';
import UserProfile from 'components/profile/UserProfile';
import ImageSlider from 'components/slider/ImageSlider';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
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

function DIDetail() {
  const location = useLocation();
  const [comment, setComment] = useState([]);
  const [heart, setHeart] = useState('lightgray');
  const [data, setData] = useState();
  const myInfo = useContext(UserContext);
  // const [trash, setTrash] = useState('');
  // const districtInfoId = location?.state.districtInfoId;

  useEffect(() => {
    getDistrictDetail(1).then(data => {
      if (data.message === 'SUCCESS') {
        setData(data.districtInfo);
      }
    });
  }, []);

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

  // const addComment = () => {
  //   setComments(
  //     comments.commnetsconcat({
  //       id: comments.length + 1,
  //       // content: input,
  //       // userName: userDate,
  //     })
  //   );
  // };

  console.log('data >> ', data);
  return data ? (
    <MainWrapper>
      {data.districtInfoImage && (
        <ImageSlider images={data.districtInfoImage} />
      )}
      <InfoWrapper>
        <UserInfo>
          <UserProfile user={data.user} />
        </UserInfo>
        <Line />
        <InfoTop>
          <h1>{data.title}</h1>
        </InfoTop>
        <InfoBottom>
          <div
            dangerouslySetInnerHTML={{
              __html: `<p>${data.content}</p>`,
            }}
          />
          <div>
            <span>{moment(data.createdAt).format('YYYY-MM-DD')}</span>
            <span>조회 {data.viewCount ? data.viewCount : 0}</span>
            <span>좋아요 {data.districtInfoLiked.length}</span>
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
  ) : (
    <div></div>
  );
}

export default DIDetail;

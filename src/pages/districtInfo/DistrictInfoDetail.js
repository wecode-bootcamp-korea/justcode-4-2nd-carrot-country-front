import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { postComment } from 'apis/comment';
import { getDistrictDetail } from 'apis/district';
import CommentInput from 'components/comment/CommentInput';
import UserProfile from 'components/profile/UserProfile';
import ImageSlider from 'components/slider/ImageSlider';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

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
import Loading from 'components/loading/Loading';

function DIDetail() {
  const location = useLocation();
  const { districtInfoId } = location.state;
  const [comment, setComment] = useState('');
  const [heart, setHeart] = useState('lightgray');
  const [data, setData] = useState();

  useEffect(() => {
    getDistrictDetail(districtInfoId).then(data => {
      if (data.message === 'SUCCESS') {
        setData(data.districtInfo);
      }
    });
  }, [districtInfoId]);
  const handleComment = e => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    comment !== '' && postComment(districtInfoId, comment);
  };

  //   const onChange = e => {
  //   setInput(e.target.value);
  // };

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
        <CommentInput districtInfoId={districtInfoId} />
      </CommentsWrapper>
      <CommentSignup>
        <div>
          <input
            type="text"
            onChange={e => handleComment(e)}
            placeholder="댓글을 입력해주세요"
          />
          <BsFillArrowUpCircleFill
            className="submitIcon"
            onClick={handleSubmit}
          />
        </div>
      </CommentSignup>
    </MainWrapper>
  ) : (
    <Loading />
  );
}

export default DIDetail;

import { useContext, useEffect, useState } from 'react';
import { UserContext } from 'context/context';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { SERVER_PORT } from 'config';
import { postComment } from 'apis/comment';
import { getDistrictDetail } from 'apis/district';
import CommentInput from 'components/comment/CommentInput';
import UserProfile from 'components/profile/UserProfile';
import ImageSlider from 'components/slider/ImageSlider';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
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
  const [forceUpdate, setForceUpdate] = useState(false);
  // const [trash, setTrash] = useState('');

  useEffect(() => {
    getDistrictDetail(districtInfoId).then(data => {
      console.log('dfd', districtInfoId);
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
    setComment('');
    setForceUpdate(!forceUpdate);
  };

  const handleHeart = () => {
    heart === 'lightgray' ? setHeart('tomato') : setHeart('lightgray');
  };

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
            {/* <span>좋아요 {data.districtInfoLiked.length}</span> */}
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
        <CommentInput
          forceUpdate={forceUpdate}
          districtInfoId={districtInfoId}
        />
      </CommentsWrapper>
      <CommentSignup>
        <form>
          <input
            type="text"
            value={comment}
            onChange={e => handleComment(e)}
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
    <Loading />
  );
}

export default DIDetail;

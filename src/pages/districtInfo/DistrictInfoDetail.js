import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { getDistrictDetail } from 'apis/district';
import { UserContext } from 'context/context';
import CommentInput from 'components/comment/CommentInput';
import UserProfile from 'components/profile/UserProfile';
import ImageSlider from 'components/slider/ImageSlider';
import DetailDeleteModal from 'components/buttons/DetailDeleteModal';
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
  FixAndDelete,
} from './DistrictInfoDetailStyled';
import Loading from 'components/loading/Loading';

function DIDetail() {
  const location = useLocation();
  const myInfo = useContext(UserContext);
  const { districtInfoId } = location.state;
  const [heart, setHeart] = useState('lightgray');
  const [data, setData] = useState();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getDistrictDetail(districtInfoId).then(data => {
      if (data.message === 'SUCCESS') {
        setData(data.districtInfo);
      }
    });
  }, [districtInfoId]);

  const handleHeart = () => {
    heart === 'lightgray' ? setHeart('tomato') : setHeart('lightgray');
  };

  return data ? (
    <MainWrapper>
      {Boolean(data.districtInfoImage.length) && (
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
            {myInfo.id === data.user.id ? (
              <FixAndDelete>
                <p onClick={() => setOpenModal(true)}>삭제</p>
              </FixAndDelete>
            ) : null}
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
      <DetailDeleteModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        data={data}
        isProduct={false}
      />
    </MainWrapper>
  ) : (
    <Loading />
  );
}

export default DIDetail;

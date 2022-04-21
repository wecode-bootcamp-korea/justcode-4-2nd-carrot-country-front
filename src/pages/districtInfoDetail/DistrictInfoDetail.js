import React from 'react';
import UserProfile from 'components/profile/UserProfile';
import ImageSlider from 'components/slider/ImageSlider';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

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
          <img src="/images/districtInfoDetail/heart.svg" />
          <span className="agree">공감해요</span>
          <img src="/images/districtInfoDetail/good.svg" />
        </CommentTitle>
        <Comments>
          <div>
            <img src="/images/profile/userImageNotFound.png" />
            <h3>용가리</h3>
            <span>서울특별시 강남구</span>
          </div>
          <p>와~ 굉장히 넓네요! 케이크도 맛있어보여요^^</p>
          <span className="time">56분 전</span>
        </Comments>
      </CommentsWrapper>
      <CommentSignup>
        <div>
          <textarea placeholder="댓글을 입력해주세요" />
          <BsFillArrowRightCircleFill className="icon" />
        </div>
      </CommentSignup>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 70px;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  img {
    width: 19px;
    margin-left: 3px;
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
  padding: 25px 6px 20px 6px;
  border-bottom: 1px solid #99999940;
  div {
    display: flex;
    align-items: center;
  }
  img {
    width: 30px;
    border-radius: 50%;
  }
  h3 {
    display: inline-block;
    margin: 10px;
    font-weight: 600;
  }
  span {
    font-size: 13px;
    padding-top: 5px;
    line-height: 1.46;
    letter-spacing: -0.5px;
    vertical-align: middle;
  }
  p {
    padding: 20px 0px 15px 0px;
    font-size: 15px;
    line-height: 1.47;
    letter-spacing: -0.5px;
  }
  .time {
    color: #71717199;
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
  div {
    padding: 10px 0px;
  }
  textarea {
    width: 220px;
    padding: 10px;
    margin: 20px 10px 5px 10px;
    border: 1px solid #f6f6f6;
    border-radius: 8px;
    background-color: #f6f6f6;
  }
  .icon {
    font-size: 25px;
    color: #ff8a3d96;
  }
  .icon:hover {
    color: #ff8a3d;
  }
`;

export default DistrictInfoDetail;

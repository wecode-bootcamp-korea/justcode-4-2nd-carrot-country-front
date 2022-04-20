import React from 'react';
import UserProfile from 'components/profile/UserProfile';
import ImageSlider from 'components/slider/ImageSlider';

import styled from 'styled-components';

const user = {
  id: '1',
  nickname: '다파라',
  city: '서울',
  district: '강남구',
};
const imageUrl = [
  `/images/thump/banner-a.png`,
  `/images/thump/banner-b.png`,
  `/images/thump/banner-a.png`,
  `/images/thump/banner-a.png`,
  `/images/thump/banner-a.png`,
];

function ProductDetail() {
  return (
    <MainWrapper>
      <ImageSlider urls={imageUrl} />
      <InfoWrapper>
        <UserInfo>
          <UserProfile user={user} />
          <div className="ChatBtn">
            <span>판매자와 채팅하기</span>
          </div>
        </UserInfo>
        <Line />
        <InfoTop>
          <h1>
            미사용 캠핑 그릴화로대 옐로우색상 L사이즈 3~4인용 캠핑요품
            숯불바베큐
          </h1>
          <div>
            <span>스포츠/레저</span>
            <span>2시간 전</span>
          </div>
          <div>
            <span>79,000원</span>
          </div>
        </InfoTop>
        <InfoBottom>
          <div
            dangerouslySetInnerHTML={{
              __html: `<p>캠핑을 가려고 샀는데</p><p>잘 안가게되어서~필요하신분 구매하셔서</p><p>유용하게 쓰세요!!~ 상세설명 사진에 봐주세요^^</p>`,
            }}
          />
          <div>
            <span>관심 12</span>
            <span>채팅 0</span>
            <span>조회 101</span>
          </div>
        </InfoBottom>
      </InfoWrapper>
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
  div:nth-child(2) {
    padding-bottom: 8px;
    span {
      font-size: 13px;
      color: #999;
    }
  }
  div:nth-child(3) {
    span {
      font-weight: 600;
      font-size: 17px;
    }
  }
`;

const InfoBottom = styled.div`
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
    border-bottom: 1px solid #99999940;
    span {
      padding: 0px 6px;
      color: #71717199;
      font-size: 13px;
    }
  }
`;
export default ProductDetail;

import React from 'react';
import UserProfile from 'components/profile/UserProfile';
import ImageSlider from 'components/slider/ImageSlider';

import styled from 'styled-components';

const user = {
  nickname: '다파라',
  userImage: '',
  city: '서울',
  district: '강남구',
};
const imageUrl = [
  `/images/thump/product01.jpeg`,
  `/images/thump/banner-a.png`,
  `/images/thump/banner-b.png`,
  `/images/thump/banner-a.png`,
];
function ProductDetail() {
  return (
    <MainWrapper>
      <ImageSlider urls={imageUrl} width={670} height={500} />
      <InfoWrapper>
        <UserProfile user={user} />
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
          <span>관심 12</span>
          <span>채팅 0</span>
          <span>조회 101</span>
        </InfoBottom>
      </InfoWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const InfoWrapper = styled.section`
  width: 677px;
  margin: 0px auto;
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
  p {
    padding-bottom: 8px;
    font-weight: lighter;
  }
`;
export default ProductDetail;

import React from 'react';
import UserProfile from 'components/profile/UserProfile';
import ImageSlider from 'components/slider/ImageSlider';

import styled from 'styled-components';

const user = {
  id: '1',
  nickname: '최초사용자',
  city: '서울',
  district: '용산구',
};
const imageUrl = [
  `/images/thump/districtInfoImg1.jpg`,
  `/images/thump/districtInfoImg2.jpg`,
  `/images/thump/districtInfoImg3.jpg`,
  `/images/thump/districtInfoImg4.jpg`,
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
        <InfoBottom>
          <div
            dangerouslySetInnerHTML={{
              __html: `<p>이번 주말에 날씨가 좋아 용산역에서 가까운 카페 가봤네요~</p><p>새로 오픈한 카페여서 그런지 깔끔하고 직원분들도 친절하시네여ㅎㅎ 규모도 엄청 커요~~</p><p>디저트도 짱 맛!! 추천합니당!! ㅎㅎ</p>`,
            }}
          />
          <div>
            <span>4시간 전</span>
            <span>조회 72</span>
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
export default DistrictInfoDetail;

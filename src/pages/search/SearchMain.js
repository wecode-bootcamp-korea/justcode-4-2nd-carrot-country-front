import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductInfoDelay from 'pages/product/ProducInfo';
import { getDistrictList } from 'apis/district';
import ProductInfoList from 'components/list/ProductInfoList';
import DistrictInfoList from 'components/list/DistrictInfoList';
import styled from 'styled-components';
import { getProductListBest } from 'apis/product';

function SearchMain() {
  const location = useLocation();
  const { keyword } = location.state;
  const [productInfoData, setProductInfoData] = useState([]);
  const [districtInfoData, setDistrictInfoData] = useState([]);

  useEffect(() => {
    getProductListBest().then(data => {
      setProductInfoData(data.bestProduct);
    });
  }, []);

  useEffect(() => {
    getDistrictList().then(data => {
      setDistrictInfoData(data.districtInfos);
    });
  }, []);
  // return <div style={{ padding: '70px' }}>{keyword}</div>;
  return (
    <PageWrapper>
      <ProductWrapper>
        <TitleWrapper>
          <Title>중고거래</Title>
          <ProductInfoList data={productInfoData} />
        </TitleWrapper>
      </ProductWrapper>
      <ShowMore>더보기</ShowMore>
      <DistrictWrapper>
        <TitleWrapper>
          <Title>동네정보</Title>
          <DistrictInfoList data={districtInfoData} />
        </TitleWrapper>
      </DistrictWrapper>
      <ShowMore>더보기</ShowMore>
    </PageWrapper>
  );
}

export default SearchMain;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-color: #f8f9fa;
`;
const ProductWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  border: 1px solid lightgray;
  overflow: hidden;
  border-radius: 10px;
  background-color: white;
  @media (max-width: 690px) {
    width: 360px;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    width: 800px;
  }
  // 모니터
  @media (min-width: 891px) {
    width: 1024px;
    height: 805px;
    padding: 10px;
  }
`;

const ShowMore = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid lightgray;
  border-radius: 8px;
  border-top: none;
  cursor: pointer;
  color: #868e96;
  margin-bottom: 30px;
  background-color: white;
  @media (max-width: 690px) {
    width: 360px;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    width: 800px;
  }
  // 모니터
  @media (min-width: 891px) {
    width: 1024px;
    padding: 10px;
  }
`;
const DistrictWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  border: 1px solid lightgray;
  overflow: hidden;
  border-radius: 10px;
  background-color: white;
  @media (max-width: 690px) {
    width: 360px;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    width: 800px;
  }
  // 모니터
  @media (min-width: 891px) {
    width: 1024px;
    height: 805px;
    padding: 10px;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: white;
  @media (max-width: 690px) {
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
  }
  // 모니터
  @media (min-width: 891px) {
    width: 90%;
  }
`;
const Title = styled.p`
  @media (max-width: 690px) {
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
  }
  // 모니터
  @media (min-width: 891px) {
    margin-left: 20px;
    margin: 20px 0;
    font-size: 20px;
  }
`;

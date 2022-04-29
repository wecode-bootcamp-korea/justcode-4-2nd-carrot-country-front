import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductInfoDelay from 'pages/product/ProducInfo';
import ProductInfoList from 'components/list/ProductInfoList';
import DistrictInfoList from 'components/list/DistrictInfoList';
import styled from 'styled-components';
import { getProductListBest, getSearchProductList } from 'apis/product';
import { getDistrictList, getSearchDistrictList } from 'apis/district';

function SearchMain() {
  const location = useLocation();
  const { keyword } = location.state;
  const [productInfoData, setProductInfoData] = useState([]);
  const [districtInfoData, setDistrictInfoData] = useState([]);
  const [yesProduct, setYesProduct] = useState(false);
  const [yesDistrict, setYesDistrict] = useState(false);

  useEffect(() => {
    getSearchProductList(keyword).then(data => {
      if (data === 'NO SEARCH RESULTS') {
        setYesProduct(false);
        setProductInfoData([]);
      }
      if (data.message == 'SUCCESS') {
        setYesProduct(true);
        setProductInfoData(data.searchProducts);
      }
    });
  }, [keyword]);

  useEffect(() => {
    getSearchDistrictList(keyword).then(data => {
      if (data === 'NO SEARCH RESULTS') {
        setDistrictInfoData([]);
        setYesDistrict(false);
      }
      if (data.message == 'SUCCESS') {
        setYesDistrict(true);
        setDistrictInfoData(data.districtInfos);
      }
    });
  }, [keyword]);
  return (
    <PageWrapper>
      <ProductWrapper>
        <TitleWrapperProduct>
          <Title>중고거래</Title>
          {yesProduct ? (
            <ProductInfoList data={productInfoData} />
          ) : (
            <NoSearchResult> 검색 결과가 없습니다</NoSearchResult>
          )}
        </TitleWrapperProduct>
      </ProductWrapper>
      <ShowMore>더보기</ShowMore>
      <DistrictWrapper>
        <TitleWrapperDistrict>
          <Title>동네정보</Title>
          {yesDistrict ? (
            <DistrictInfoList data={districtInfoData} />
          ) : (
            <NoSearchResult> 검색 결과가 없습니다</NoSearchResult>
          )}
        </TitleWrapperDistrict>
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
    height: auto;
    padding: 10px;
    max-height: 805px;
  }
`;

const NoSearchResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #868e96;
  @media (max-width: 690px) {
    width: 360px;
    font-size: 20px;
    padding: 20px;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    font-size: 30px;
    width: 800px;
    padding: 30px;
  }
  // 모니터
  @media (min-width: 891px) {
    font-size: 40px;
    width: 1024px;
    height: auto;
    padding: 40px;
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
    height: auto;
    padding: 10px;
    max-height: 805px;
  }
`;
const TitleWrapperProduct = styled.div`
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

const TitleWrapperDistrict = styled.div`
  display: flex;
  flex-direction: column;
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
    margin-left: 20px;
    margin-top: 20px;
    font-size: 17px;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    margin-left: 20px;
    margin-top: 20px;
    font-size: 20px;
  }
  // 모니터
  @media (min-width: 891px) {
    margin-left: 20px;
    margin-top: 20px;
    font-size: 20px;
  }
`;

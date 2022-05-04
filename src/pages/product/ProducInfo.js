import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import {
  getProductList,
  getProductListBest,
  getProductListCity,
  getProductListDistrict,
} from 'apis/product';
import { getCities, getDistricts } from 'apis/category';
import { UserContext } from 'context/context';
import Loading from 'components/loading/Loading';
import ProductInfoList from 'components/list/ProductInfoList';
import ListTitle from 'components/list/ListTitle';
import RegisterButton from 'components/buttons/RegisterButton';
import AreaTag from 'components/list/AreaTag';
import DistrictSelectDropDown from 'components/buttons/DistrictSelectDropDown';
import NoProductInfo from 'components/list/NoProductInfo';

//조건부 렌더링 함수
const ProductInfoDelay = () => {
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(Boolean(user.id));
  const [productInfoData, setProductInfoData] = useState([]);

  useEffect(() => {
    setIsLogin(Boolean(user.id));
  }, [user]);

  useEffect(() => {
    isLogin
      ? getProductList().then(data => {
          setProductInfoData(data.productList);
          setLoading(false);
        })
      : getProductListBest().then(data => {
          setProductInfoData(data.bestProduct);
          setLoading(false);
        });
  }, [isLogin]);

  return loading ? (
    <Loading />
  ) : isLogin ? (
    <>
      <ProductInfoWhenLogin data={productInfoData} user={user} />
      <RegisterButton />
    </>
  ) : (
    <>
      <ProductInfo data={productInfoData} /> <RegisterButton />
    </>
  );
};

//로그인시 매물리스트 함수
const ProductInfoWhenLogin = ({ data, user }) => {
  const productList = data;
  return (
    <>
      <ListTitle
        title={`${user.city.cityName} ${user.district.districtName} 중고 거래 매물`}
      />
      <AreaTag
        city={user.city.cityName}
        district={user.district.districtName}
      />
      <WholeWrapper>
        {productList ? (
          <ListWrapper>
            <ProductInfoList maxWidth={1024} data={productList} />
          </ListWrapper>
        ) : (
          <NoProductInfo />
        )}
      </WholeWrapper>
    </>
  );
};

//비로그인시 인기 매물 리스트, 기본은 베스트, 지역 선택시 해당 지역

const ProductInfo = ({ data }) => {
  const bestProduct = data;
  const [cityInfoData, setCityInfoData] = useState([]); //도시 기준 리스트 정보 저장
  const [districtInfoData, setDistrictInfoData] = useState([]); //구 기준 리스트 정보 저장
  const [productListResult, setProductListResult] = useState(data);
  const [selectedDistrict, setSelectedDistrict] = useState(); //선택된 구 정보
  const [selectedCity, setSelectedCity] = useState(); //선택된 도시 정보

  const [districts, setDistricts] = useState({
    message: '',
    districts: [],
  });
  const [cities, setCities] = useState({
    message: '',
    cities: [],
  });

  //지역 선택 드롭다운 코드

  //드롭다운 옵션에 도시 추가
  useEffect(() => {
    getCities().then(data => setCities(data));
  }, []);

  useEffect(() => {
    getProductListCity(selectedCity).then(data => {
      setCityInfoData(data.message !== 'SUCCESS' ? 0 : data.bestProductsByCity);
    });
    getDistricts(selectedCity).then(data => setDistricts(data));
    console.log('setDisrict후 >>> ', districts);
    setSelectedDistrict(0);
  }, [selectedCity]);

  //도시 productInfo 뱉어냄

  useEffect(() => {
    getProductListDistrict(selectedCity, selectedDistrict).then(data => {
      setDistrictInfoData(
        data.message !== 'SUCCESS' ? 0 : data.getBestProductsBycityNDistrict
      );
    });
    console.log('disrict info data >> ', districtInfoData);
  }, [selectedDistrict]);

  //뱉어내는 컴포넌트
  return (
    bestProduct && (
      <>
        <ListTitle title={`중고 거래 인기 매물`} />
        <WholeWrapper>
          <ContentsWrapper>
            <DistrictSelectDropDown
              setSelectedCity={setSelectedCity}
              selectedCity={selectedCity}
              cities={cities}
              setSelectedDistrict={setSelectedDistrict}
              districts={districts}
            />
            <ListWrapper>
              <ProductInfoList
                maxWidth={1024}
                data={
                  cityInfoData
                    ? districtInfoData.length
                      ? districtInfoData
                      : cityInfoData
                    : bestProduct
                }
              />
            </ListWrapper>
          </ContentsWrapper>
        </WholeWrapper>
      </>
    )
  );
};

const WholeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  @media (max-width: 690px) {
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    width: 800px;
  }
  // 모니터
  @media (min-width: 891px) {
    width: 1024px;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

// const NoproductTextWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 70px 0 50px 0;
//   font-size: 150px;
//   color: silver;
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
//     Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//   :first-child {
//     padding-bottom: 200px;
//   }
//   p {
//     color: silver;
//     font-size: 20px;
//     padding-top: 10px;
//   }
// `;

export default ProductInfoDelay;

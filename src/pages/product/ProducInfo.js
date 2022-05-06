import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import {
  getProductList,
  getProductListBest,
  getProductListLocation,
} from 'apis/product';
import { getCities, getDistricts } from 'apis/area';
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
          setProductInfoData(data.bestProducts);
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
      <ProductInfo /> <RegisterButton />
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

const ProductInfo = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(); //선택된 구 정보
  const [selectedCity, setSelectedCity] = useState(); //선택된 도시 정보
  const [productListResult, setProductListResult] = useState();
  const [districts, setDistricts] = useState({
    message: '',
    districts: [],
  });
  const [cities, setCities] = useState({
    message: '',
    cities: [],
  });

  //지역 선택 드롭다운 코드

  useEffect(() => {
    getProductListBest().then(data => setProductListResult(data.bestProducts));
  }, []);

  useEffect(() => {
    getCities().then(data => setCities(data.cities));
  }, []);

  const onCityChange = e => {
    setSelectedDistrict();
    setSelectedCity(e.target.value); //도시 선택시
    getDistricts(e.target.value).then(data => setDistricts(data));
    getProductListLocation(e.target.value).then(data => {
      setProductListResult(data.bestProducts);
    });
  };

  const onDistrictChange = e => {
    setSelectedDistrict(e.target.value);
    getProductListLocation(selectedCity, e.target.value).then(data => {
      setProductListResult(data.bestProducts);
    });
  };

  return (
    productListResult && (
      <>
        <ListTitle title={`중고 거래 인기 매물`} />
        <WholeWrapper>
          <ContentsWrapper>
            <DistrictSelectDropDown
              selectedCity={selectedCity}
              cities={cities}
              districts={districts}
              onCityChange={onCityChange}
              onDistrictChange={onDistrictChange}
            />
            {productListResult.length > 0 ? (
              <ListWrapper>
                <ProductInfoList maxWidth={1024} data={productListResult} />
              </ListWrapper>
            ) : (
              <NoProductInfo />
            )}
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

export default ProductInfoDelay;

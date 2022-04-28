import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { getProductList, getProductListBest } from 'apis/product';
import { UserContext } from 'context/context';
import Loading from 'components/loading/Loading';
import ProductInfoList from 'components/list/ProductInfoList';
import ListTitle from 'components/list/ListTitle';
import RegisterButton from 'components/buttons/RegisterButton';
import AreaTag from 'components/list/AreaTag';
import DistrictSelectDropDown from 'components/buttons/DistrictSelectDropDown';
import { FaRegSadTear } from 'react-icons/fa';

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

const ProductInfo = ({ data }) => {
  const bestProduct = data;

  return (
    bestProduct && (
      <>
        <ListTitle title={`전체지역 인기 중고 거래 매물`} />
        <WholeWrapper>
          <ContentsWrapper>
            <DistrictSelectDropDown />
            <ListWrapper>
              <ProductInfoList maxWidth={1024} data={bestProduct} />
            </ListWrapper>
          </ContentsWrapper>
        </WholeWrapper>
      </>
    )
  );
};

const NoProductInfo = () => {
  return (
    <NoproductTextWrapper>
      <FaRegSadTear />
      <p>이 지역에는 등록된 매물이 없습니다!</p>
      <p>우리 동네 첫 매물을 등록해주세요!</p>
    </NoproductTextWrapper>
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

const NoproductTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0 50px 0;
  font-size: 150px;
  color: silver;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  :first-child {
    padding-bottom: 200px;
  }
  p {
    color: silver;
    font-size: 20px;
    padding-top: 10px;
  }
`;

export default ProductInfoDelay;

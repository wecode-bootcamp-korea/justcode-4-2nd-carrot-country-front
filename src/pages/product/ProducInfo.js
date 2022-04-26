import React from 'react';
import styled from 'styled-components';
import ProductInfoList from 'components/list/ProductInfoList';
import ListTitle from 'components/list/ListTitle';
import RegisterButton from 'components/buttons/RegisterButton';
import AreaTag from 'components/list/AreaTag';
import DistrictSelectDropDown from 'components/buttons/DistrictSelectDropDown';

const ProductInfo = () => {
  return (
    <>
      <ListTitle title={`인기 중고 거래 매물`} />
      <WholeWrapper>
        <ContentsWrapper>
          <DistrictSelectDropDown />
          <ListWrapper>
            <ProductInfoList maxWidth={1024} data={mockData} />
          </ListWrapper>
        </ContentsWrapper>
        <RegisterButton />
      </WholeWrapper>
    </>
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

//목데이터
const mockData = [
  {
    id: 0,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '제발 살려주세요',
    city: '서울시',
    price: '10000원',
    district: '살려동',
    interested: 4,
    chats: 10,
  },
  {
    id: 1,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '제발 살려주세요',
    city: '서울시',
    price: '10000원',
    district: '살려동',
    interested: 4,
    chats: 10,
  },
  {
    id: 2,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '제발 살려주세요',
    city: '서울시',
    price: '10000원',
    district: '살려동',
    interested: 4,
    chats: 10,
  },
  {
    id: 3,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '제발 살려주세요',
    city: '서울시',
    price: '10000원',
    district: '살려동',
    interested: 4,
    chats: 10,
  },
  {
    id: 4,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '제발 살려주세요',
    city: '서울시',
    price: '10000원',
    district: '살려동',
    interested: 4,
    chats: 10,
  },
  {
    id: 5,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '제발 살려주세요',
    city: '서울시',
    price: '10000원',
    district: '살려동',
    interested: 4,
    chats: 10,
  },
  {
    id: 6,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '제발 살려주세요',
    city: '서울시',
    price: '10000원',
    district: '살려동',
    interested: 4,
    chats: 10,
  },
  {
    id: 7,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '제발 살려주세요',
    city: '서울시',
    price: '10000원',
    district: '살려동',
    interested: 4,
    chats: 10,
  },
  {
    id: 8,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '제발 살려주세요',
    city: '서울시',
    price: '10000원',
    district: '살려동',
    interested: 4,
    chats: 10,
  },
  {
    id: 9,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '제발 살려주세요',
    city: '서울시',
    price: '10000원',
    district: '살려동',
    interested: 4,
    chats: 10,
  },
  {
    id: 10,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '제발 살려주세요',
    city: '서울시',
    price: '10000원',
    district: '살려동',
    interested: 4,
    chats: 10,
  },
  {
    id: 11,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '제발 살려주세요',
    city: '서울시',
    price: '10000원',
    district: '살려동',
    interested: 4,
    chats: 10,
  },
  {
    id: 12,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '제발 살려주세요',
    city: '서울시',
    price: '10000원',
    district: '살려동',
    interested: 4,
    chats: 10,
  },
  {
    id: 13,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '제발 살려주세요',
    city: '서울시',
    price: '10000원',
    district: '살려동',
    interested: 4,
    chats: 10,
  },
  {
    id: 14,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '제발 살려주세요',
    city: '서울시',
    price: '10000원',
    district: '살려동',
    interested: 4,
    chats: 10,
  },
  {
    id: 15,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '제발 살려주세요',
    city: '서울시',
    price: '10000원',
    district: '살려동',
    interested: 4,
    chats: 10,
  },
  {
    id: 16,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '제발 살려주세요',
    city: '서울시',
    price: '10000원',
    district: '살려동',
    interested: 4,
    chats: 10,
  },
  {
    id: 17,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '제발 살려주세요',
    city: '서울시',
    price: '10000원',
    district: '살려동',
    interested: 4,
    chats: 10,
  },
  {
    id: 18,
    imageURL:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    title: '제발 살려주세요',
    city: '서울시',
    price: '10000원',
    district: '살려동',
    interested: 4,
    chats: 10,
  },
];
export default ProductInfo;

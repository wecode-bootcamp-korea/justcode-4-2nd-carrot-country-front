import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductInfoListCard = (data, maxWidth) => {
  return (
    <CardWrapper maxWidth={maxWidth}>
      <ListCardWrapper>
        <ImageWrapper>
          <ImageItself src={data.data.imageURL} />
        </ImageWrapper>
        <ProductTitle>{data.data.title}</ProductTitle>
        <ProductPrice>{data.data.price}</ProductPrice>
        <ProductDistrict>
          {data.data.city} {data.data.district}
        </ProductDistrict>
        <InterestedWrapped>
          <Interested>
            관심 {data.data.interested} {'\u2022'}
          </Interested>

          <Chats>채팅 {data.data.chats}</Chats>
        </InterestedWrapped>
      </ListCardWrapper>
    </CardWrapper>
  );
};

export default ProductInfoListCard;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 17px;
  padding-bottom: 40px;
  width: 220px;
  height: auto;
`;

const ListCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex: none;
  width: 100%;
  margin-right: 30px;
  object-fit: contain;
  aspect-ratio: 1/1;
`;

const ImageItself = styled.img`
  display: block;
  border-radius: 15px;
  width: 100%;
  aspect-ratio: 1/1;
`;

const ProductTitle = styled.p`
  margin: 10px 0;
  font-size: 18px;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductDistrict = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const InterestedWrapped = styled.div`
  display: flex;
  color: #858e96;
  font-size: 13px;
`;

const Interested = styled.p``;

const Chats = styled.p``;

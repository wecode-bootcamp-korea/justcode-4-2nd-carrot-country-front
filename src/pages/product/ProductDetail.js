import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleCreateRoom } from 'apis/socket';
import { getProductDetail } from 'apis/product';

import UserProfile from 'components/profile/UserProfile';
import ImageSlider from 'components/slider/ImageSlider';
import {
  MainWrapper,
  InfoWrapper,
  UserInfo,
  Line,
  InfoTop,
  InfoBottom,
} from 'pages/product/ProductDetailStyle';

const user = {
  id: 2,
};

function ProductDetailDelay() {
  const location = useLocation();
  // const { productId } = location.state;
  const [product, setProduct] = useState();
  let productId = 3;

  useEffect(() => {
    getProductDetail(productId).then(data => setProduct(data.product));
  }, [productId]);

  return product ? <ProductDetail product={product} /> : '';
}

function ProductDetail(props) {
  const navigate = useNavigate();
  const { product } = props;
  const handleCallback = roomId => {
    navigate(`/chat`, { state: { roomId } });
  };

  return (
    <MainWrapper>
      <ImageSlider images={product.productImage} />
      <InfoWrapper>
        <UserInfo>
          <UserProfile user={product.user} />
          <div
            className="ChatBtn"
            onClick={() =>
              handleCreateRoom(user.id, product.id, handleCallback)
            }
          >
            <span>판매자와 채팅하기</span>
          </div>
        </UserInfo>
        <Line />
        <InfoTop>
          <h1>{product.title}</h1>
          <div>
            <span>{product.category.categoryName}</span>
            <span>2시간 전</span>
          </div>
          <div>
            <span>{product.price ? product.price + '원' : '무료나눔'}</span>
          </div>
        </InfoTop>
        <InfoBottom>
          <div
            dangerouslySetInnerHTML={{
              __html: product.description,
            }}
          />
          <div>
            <span>
              관심{' '}
              {product.productIntrested ? product.productIntrested.length : 0}
            </span>
            <span>채팅 {product.chatRoom ? product.chatRoom.length : 0}</span>
            <span>조회 {product.viewCount}</span>
          </div>
        </InfoBottom>
      </InfoWrapper>
    </MainWrapper>
  );
}

export default ProductDetailDelay;

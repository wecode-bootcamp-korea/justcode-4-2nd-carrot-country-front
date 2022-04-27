import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleCreateRoom } from 'apis/socket';
import {
  deleteIntrested,
  getProductDetail,
  updateIntrested,
} from 'apis/product';
import { UserContext } from 'context/context';
import { priceFormat } from 'utils/format';

import UserProfile from 'components/profile/UserProfile';
import ImageSlider from 'components/slider/ImageSlider';
import {
  MainWrapper,
  InfoWrapper,
  UserInfo,
  Line,
  InfoTop,
  InfoBottom,
  InfoLike,
} from 'pages/product/ProductDetailStyle';
import { BsHeartFill } from 'react-icons/bs';

function ProductDetailDelay() {
  const location = useLocation();
  const { productId } = location.state;
  const [product, setProduct] = useState();

  useEffect(() => {
    getProductDetail(productId).then(data => setProduct(data.product));
  }, [productId]);

  return product ? <ProductDetail product={product} /> : '';
}
function ProductDetail(props) {
  const navigate = useNavigate();
  const me = useContext(UserContext);
  const { product } = props;
  const [isIntrested, setIsIntrested] = useState(
    product.productIntrested.filter(item => {
      return me.id === item.user.id;
    }).length > 0
      ? true
      : false
  );

  const handleCallback = roomId => {
    navigate(`/chat`, { state: { roomId } });
  };

  const handleInterested = () => {
    if (me.id === '') {
      alert('로그인 후 이용 가능합니다.');
      return;
    }
    if (isIntrested) {
      deleteIntrested(product.id, me.id).then(data =>
        data.message === 'UNLIKED SUCEESS'
          ? setIsIntrested(false)
          : alert('오류가 발생했습니다.')
      );
    } else {
      updateIntrested(product.id, me.id).then(data =>
        data.message === 'LIKED SUCCESS'
          ? setIsIntrested(true)
          : alert('오류가 발생했습니다.')
      );
    }
  };
  return (
    <MainWrapper>
      <ImageSlider images={product.productImage} />
      <InfoWrapper>
        <UserInfo>
          <UserProfile user={product.user} />
          <div
            className="ChatBtn"
            onClick={() => handleCreateRoom(me.id, product.id, handleCallback)}
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
            <span>
              {product.price ? priceFormat(product.price) + '원' : '무료나눔'}
            </span>
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
        <InfoLike onClick={handleInterested} isIntrested={isIntrested}>
          <span>관심</span>
          <BsHeartFill />
        </InfoLike>
      </InfoWrapper>
    </MainWrapper>
  );
}

export default ProductDetailDelay;

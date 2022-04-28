import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleCreateRoom } from 'apis/socket';
import {
  deleteIntrested,
  getProductDetail,
  updateIntrested,
  getProductListBest,
  getProductList,
} from 'apis/product';
import { UserContext } from 'context/context';
import { priceFormat, timeFormat } from 'utils/format';

import UserProfile from 'components/profile/UserProfile';
import ImageSlider from 'components/slider/ImageSlider';
import GridList from 'components/list/GridList';
import Loading from 'components/loading/Loading';

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
  const myInfo = useContext(UserContext);
  const { productId } = location.state;
  const [product, setProduct] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductDetail(productId).then(data => setProduct(data.product));
    if (myInfo.id === '') {
      getProductListBest().then(data => {
        const _data = [];
        for (let i = 0; i < 6; i++) {
          const product = data.bestProduct[i];
          if (!product) {
            return;
          }
          _data.push(product);
        }
        setProducts(_data);
      });
    } else {
      getProductList().then(data => {
        const _data = [];
        for (let i = 0; i < 6; i++) {
          const product = data.productList[i];
          if (!product) {
            return;
          }
          _data.push(product);
        }
        setProducts(_data);
      });
    }
  }, [productId, myInfo.id]);

  return product ? (
    <ProductDetail product={product} products={products} />
  ) : (
    <Loading />
  );
}
function ProductDetail(props) {
  const navigate = useNavigate();
  const myInfo = useContext(UserContext);
  const { product, products } = props;
  const [isIntrested, setIsIntrested] = useState(
    product.productIntrested.filter(item => {
      return myInfo.id === item.user.id;
    }).length > 0
      ? true
      : false
  );
  const isMe = myInfo.id === product.user.id;

  const handleCallback = roomId => {
    navigate(`/chat`, { state: { roomId } });
  };

  const handleInterested = () => {
    if (myInfo.id === '') {
      alert('로그인 후 이용 가능합니다.');
      return;
    }
    if (isIntrested) {
      deleteIntrested(product.id).then(data =>
        data.message === 'UNLIKED SUCEESS'
          ? setIsIntrested(false)
          : alert('오류가 발생했습니다.')
      );
    } else {
      updateIntrested(product.id).then(data =>
        data.message === 'LIKED SUCCESS'
          ? setIsIntrested(true)
          : alert('오류가 발생했습니다.')
      );
    }
  };
  console.log(product);
  return (
    <MainWrapper>
      <ImageSlider images={product.productImage} />
      <InfoWrapper>
        <UserInfo>
          <UserProfile user={product.user} />
          {!isMe && (
            <div
              className="ChatBtn"
              onClick={() =>
                handleCreateRoom(myInfo.id, product.id, handleCallback)
              }
            >
              <span>판매자와 채팅하기</span>
            </div>
          )}
        </UserInfo>
        <Line />
        <InfoTop>
          <h1>{product.title}</h1>
          <div>
            <span>{product.category.categoryName}</span>
            <span>{timeFormat(product.createdAt)}</span>
          </div>
          <div>
            <span>{priceFormat(product.price)}</span>
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
        <InfoLike isIntrested={isIntrested}>
          <span>관심</span>
          <BsHeartFill onClick={handleInterested} />
        </InfoLike>
      </InfoWrapper>
      {products.length > 0 && <GridList data={products} />}
    </MainWrapper>
  );
}

export default ProductDetailDelay;

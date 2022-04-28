import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from 'context/context';
import { SERVER_PORT } from 'config';

import styled from 'styled-components';
import { priceFormat } from 'utils/format';
import { useNavigate } from 'react-router-dom';

function GridList({ data }) {
  const myInfo = useContext(UserContext);
  const navigate = useNavigate();
  const [useWidth, setUseWidth] = useState(
    window.innerWidth > 890 ? 0 : window.innerWidth
  );
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setUseWidth(window.innerWidth);
  };

  const handleNavigate = productId => {
    navigate(`/product/detail`, { state: { productId } });
  };
  return (
    <GridMain>
      <Header>
        {myInfo.id === '' ? <h2>인기매물</h2> : <h2>우리동네 매물</h2>}
      </Header>
      <Content width={useWidth}>
        {data.map(item => {
          return (
            <div
              key={item.id}
              className="ItemWrapper"
              onClick={() => handleNavigate(item.id)}
            >
              <div className="imageWrapper">
                <img
                  alt="productImage"
                  src={`${SERVER_PORT}/${item.productImage[0].imageUrl}`}
                />
              </div>
              <div className="infoWrapper">
                <div>
                  <span>{item.title}</span>
                </div>
                <div>
                  <span>{priceFormat(item.price)}</span>
                </div>
                <div>
                  <span>
                    {item.city.cityName} {item.district.districtName}
                  </span>
                </div>
                <div>
                  <span>관심 {item.productIntrested.length}</span>
                  {'\u2022'}
                  <span>채팅{item.chatRoom.length}</span>
                </div>
              </div>
            </div>
          );
        })}
      </Content>
    </GridMain>
  );
}

const GridMain = styled.section`
  @media (max-width: 690px) {
    padding: 0px 15px;
  }
  @media (min-width: 691px) and (max-width: 890px) {
    padding: 0px 15px;
  }
  @media (min-width: 891px) {
    width: 677px;
    margin: 0px auto;
  }
`;
const Header = styled.div`
  margin-bottom: 20px;
  h2 {
    font-size: 20px;
    font-weight: 600;
  }
`;
const Content = styled.div`
  @media (max-width: 630px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .ItemWrapper {
      margin-bottom: 50px;
      margin-right: 10px;

      .imageWrapper {
        width: 100%;
        max-height: 220px;
      }
    }
  }
  @media (min-width: 631px) and (max-width: 690px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .ItemWrapper {
      margin: 0px auto 50px;
      .imageWrapper {
        width: 300px;
        height: 300px;
      }
    }
  }
  @media (min-width: 691px) and (max-width: 890px) {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    .ItemWrapper {
      margin: 0px auto 50px;
      .imageWrapper {
        width: 200px;
        height: 200px;
      }
    }
  }
  @media (min-width: 891px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .ItemWrapper {
      margin-bottom: 50px;
      .imageWrapper {
        width: 200px;
        height: 200px;
      }
    }
  }

  .ItemWrapper {
    display: flex;
    flex-direction: column;
    cursor: pointer;

    .imageWrapper {
      overflow: hidden;
      border: 0.5px solid #ccc;
      border-radius: 15px;
      img {
        width: 100%;
      }
    }
    .infoWrapper {
      div:nth-child(1) {
        margin-top: 20px;
      }
      div:nth-child(2) {
        margin-top: 14px;
        font-weight: bold;
      }
      div:nth-child(3) {
        margin-top: 10px;
        font-size: 13px;
      }
      div:nth-child(4) {
        margin-top: 8px;
        font-size: 13px;
        color: #999;
        span:nth-child(1) {
          margin-right: 4px;
        }
        span:nth-child(2) {
          margin-left: 6px;
        }
      }
    }
  }
`;

export default GridList;

import React from 'react';
import styled from 'styled-components';
import { FaRegSadTear } from 'react-icons/fa';

const NoProductInfo = () => {
  return (
    <NoproductTextWrapper>
      <FaRegSadTear />
      <p>이 지역에는 등록된 매물이 없습니다!</p>
      <p>우리 동네 첫 매물을 등록해주세요!</p>
    </NoproductTextWrapper>
  );
};

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

export default NoProductInfo;

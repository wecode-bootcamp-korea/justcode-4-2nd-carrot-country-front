import styled from 'styled-components';
import ProductInfoListCard from './ProductInfoListCard';

function ProductInfoList({ maxWidth, data }) {
  return (
    <AllWrapper maxWidth={maxWidth}>
      <ListWrapper>
        {data.map(data => (
          <ProductInfoListCard key={data.id} data={data} maxWidth={maxWidth} />
        ))}
        {maxWidth === 800 && <MoreView> 더보기 </MoreView>}
      </ListWrapper>
    </AllWrapper>
  );
}

export default ProductInfoList;

const AllWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid red;
  width: 100%;
  max-width: 1024px;
  /* //스마트폰
  @media (max-width: 690px) {
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    width: 800px;
  }
  // 모니터
  @media (min-width: 891px) {
    width: 1024px;
  } */
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
`;

const MoreView = styled.button`
  display: flex;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  width: max-content;
  background-color: transparent;
  color: #858e96;
  font-size: 16px;
`;

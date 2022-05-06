import styled from 'styled-components';
import NoProductInfo from './NoProductInfo';
import ProductInfoListCard from './ProductInfoListCard';

function ProductInfoList(props) {
  const { maxWidth, data } = props;
  return (
    <AllWrapper>
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
  display: grid;
  justify-content: center;
  width: 100%;
`;

const ListWrapper = styled.div`
  display: grid;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: white;
  @media (max-width: 690px) {
    grid-template-columns: 1fr 1fr;
    max-width: 600px;
    min-width: 350px;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    width: 690px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  // 모니터
  @media (min-width: 891px) {
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
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

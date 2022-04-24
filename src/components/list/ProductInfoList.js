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
  width: 1024px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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

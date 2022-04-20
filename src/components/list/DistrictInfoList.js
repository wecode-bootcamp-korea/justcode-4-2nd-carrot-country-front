import styled from 'styled-components';
import DistrictInfoCard from './DistrictInfoCard';

function DistrictInfoList({ maxWidth, data }) {
  return (
    <ListWrapper maxWidth={maxWidth}>
      {data.map(data => (
        <DistrictInfoCard key={data.id} data={data} maxWidth={maxWidth} />
      ))}
      {maxWidth === 800 && <MoreView> 더보기 </MoreView>}
    </ListWrapper>
  );
}

export default DistrictInfoList;

const ListWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  ${props => props.maxWidth === 800 && 'border: 1px solid #e9ecef;'}
  ${props => props.maxWidth === 800 && 'border-radius: 0.3rem;'}
  padding-top: 20px;
  max-width: ${props => `${props.maxWidth}px`};
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

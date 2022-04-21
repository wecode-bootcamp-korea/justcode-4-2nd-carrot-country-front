import styled from 'styled-components';
import { FaRegComment } from 'react-icons/fa';

function DistrictInfoCard({ data, maxWidth }) {
  return (
    <Size maxWidth={maxWidth}>
      <CardWrapper>
        {data.imageUrl && (
          <Image maxWidth={maxWidth}>
            <img src={data.imageUrl} alt={data.id} />
          </Image>
        )}
        <TextWrapper>
          <Title>{data.title}</Title>
          <Content>
            {data.content.length > 120
              ? `${data.content.slice(0, 120)}...`
              : data.content}
          </Content>
          <AreaWrapper>{`${data.city} ${data.district}`}</AreaWrapper>
        </TextWrapper>
        <CommentCount>
          <FaRegComment />
          {data.commentCount}
        </CommentCount>
      </CardWrapper>
    </Size>
  );
}

export default DistrictInfoCard;

const Size = styled.div`
  display: flex;
  width: ${props => props.maxWidth};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  border-bottom: 1px solid #e9ecef;
  margin: 10px 40px;
  padding: 20px 0;
  width: 100%;
`;

const Image = styled.div`
  display: flex;
  flex: none;
  margin-right: 30px;
  width: ${props => (props.maxWidth === 1024 ? '150px' : '120px')};
  height: ${props => (props.maxWidth === 1024 ? '150px' : '120px')};
  object-fit: contain;
  img {
    display: block;
    border-radius: 0.5rem;
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  padding: 10px 0px;
`;

const Title = styled.p`
  line-height: 24px;
  font-size: 18px;
  font-weight: 700;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

const AreaWrapper = styled.p`
  color: #858e96;
  line-height: 40px;
  font-size: 14px;
`;

const CommentCount = styled.div`
  position: absolute;
  bottom: 40px;
  right: 10px;
  display: flex;
  color: #858e96;
  font-size: 14px;

  * {
    margin-right: 5px;
  }
`;

import styled from 'styled-components';
import theme from 'styles/theme';
import { BiMap } from 'react-icons/bi';

function AreaTag({ city, district }) {
  return (
    <Size>
      <Area>
        <BiMap />
        {`${city} ${district}`}
      </Area>
    </Size>
  );
}

export default AreaTag;

const Size = styled.div`
  display: flex;
  justify-content: end;
  margin: auto;
  padding: 0 50px;
  max-width: 1024px;
`;

const Area = styled.span`
  display: flex;
  padding: 5px;
  color: ${theme.signColor};
  font-size: 19px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

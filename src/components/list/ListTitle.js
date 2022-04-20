import styled from 'styled-components';

function ListTitle({ title }) {
  return <TitleWrapper>{title}</TitleWrapper>;
}

export default ListTitle;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 180px;
  padding-bottom: 50px;
  letter-spacing: -2px;
  font-size: 32px;
  font-weight: 500;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

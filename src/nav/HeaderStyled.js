import styled from 'styled-components';
import theme from 'styles/theme';
import 'styles/fonts.css';

const HeaderSize = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Noto Sans KR', sans-serif;
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  max-width: 1024px;
  width: 100%;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  font-family: 'ImcreSoojin';
  color: ${theme.signColor};
  cursor: pointer;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-right: auto;
  padding-right: 10px;
  border: 1px solid ${props => (props.isFocus ? 'black' : '#E9ECEF')};
  border-radius: 5px;
  width: 300px;
`;

const SearchBar = styled.input`
  border: none;
  border-radius: 5px;
  margin: 8px 0 8px 10px;
  font-size: 16px;
  width: 100%;
  color: gray;

  :focus {
    outline: none;
    color: black;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  cursor: pointer;

  li {
    padding: 5px;
    color: #4d5159;
    width: max-content;
  }
`;

const ChatButton = styled.button`
  margin-left: 20px;
  padding: 8px 30px;
  border: 1px solid #d0d3d8;
  border-radius: 0.3rem;
  width: max-content;
  background-color: transparent;
  color: #4d5159;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export {
  HeaderSize,
  HeaderWrapper,
  LogoWrapper,
  SearchBarWrapper,
  SearchBar,
  NavMenu,
  ChatButton,
};

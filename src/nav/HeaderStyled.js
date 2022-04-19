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
  padding: 15px 5px;
  max-width: 1024px;
  width: 100%;

  @media (max-width: 690px) {
  }

  @media (min-width: 691px) and (max-width: 890px) {
  }

  @media (min-width: 891px) {
  }
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
  @media (max-width: 690px) {
  }

  @media (min-width: 691px) and (max-width: 890px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    list-style: none;
    cursor: pointer;

    li {
      display: ${props => (props.isButtonClicked ? 'flex' : 'none')};
      flex-direction: column;
      padding: 5px;
      color: #4d5159;
      width: max-content;
    }
  }

  @media (min-width: 891px) {
    display: flex;
    list-style: none;
    cursor: pointer;

    li {
      padding: 5px;
      color: #4d5159;
      width: max-content;
    }
  }
`;

const NavButton = styled.button`
  @media (max-width: 690px) {
  }

  @media (min-width: 691px) and (max-width: 890px) {
    border: none;
    padding-top: 5px;
    background-color: transparent;
    color: ${theme.signColor};
    font-size: 20px;
    font-weight: bold;
  }

  @media (min-width: 891px) {
    display: none;
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
  NavButton,
  ChatButton,
};

import styled from 'styled-components';

const FooterSize = styled.div`
  display: ${props => (props.pathname === '/chat' ? 'none' : 'flex')};
  padding: 80px 8px;
  background-color: #495057;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  z-index: 0;
`;

const FooterWrap = styled.div`
  margin: auto;
  @media (max-width: 690px) {
  }

  @media (min-width: 691px) and (max-width: 890px) {
  }

  @media (min-width: 891px) {
    max-width: 1024px;
    min-width: 891px;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid silver;
  width: 100%;
  @media (max-width: 690px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LogoWrapper = styled.div`
  filter: brightness(0) invert(1);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  color: silver;

  p {
    padding-bottom: 20px;
    font-weight: bold;
  }

  @media (max-width: 690px) {
    flex-direction: row;
    p {
      padding: 10px;
      padding-bottom: 20px;
      font-weight: bold;
    }
  }

  @media (min-width: 691px) and (max-width: 890px) {
  }

  @media (min-width: 891px) {
  }
`;

const LinkToGitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  a {
    padding-bottom: 20px;
    text-decoration: none;
    color: white;
    font-weight: 100;
  }

  @media (max-width: 690px) {
    flex-direction: row;
    a {
      padding: 0 10px;
      padding-bottom: 20px;
      text-decoration: none;
      color: white;
      font-weight: 100;
    }
  }
`;

const MoreInfoFooterWrapeer = styled.div`
  padding-top: 50px;
  font-size: 14px;
  color: silver;
  @media (max-width: 690px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 13px;
  }
`;

const EmailsWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const EmailTitle = styled.span`
  padding-right: 10px;
  font-weight: 700;
`;

const Email = styled.span`
  padding-right: 10px;
  font-weight: 100;
`;

const Icons = styled.div``;

const License = styled.div`
  padding: 10px 0;
`;

export {
  FooterSize,
  FooterWrap,
  FooterWrapper,
  LogoWrapper,
  Info,
  LinkToGitWrapper,
  MoreInfoFooterWrapeer,
  EmailsWrapper,
  EmailTitle,
  Email,
  Icons,
  License,
};

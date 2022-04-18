import styled from 'styled-components';

const FooterSize = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #495057;
`;

const FooterWrapper = styled.div`
  display: flex;
  margin: auto;
  padding-top: 50px;
  border-bottom: 1px solid white;
  max-width: 1024px;
  width: 100%;

  font-family: 'Noto Sans KR', sans-serif;
`;

const LogoWrapper = styled.div`
  filter: brightness(0) invert(1);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  color: white;

  p {
    padding-bottom: 20px;
    font-weight: bold;
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
    font-weight: lighter;
  }
`;

const MoreInfoFooterWrapeer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1024px;
`;

const EmailsWrapper = styled.div``;

const EmailTitle = styled.span``;

const Email = styled.span``;

const Icons = styled.div``;

const License = styled.div``;

export {
  FooterSize,
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

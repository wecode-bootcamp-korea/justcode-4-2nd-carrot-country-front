import styled from 'styled-components';

const FooterSize = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 80px 0;
  background-color: #495057;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const FooterWrap = styled.div`
  width: 1024px;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid silver;
  width: 100%;
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
`;

const MoreInfoFooterWrapeer = styled.div`
  padding-top: 50px;
  font-size: 14px;
  color: silver;
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

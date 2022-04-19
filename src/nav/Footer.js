import React from 'react';
import { CLIENT_PORT } from 'config';
import {
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
} from './FooterStyled';

function Footer() {
  return (
    <FooterSize>
      <FooterWrap>
        <FooterWrapper>
          <LogoWrapper>
            <img
              src={`${CLIENT_PORT}/images/logo/logo2.png`}
              alt="logo"
              width="120px"
            />
          </LogoWrapper>
          <Info>
            <p>믿을 수 있는 중고거래</p>
            <p>자주 묻는 질문</p>
          </Info>
          <LinkToGitWrapper>
            <a href="https://velog.io/@damdaridam">김다미</a>
            <a href="https://chaeoff.medium.com/">서채원</a>
            <a href="https://devshon.github.io/">손성호</a>
            <a href="https://velog.io/@xcc629">임근홍</a>
            <a href="https://velog.io/@hahan">한서연</a>
          </LinkToGitWrapper>
        </FooterWrapper>
        <MoreInfoFooterWrapeer>
          <EmailsWrapper>
            <EmailTitle>고객문의</EmailTitle>
            <Email>tmkim@sunnywt.com</Email>
            <EmailTitle>제휴문의</EmailTitle>
            <Email>cwsuh95@gmail.com</Email>
          </EmailsWrapper>
          <EmailsWrapper>
            <EmailTitle>지역광고</EmailTitle>
            <Email>wjdgns200297@gmail.com</Email>
            <EmailTitle>PR문의</EmailTitle>
            <Email>seelime11@gmail.com</Email>
            <EmailTitle>총괄문의</EmailTitle>
            <Email>tjdus08245@gmail.com</Email>
          </EmailsWrapper>
          <License>
            https://github.com/wecode-bootcamp-korea/justcode-4-2nd-carrot-country-front
          </License>
          <License>
            https://github.com/wecode-bootcamp-korea/justcode-4-2nd-carrot-country-back
          </License>
        </MoreInfoFooterWrapeer>
      </FooterWrap>
    </FooterSize>
  );
}

export default Footer;

import React from 'react';
import { CLIENT_PORT } from 'config';
import { MainWrapper, TopArticle, BottomArticle } from 'pages/main/MainStyle';
import { useNavigate } from 'react-router';

function Main() {
  const navigate = useNavigate();

  function handleNavigate(path) {
    navigate(path);
  }

  return (
    <MainWrapper>
      <TopArticle>
        <section>
          <h1>당신 근처의</h1>
          <h1>당근 마켓</h1>
          <p>중고 거래부터 동네 정보까지, 이웃과 함께해요.</p>
          <span>가깝고 따뜻한 당신의 근처를 만들어요.</span>
        </section>
        <section>
          <img src={`${CLIENT_PORT}/images/thump/banner-a.png`} alt="banner" />
        </section>
      </TopArticle>
      <BottomArticle>
        <section>
          <img src={`${CLIENT_PORT}/images/thump/banner-b.png`} alt="banner" />
        </section>
        <section>
          <h1>우리동네</h1>
          <h1>중고 직거래 마켓</h1>
          <p>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.</p>
          <div>
            <button onClick={() => handleNavigate('/')}>인기매물 보기</button>
            <button onClick={() => handleNavigate('/')}>동네 정보 보기</button>
          </div>
        </section>
      </BottomArticle>
    </MainWrapper>
  );
}

export default Main;

import React from "react";
import { CLIENT_PORT } from "config";
import { MainWrapper, TopArticle, BottomArticle } from "pages/MainStyles";
import { useNavigate } from "react-router";

function Main() {
  const navigate = useNavigate();

  function handleNavigate(path) {
    navigate(path);
  }

  return (
    <MainWrapper>
      <TopArticle>
        <img src={`${CLIENT_PORT}/images/thump/banner-a.png`} alt="banner" />
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
            <button onClick={() => handleNavigate("/")}>인기매물 보기</button>
            <button onClick={() => handleNavigate("/")}>동네 정보 보기</button>
          </div>
        </section>
      </BottomArticle>
    </MainWrapper>
  );
}

export default Main;

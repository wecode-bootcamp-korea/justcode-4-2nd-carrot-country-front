import React from 'react';
import UserProfile from 'components/profile/UserProfile';
import { FaRegSmileWink } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsChatSquareDots } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { BiCog } from 'react-icons/bi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';

import styled from 'styled-components';

const user = {
  id: '1',
  nickname: '헛개수',
  city: '부산',
  district: '중구',
};

function Mypage() {
  return (
    <MainWrapper>
      <InfoWrapper>
        <UserInfo>
          <UserProfile user={user} />
          <BiCog className="bicog" />
        </UserInfo>
        <Line />
        <div className="mannerTemp">
          매너온도
          <AiOutlineQuestionCircle className="question" />
        </div>
        <div className="temp">
          68.2℃ <FaRegSmileWink className="smile" />
        </div>
        <div className="progress-bar">
          <div className="progress">
            <p>.</p>
          </div>
        </div>
        <UserBox>
          <div>
            <AiOutlineHeart className="userBoxIcons" />
            재거래 희망률 <span>100%</span>
            <p>5명 중 5명이 만족</p>
          </div>
          <div className="userBoxSecond">
            <BsChatSquareDots className="userBoxIcons" />
            응답<span>99%</span>
            <p>보통 1시간 이내 응답</p>
          </div>
        </UserBox>
      </InfoWrapper>
      <UserLife>
        <div>
          판매상품 <IoIosArrowForward className="rightArrow" />
        </div>
        <div>
          동네생활 <IoIosArrowForward className="rightArrow" />
        </div>
      </UserLife>
      <UserEstimation>
        <div className="estimateTitle">
          받은 매너평가 <IoIosArrowForward className="rightArrow" />
        </div>
        <div className="estimateBox">
          <div>
            <BsPeopleFill className="people" />
            <span className="estimate">시간 약속을 잘 지켜요.</span>
          </div>
          <div>
            <BsPeopleFill className="people" />
            <span className="estimate">친절하고 매너가 좋아요.</span>
          </div>
          <div>
            <BsPeopleFill className="people" />
            <span className="estimate">응답이 빨라요.</span>
          </div>
        </div>
      </UserEstimation>
      <UserChat>
        <div className="ChatBtn">
          <span>판매자와 채팅하기</span>
        </div>
      </UserChat>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 70px;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .bicog {
    font-size: 20px;
  }
`;

const InfoWrapper = styled.div`
  @media (max-width: 890px) {
    padding: 0px 15px;
  }
  @media (min-width: 891px) {
    width: 677px;
    margin: 0px auto;
  }

  .mannerTemp {
    display: inline-block;
    margin-left: 3px;
    color: gray;
    font-size: 13px;
  }
  .temp {
    /* float: right; */
    display: flex;
    align-items: center;
    margin-left: 85%;
    margin-bottom: 5px;
    font-size: 18px;
    color: #319e45;
  }
  .smile {
    font-size: 25px;
    margin-left: 5px;
  }
  .progress-bar {
    width: 100%;
    height: 19px;
    background-color: #dedede;
    font-weight: 600;
    font-size: 12px;
    border-radius: 25px;
    margin-bottom: 30px;
  }

  .progress-bar .progress {
    width: 68.2%;
    height: 19px;
    padding: 0;
    /* text-align: center; */
    background-color: #319e45;
    color: #111;
    border-radius: 25px;
  }
  .progress > p {
    color: #319e45;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid #99999940;
  margin-bottom: 20px;
`;

const UserBox = styled.div`
  @media (max-width: 500px) {
    padding: 20px 30px 20px 20px;
  }
  @media (min-width: 891px) {
    width: 677px;
  }
  padding: 25px 35px 25px 25px;
  border-radius: 3px;
  background-color: whitesmoke;
  div {
    display: inline-block;
  }
  div > span {
    margin-left: 3px;
    font-weight: 600;
  }
  .userBoxSecond {
    float: right;
    /* margin-left: 40%; */
  }
  .userBoxIcons {
    font-size: 18px;
    margin: 0px 4px 0px 0px;
  }
  p {
    padding: 10px 0px 0px 15px;
    color: gray;
    font-size: 12px;
  }
`;

const UserLife = styled.div`
  @media (max-width: 890px) {
    padding: 0px 15px;
  }
  @media (min-width: 891px) {
    width: 677px;
    margin: 0px auto;
  }
  div {
    padding: 23px;
    border-bottom: 1px solid #99999940;
  }
  .rightArrow {
    font-size: 20px;
    float: right;
  }
`;

const UserEstimation = styled.div`
  @media (max-width: 890px) {
    padding: 23px 15px 0px 15px;
  }
  @media (min-width: 891px) {
    padding: 23px 0px;
    width: 677px;
    margin: 0px auto;
  }
  /* div {
    padding: 23px;
  } */
  .estimateTitle {
    padding: 0px 23px 5px 23px;
  }
  /* .comment {
    font-size: 10px;
    color: gray;
  } */
  .rightArrow {
    font-size: 20px;
    float: right;
  }
  .estimateBox {
    margin: 23px;
    width: 300px;
  }
  .people {
    margin-right: 10px;
    /* color: #adadad; */
  }
  .estimate {
    display: inline-block;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 13px;
    background-color: #f5f5f5;
  }
`;

const UserChat = styled.div`
  margin: 30px;
  @media (max-width: 890px) {
    padding: 0px 15px;
  }
  @media (min-width: 891px) {
    width: 677px;
    margin: 30px auto;
  }
  .ChatBtn {
    border: 1px solid ${props => props.theme.signColor};
    border-radius: 50px;
    padding: 15px 20px;
    cursor: pointer;
    :hover {
      background-color: ${props => props.theme.signColor};
      span {
        color: #ffff;
      }
    }
    span {
      color: ${props => props.theme.signColor};
    }
  }
`;

export default Mypage;

import React from 'react';
import { CLIENT_PORT } from 'config';

import styled from 'styled-components';

function UserProfile(props) {
  const { user } = props;
  console.log(user);
  const userImage = user.userImage
    ? user.userImage
    : '/images/profile/userImageNotFound.png';

  const cityName = user.city.cityName ? user.city.cityName : user.city;
  const districtName = user.district.districtName
    ? user.district.districtName
    : user.district;

  return (
    <MainWrapper>
      <picture>
        <img src={CLIENT_PORT + userImage} alt="user" />
      </picture>
      <div>
        <span>{user.nickname}</span>
        <span>
          {cityName} {districtName}
        </span>
      </div>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: flex;
  padding: 20px 0px;
  cursor: pointer;
  :hover {
    div {
      span:nth-child(1) {
        border-bottom: 1.5px solid;
      }
    }
  }
  picture {
    border-radius: 100%;
    overflow: hidden;
    img {
      width: 44px;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 8px;
    span:nth-child(1) {
      width: fit-content;
      height: 15px;
      font-size: 15px;
      font-weight: 600;
    }
    span:nth-child(2) {
      margin-top: 4px;
      font-size: 13px;
      font-weight: 300;
    }
  }
`;

export default UserProfile;

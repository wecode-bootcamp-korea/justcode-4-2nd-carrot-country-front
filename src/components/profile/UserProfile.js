import React from 'react';
import { CLIENT_PORT } from 'config';

import { MainWrapper } from 'components/profile/UserProfileStyle';

function UserProfile(props) {
  const { user } = props;
  const userImage = user
    ? user.userImage
    : '/images/profile/userImageNotFound.png';

  return (
    <MainWrapper>
      <picture>
        <img src={CLIENT_PORT + userImage} alt="user" />
      </picture>
      <div>
        <span>userName</span>
        <span>Address</span>
      </div>
    </MainWrapper>
  );
}

export default UserProfile;

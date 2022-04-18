import React from 'react';
import { CLIENT_PORT } from 'config';

function Header() {
  return (
    <div>
      Header
      <img
        src={`${CLIENT_PORT}/images/logo/logo.png`}
        alt="logo"
        width="24px"
      />
    </div>
  );
}

export default Header;

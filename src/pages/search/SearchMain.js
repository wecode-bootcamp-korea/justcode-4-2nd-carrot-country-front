import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchMain() {
  const location = useLocation();
  const { keyword } = location.state;
  return <div style={{ padding: '70px' }}>{keyword}</div>;
}

export default SearchMain;

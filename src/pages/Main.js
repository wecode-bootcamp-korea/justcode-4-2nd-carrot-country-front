import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import List from 'components/List';

import styled from 'styled-components';

function Main() {
  const userStore = useSelector(state => state.user);
  return (
    <Section>
      Main {userStore.name}
      <Link to="/login">Login 이동</Link>
      <List />
    </Section>
  );
}

const Section = styled.div`
  background-color: ${props => props.theme.signColor};
`;

export default Main;

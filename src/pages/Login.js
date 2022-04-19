import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch = useDispatch();

  const handleSignup = () => {
    dispatch({ type: 'LOGIN', params: { id: '1', name: '홍길동' } });
  };

  return (
    <div>
      <button
        onClick={() => {
          handleSignup();
        }}
      >
        Login
      </button>
      <Link to="/">Main</Link>
    </div>
  );
}

export default Login;

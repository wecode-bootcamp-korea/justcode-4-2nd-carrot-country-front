import { SERVER_PORT } from 'config';

async function duplicateIdCheck(userId) {
  return await fetch(`${SERVER_PORT}/users/signup/duplicate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: userId,
    }),
  })
    .then(res => res.json())
    .then(data => data);
}

async function signupUser(userId, nickname, password, cityId, districtId) {
  return await fetch(`${SERVER_PORT}/users/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      nickname,
      password,
      cityId,
      districtId,
    }),
  })
    .then(res => res.json())
    .then(data => data);
}

async function loginUser(userId, password) {
  return await fetch(`${SERVER_PORT}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      password,
    }),
  })
    .then(res => res.json())
    .then(data => data);
}

async function getUserByToken(token) {
  return await fetch(`${SERVER_PORT}/users/auth`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      token,
    },
  })
    .then(res => res.json())
    .then(data => data);
}

export { duplicateIdCheck, signupUser, loginUser, getUserByToken };

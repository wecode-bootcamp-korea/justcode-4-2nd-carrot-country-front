import { SERVER_PORT } from 'config';

export async function getCommentList() {
  return await fetch(`${SERVER_PORT}/infos`, {
    headers: {
      token: localStorage.getItem('token') || sessionStorage.getItem('token'),
    },
  })
    .then(res => res.json())
    .then(result => result);
}

export async function getCommentDetail(commentInfoId) {
  return await fetch(`${SERVER_PORT}/infos/comment${commentInfoId}`)
    .then(res => res.json())
    .then(result => result);
}

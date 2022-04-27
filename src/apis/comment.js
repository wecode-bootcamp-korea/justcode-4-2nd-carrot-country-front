import { SERVER_PORT } from 'config';

export async function getCommentList() {
  return await fetch(`${SERVER_PORT}/infos/comment/infold`, {
    headers: {
      token: localStorage.getItem('token') || sessionStorage.getItem('token'),
    },
  })
    .then(res => res.json())
    .then(result => result);
}

export async function getCommentDetail(infoCommentsId) {
  return await fetch(`${SERVER_PORT}/infos/comment/${infoCommentsId}`)
    .then(res => res.json())
    .then(result => result);
}

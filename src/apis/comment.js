import { SERVER_PORT } from 'config';

export async function getCommentList(infoCommentsId) {
  return await fetch(`${SERVER_PORT}/infos/${infoCommentsId}/comment`, {
    headers: {
      token: localStorage.getItem('token') || sessionStorage.getItem('token'),
    },
  })
    .then(res => res.json())
    .then(result => result);
}

import { SERVER_PORT } from 'config';

export async function postComment(districtInfoId, comment) {
  return await fetch(`${SERVER_PORT}/infos/${districtInfoId}/comment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token') || sessionStorage.getItem('token'),
    },
    body: JSON.stringify({ comment: comment }),
  })
    .then(res => res.json())
    .then(result => result);
}

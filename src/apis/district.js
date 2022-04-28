import { SERVER_PORT } from 'config';

export async function getDistrictList() {
  return await fetch(`${SERVER_PORT}/infos`, {
    headers: {
      token: localStorage.getItem('token') || sessionStorage.getItem('token'),
    },
  })
    .then(res => res.json())
    .then(result => result);
}

export async function getDistrictDetail(districtInfoId) {
  return await fetch(`${SERVER_PORT}/infos/${districtInfoId}`)
    .then(res => res.json())
    .then(result => result);
}

export async function postDistrict(allContents, imageResult) {
  return await fetch(`${SERVER_PORT}/infos`, {
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token') || sessionStorage.getItem('token'),
    },
    method: 'POST',
    body: JSON.stringify({
      ...allContents,
    }),
  })
    .then(res => res.json())
    .then(data =>
      fetch(`${SERVER_PORT}/infos/images`, {
        method: 'POST',
        headers: {
          token:
            localStorage.getItem('token') || sessionStorage.getItem('token'),
        },
        body: imageResult,
      })
        .then(res => res.json())
        .then(data => data)
    );
}

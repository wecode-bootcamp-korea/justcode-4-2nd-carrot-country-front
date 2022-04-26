import { SERVER_PORT } from 'config';

export async function getDistrictList() {
  return await fetch(`${SERVER_PORT}/infos`)
    .then(res => res.json())
    .then(result => result);
}

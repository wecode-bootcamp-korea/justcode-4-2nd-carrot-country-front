import { SERVER_PORT } from 'config';

async function getCities() {
  return await fetch(`${SERVER_PORT}/area/city`)
    .then(res => res.json())
    .then(data => data);
}

async function getDistricts(cityId) {
  return await fetch(`${SERVER_PORT}/area/district/${cityId}`)
    .then(res => res.json())
    .then(data => data);
}

export { getCities, getDistricts };

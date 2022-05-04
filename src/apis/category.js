import { SERVER_PORT } from 'config';

const getCities = async () => {
  return await fetch(`${SERVER_PORT}/area/city`, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(data => data);
};

const getDistricts = async selectedCity => {
  console.log('api내에서>>', selectedCity);
  return await fetch(`${SERVER_PORT}/area/district/${selectedCity}`, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(data => data);
};

export { getCities, getDistricts };

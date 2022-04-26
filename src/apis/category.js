import { SERVER_PORT } from 'config';

const getCities = async () => {
  return await fetch(`${SERVER_PORT}/area/city`, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(data => data);
};

const getDistricts = async cities => {
  console.log('api내에서>>', cities.selectedCity);
  return await fetch(`${SERVER_PORT}/area/district/${cities}`, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(data => data);
};

export { getCities, getDistricts };

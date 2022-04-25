import { SERVER_PORT } from 'config';

async function getProductDetail(productId) {
  return await fetch(`${SERVER_PORT}/products/${productId}`)
    .then(res => res.json())
    .then(data => data);
}

export { getProductDetail };

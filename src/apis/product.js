import { SERVER_PORT } from 'config';

async function getProductDetail(productId) {
  return await fetch(`${SERVER_PORT}/products/${productId}`)
    .then(res => res.json())
    .then(data => data);
}

function postProduct(allContents) {
  console.log(allContents);
  fetch(`${SERVER_PORT}/products`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      allContents,
    }),
  })
    .then(res => res.json())
    .then(result => {});
}
function postImage(props) {
  console.log('postImage >>', props);
  fetch(`${SERVER_PORT}/products/images`, {
    method: 'POST',
    headers: { 'Content-Type': 'multiple/form-data' },
    body: JSON.stringify({
      imageURLs: props.imageURLs,
    }),
  })
    .then(res => res.json())
    .then(result => {});
}
export { getProductDetail, postProduct, postImage };

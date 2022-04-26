import { SERVER_PORT } from 'config';

async function getProductList() {
  return await fetch(`${SERVER_PORT}/products`, {
    headers: {
      token: localStorage.getItem('token') || sessionStorage.getItem('token'),
    },
  })
    .then(res => res.json())
    .then(data => data);
}

async function getProductListBest() {
  return await fetch(`${SERVER_PORT}/products/best`)
    .then(res => res.json())
    .then(data => data);
}

async function getProductDetail(productId) {
  return await fetch(`${SERVER_PORT}/products/${productId}`)
    .then(res => res.json())
    .then(data => data);
}

function postProduct(allContents) {
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

async function updateIntrested(productId, userId) {
  return await fetch(`${SERVER_PORT}/products/${productId}/interested`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      productId,
      userId,
    }),
  })
    .then(res => res.json())
    .then(data => data);
}

async function deleteIntrested(productId, userId) {
  return await fetch(`${SERVER_PORT}/products/${productId}/unInterested`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      productId,
      userId,
    }),
  })
    .then(res => res.json())
    .then(data => data);
}

export {
  getProductList,
  getProductListBest,
  getProductDetail,
  postProduct,
  postImage,
  updateIntrested,
  deleteIntrested,
};

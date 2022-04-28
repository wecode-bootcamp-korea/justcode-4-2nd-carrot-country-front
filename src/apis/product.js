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

async function postProduct(allContents, imageResult) {
  return await fetch(`${SERVER_PORT}/products`, {
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
      fetch(`${SERVER_PORT}/products/images`, {
        method: 'POST',
        headers: {
          // 'Content-Type': 'multipart/form-data',
          token:
            localStorage.getItem('token') || sessionStorage.getItem('token'),
        },
        body: imageResult,
      })
        .then(res => res.json())
        .then(data => data)
    );
}

// function postImage(props) {
//   fetch(`${SERVER_PORT}/products/images`, {
//     method: 'POST',
//     headers: {
//       // 'Content-Type': 'multipart/form-data',
//       token: localStorage.getItem('token') || sessionStorage.getItem('token'),
//     },
//     body: props,
//   })
//     .then(res => res.json())
//     .then(data => console.log(data));
// }

async function updateIntrested(productId) {
  return await fetch(`${SERVER_PORT}/products/${productId}/interested`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token') || sessionStorage.getItem('token'),
    },
    body: JSON.stringify({
      productId,
    }),
  })
    .then(res => res.json())
    .then(data => data);
}

async function deleteIntrested(productId) {
  return await fetch(`${SERVER_PORT}/products/${productId}/unInterested`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token') || sessionStorage.getItem('token'),
    },
    body: JSON.stringify({
      productId,
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
  // postImage,
  updateIntrested,
  deleteIntrested,
};

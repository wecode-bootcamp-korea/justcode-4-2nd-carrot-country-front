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

async function getProductListLocation(selectedCity, selectedDistrict) {
  const districtQuery = selectedDistrict
    ? `&districtId=${selectedDistrict}`
    : '';
  if (selectedCity === undefined) {
    return;
  }
  return await fetch(
    `${SERVER_PORT}/products/best?cityId=${selectedCity}` + districtQuery
  )
    .then(res => res.json())
    .then(data => data);
}

async function getProductDetail(productId) {
  return await fetch(`${SERVER_PORT}/products/${productId}`)
    .then(res => res.json())
    .then(data => data);
}

async function postProduct(sendableResult, imageResult) {
  return await fetch(`${SERVER_PORT}/products`, {
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token') || sessionStorage.getItem('token'),
    },
    method: 'POST',
    body: JSON.stringify({
      ...sendableResult,
    }),
  })
    .then(res => res.json())
    .then(data =>
      fetch(`${SERVER_PORT}/products/images`, {
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

async function updateProduct(sendableResult, imageResult, productId) {
  return await fetch(`${SERVER_PORT}/products/${productId}`, {
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token') || sessionStorage.getItem('token'),
    },
    method: 'PATCH',
    body: JSON.stringify({
      ...sendableResult,
    }),
  })
    .then(res => res.json())
    .then(data =>
      fetch(`${SERVER_PORT}/products/${productId}/updateImages`, {
        method: 'PATCH',
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

async function getSearchProductList(keyword) {
  return await fetch(
    `${SERVER_PORT}/products/search/product?keyword=${keyword}`
  )
    .then(res => res.json())
    .then(data => data);
}

async function deleteProduct(productId) {
  return await fetch(`${SERVER_PORT}/products/`, {
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token') || sessionStorage.getItem('token'),
    },
    method: 'DELETE',
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
  getProductListLocation,
  getProductDetail,
  postProduct,
  updateIntrested,
  deleteIntrested,
  getSearchProductList,
  deleteProduct,
  updateProduct,
};

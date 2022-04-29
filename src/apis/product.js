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

async function getProductListCity(selectedCity) {
  console.log('get product list city api>> ', selectedCity);
  return await fetch(`${SERVER_PORT}/products/best?cityId=${selectedCity}`)
    .then(res => res.json())
    .then(data => data);
}

async function getProductListDistrict(selectedCity, selectedDistrict) {
  console.log(
    'product js: selectedCity >>>',
    selectedCity,
    ' selectedDistrict >>> ',
    selectedDistrict
  );
  return await fetch(
    `${SERVER_PORT}/products/best?cityId=${selectedCity}&districtId=${selectedDistrict}`
  )
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

export {
  getProductList,
  getProductListBest,
  getProductListCity,
  getProductListDistrict,
  getProductDetail,
  postProduct,
  updateIntrested,
  deleteIntrested,
  getSearchProductList,
};

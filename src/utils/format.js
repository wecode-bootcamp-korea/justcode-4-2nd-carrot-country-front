function priceFormat(price) {
  if (price.length < 3) {
    return price;
  }
  let count = 0;
  let priceFormat = '';
  for (let i = price.length; i > 0; i--) {
    const element = price[i - 1];
    count++;
    priceFormat = element + priceFormat;
    if (count === 3) {
      priceFormat = ',' + priceFormat;
      count = 0;
    }
  }

  return priceFormat;
}

export { priceFormat };

function priceFormat(price) {
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
  return priceFormat[0] === ',' ? priceFormat.slice(1) : priceFormat;
}

export { priceFormat };

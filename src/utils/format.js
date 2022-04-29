function priceFormat(price) {
  if (price === '0') {
    return '가격없음';
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
  return (priceFormat[0] === ',' ? priceFormat.slice(1) : priceFormat) + '원';
}

function timeFormat(date) {
  const today = new Date();
  const timeValue = new Date(date);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );
  if (betweenTime < 1) return '방금전';
  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
}
export { priceFormat, timeFormat };

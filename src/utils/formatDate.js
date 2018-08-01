const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

export const getMonth = date => monthNames[date.getMonth()];

export const getDayMonth = date => `${date.getDate()} ${getMonth(date)}`;

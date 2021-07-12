import moment from 'moment';

const formatDate = (date) => moment(date).format('LL');

const getShortDayName = (date) => moment(date, 'DD-MM-YYYY').format('ddd');

const getDayOfMonth = (date) => moment(date, 'DD-MM-YYYY').date();

const shortifySufixes = (seq) =>
  seq
  .replace('year', 'yr')
  .replace('month', 'mth')
  .replace('week', 'wk')
  .replace('hour', 'hr')
  .replace('minute', 'min')
  .replace('seconde', 'sec');

export {formatDate, getShortDayName, getDayOfMonth, shortifySufixes};

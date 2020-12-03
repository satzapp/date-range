var moment = require('moment');
var periodicityDays = [7, 30, 90, 365];

function noOfPeriodInterval( startDate, endDate, periodicity ) {
  var a = moment(startDate, "DD.MM.YYYY");
  var b = moment(endDate, "DD.MM.YYYY");
  var days = b.diff(a, 'days');
  var intervals = parseInt(days) / periodicityDays[periodicity];
  console.log(intervals)
  return Math.ceil(intervals);
}

let startDate = '13-12-2023';
let endDate = '04-03-2024';
let periodicity = 1;

var noOfPeriodInterval = noOfPeriodInterval( startDate, endDate, periodicity )

console.log('Days - ', noOfPeriodInterval)
console.log(periodicityDays);
var moment = require('moment');
var periodicityDays = [7, 30, 90, 365];

function noOfPeriodInterval( startDate, endDate, periodicity ) {
  var a = moment(startDate, "DD.MM.YYYY");
  var b = moment(endDate, "DD.MM.YYYY");
  var days = a.diff(b, 'days');
  var intervals = 0;
  intervals = parseInt(days) / periodicityDays[periodicity];
  return Math.ceil(intervals);
}

let startDate = '13-12-2023';
let endDate = '04-03-2024';
let periodicity = 1;

var noOfPeriodInterval = noOfPeriodInterval( startDate, endDate, periodicity )

console.log('Days - ', noOfPeriodInterval)
console.log(periodicityDays);
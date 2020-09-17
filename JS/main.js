//const userLearningDate = new Date();
const learnMilestoneEndTime = new Date();

var year = learnMilestoneEndTime.getFullYear();
var month = learnMilestoneEndTime.getMonth() + 1; // 0 is January,
var day = learnMilestoneEndTime.getDate();
var hours = learnMilestoneEndTime.getHours();
var min = learnMilestoneEndTime.getMinutes();

var day1 = min + 10; //after 10 min
var day2 = day + 1; //after 24 hours
var day3 = day + 7;
var day4 = month + 1;
var day5 = month + 6;

var learnDay = [min, hours, day, month, year];
var now = [min, hours, day, month, year];
var dateAfterCorrection = [];
//time frame
function checkMinAndHour(arr) {
  if (arr[0] < 60) {
    arr[0] = arr[0]; //work with min
    dateAfterCorrection.push(arr[0]);
    dateAfterCorrection.push(arr[1]);
  } else if (arr[0] == 60) {
    arr[0] = 0; //work with min
    arr[1] += 1;
    dateAfterCorrection.push(arr[0]);
    dateAfterCorrection.push(arr[1]);
  } else if (arr[0] > 60) {
    arr[0] = arr[0] - 60; // work with min and hour
    arr[1] = arr[1] + 1;
    dateAfterCorrection.push(arr[0]);
    dateAfterCorrection.push(arr[1]);
  }
  return dateAfterCorrection;
}
function checkHour(arr) {
  if (arr[1] <= 23) {
    arr[1] = arr[1];
  }
  return dateAfterCorrection;
}

function checkHourAndDay(arr1, arr2) {
  if (arr1[1] == 24) {
    arr1[1] = 0;
    let day = arr1[2] + 1; // work with hour and day
    arr2.push(day);
  } else if (arr1[1] > 24) {
    let hour = arr1[1] - 24;
    let day = arr1[2] + 1;
    arr2.push(hour);
    arr2.push(day);
  }
  return arr2;
}
var maxDayOfMonth = 0;
function howManyDaysHasMonth(arr) {
  if (
    arr[3] == 1 ||
    arr[3] == 3 ||
    arr[3] == 5 ||
    arr[3] == 7 ||
    arr[3] == 8 ||
    arr[3] == 10 ||
    arr[3] == 12
  ) {
    maxDayOfMonth = 31;
  } else if (arr[3] == 4 || arr[3] == 6 || arr[3] == 9 || arr[3] == 11) {
    maxDayOfMonth = 30;
  } else if (arr[3] == 2) {
    if (arr[4] % 2 == 0 && arr[4] % 4 == 0) {
      maxDayOfMonth = 29; //29 - evenly and divisible by 4
    } else {
      maxDayOfMonth = 28;
    }
  }
  return maxDayOfMonth;
}

console.log(learnMilestoneEndTime);
console.log(learnDay);
console.log(dateAfterCorrection);
console.log(checkMinAndHour(now));
console.log(checkHour(now));
console.log(checkHourAndDay(now, dateAfterCorrection));
console.log(checkSafeDay(now));
console.log();

// tikrinu arr su day1, day2, day3 kintamaisiais juose

//surašau kodą ir tik tada išskaidau į atskirus failus kodo elementus.
//Geras kodo rašymas, kai kodo elementas telpa į ekraną
//savrbu funkcionalumas
// pop up priminimas arba kitas priminimo formatas, veliau skaitau apie priminimo formatus, pvz. duolingo priminimai

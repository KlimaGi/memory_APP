//const userLearningDate = new Date();
const learnMilestoneEndTime = new Date();

var year = learnMilestoneEndTime.getFullYear();
var month = learnMilestoneEndTime.getMonth() + 1; // 0 is January,
var day = learnMilestoneEndTime.getDate();
var hours = learnMilestoneEndTime.getHours();
var min = learnMilestoneEndTime.getMinutes();

var day1 = min + 10; 
var day2 = day + 1; 
var day3 = day + 7;
var day4 = month + 1;
var day5 = month + 6;

var learnDay = [min, hours, day, month, year];
var now = [day1, hours, day, month, year];
//time frame
var dateAfterCorrection = [];

function checkMinAndHour(now) {
  if (now[0] < 60) {
    now[0] = now[0]; //work with min
    dateAfterCorrection.push(now[0]);
    dateAfterCorrection.push(now[1]);
  } else if (now[0] == 60) {
    now[0] = 0; //work with min
    now[1] += 1;
    dateAfterCorrection.push(now[0]);
    dateAfterCorrection.push(now[1]);
  } else if (now[0] > 60) {
    now[0] = now[0] - 60; // work with min and hour
    now[1] = now[1] + 1;
    dateAfterCorrection.push(now[0]);
    dateAfterCorrection.push(now[1]);
  }
  return dateAfterCorrection;
}

function checkHourAndDay(now, dateAfterCorrection) {
  if (now[1] == 24) {
    now[1] = 0;
    let day = now[2] + 1; // work with hour and day
    dateAfterCorrection.push(day);
  } else if (now[1] > 24) {
    let hour = now[1] - 24;
    let day = now[2] + 1;
    dateAfterCorrection.push(hour);
    dateAfterCorrection.push(day);
  } else if (now[1] <= 23) {
    dateAfterCorrection.push(now[2]);
  }
  return dateAfterCorrection;
}

var maxDayOfMonth = function howManyDaysHasMonth(arr) {
  if (
    arr[3] === 1 ||
    arr[3] === 3 ||
    arr[3] === 5 ||
    arr[3] === 7 ||
    arr[3] === 8 ||
    arr[3] === 10 ||
    arr[3] === 12
  ) {
    maxDayOfMonth = 31;
  } else if (arr[3] === 4 || arr[3] === 6 || arr[3] === 9 || arr[3] === 11) {
    maxDayOfMonth = 30;
  } else if (arr[3] === 2) {
    if ((arr[4] % 100 === 0) ? (arr[4] % 400 === 0):(arr[4]%4 ===0)) {
      maxDayOfMonth = 28;
    } else {
      maxDayOfMonth = 29;
    }
  }
  return maxDayOfMonth;
};

function checkDayAndMonth(dateAfterCorrection, now) {
  if (dateAfterCorrection[2] <= maxDayOfMonth) {
    dateAfterCorrection.push(now[3]); //arr[3] is month
  } else if (dateAfterCorrection[2] > maxDayOfMonth) {
    let day = dateAfterCorrection[2] - maxDayOfMonth;
    dateAfterCorrection[2] = day;
    let month = now[3] + 1;
    dateAfterCorrection.push(month);
  }
  return dateAfterCorrection;
}

function checkMonthAndYear(dateAfterCorrection, now) {
  if (dateAfterCorrection[3] <= 12) {
    dateAfterCorrection.push(now[4]);
  } else if (dateAfterCorrection[3] > 12) {
    let month = dateAfterCorrection[3] - 12;
    dateAfterCorrection[3] = month;
    let year = now[4] + 1;
    dateAfterCorrection.push(year);
  }
  return dateAfterCorrection;
}

console.log(learnMilestoneEndTime);
console.log(learnDay);
console.log(dateAfterCorrection);
console.log(checkMinAndHour(now));
console.log(checkHourAndDay(now, dateAfterCorrection));
console.log("max day of this month "+ maxDayOfMonth(now));
console.log(checkDayAndMonth(dateAfterCorrection, now));
console.log(checkMonthAndYear(dateAfterCorrection, now));

document.getElementById("now").innerHTML = learnDay;


// tikrinu arr su day1, day2, day3 kintamaisiais juose

//surašau kodą ir tik tada išskaidau į atskirus failus kodo elementus.
//Geras kodo rašymas, kai kodo elementas telpa į ekraną
//svarbu funkcionalumas
// pop up priminimas arba kitas priminimo formatas, veliau skaitau apie priminimo formatus, pvz. duolingo priminimai

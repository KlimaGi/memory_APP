//const userLearningDate = new Date();
const learnMilestoneEndTime = new Date();


var year = learnMilestoneEndTime.getFullYear();
var month = learnMilestoneEndTime.getMonth() + 1; // 0+1 is January,
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

function renderDay(){
//time frame
var dateAfterCorrection = [];

function checkMinAndHour(now) {
  if (now[0] < 60) {
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
  
var maxDayOfMonth = function howManyDaysHasMonth(now) {
   if (
    now[3] === 1 ||
    now[3] === 3 ||
    now[3] === 5 ||
    now[3] === 7 ||
    now[3] === 8 ||
    now[3] === 10 ||
    now[3] === 12
  ) {
    maxDayOfMonth = 31;
  } else if (now[3] === 4 || now[3] === 6 || now[3] === 9 || now[3] === 11) {
    maxDayOfMonth = 30;
  } else if (now[3] === 2) {
    if ((now[4] % 100 === 0) ? (now[4] % 400 === 0) : (now[4] % 4 ===0)) {
      maxDayOfMonth = 28;
    } else {
      maxDayOfMonth = 29;
    }
  } else if (now[3]>12){
    let month = now[3]-12;
  now[3]=month;
    maxDayOfMonth(now[3]);
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

function checkMonthAndYear(now, dateAfterCorrection) {
  if (now[3] <= 12) {
    dateAfterCorrection.push(now[4]);
  } else if (now[3] > 12) {
    let month = now[3] - 12;
    dateAfterCorrection[3] = month;
    let year = now[4] + 1;
    dateAfterCorrection.push(year);
    maxDayOfMonth(month);
  }
  return dateAfterCorrection;
}

// console.log(learnMilestoneEndTime);
// console.log(learnDay);
// console.log(dateAfterCorrection);
// console.log(checkMinAndHour(now));
// console.log(checkHourAndDay(now, dateAfterCorrection));
// //console.log(fixMonth(dateAfterCorrection));
// console.log(maxDayOfMonth);
// console.log(checkDayAndMonth(dateAfterCorrection, now));
// console.log(checkMonthAndYear(now, dateAfterCorrection));

return dateAfterCorrection;
}
renderDay();
let firstDate = renderDay(now);
let secondDate = renderDay(countSecondDate (firstDate));

function countSecondDate(firstDate){
const [,d2,,,]= firstDate;
const changedD2 = d2+1;
firstDate = [,changedD2,,,];
return firstDate; 
}

// document.getElementById("today").innerHTML = learnDay;
// document.getElementById("day1").innerHTML = renderDay(now);
// document.getElementById("day2").innerHTML = countSecondDate(firstDate);

console.log(firstDate);
console.log(countSecondDate(firstDate));
// tikrinu arr su day1, day2, day3 kintamaisiais juose

//surašau kodą ir tik tada išskaidau į atskirus failus kodo elementus.
//Geras kodo rašymas, kai kodo elementas telpa į ekraną
//svarbu funkcionalumas
// pop up priminimas arba kitas priminimo formatas, veliau skaitau apie priminimo formatus, pvz. duolingo priminimai

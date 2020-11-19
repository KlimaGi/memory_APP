function countDays(days){
var someDate = new Date();
var numberOfDaysToAdd = days;
someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 

var dd = formatTime(someDate.getDate());
var mm = formatTime(someDate.getMonth() + 1);
var y = formatTime(someDate.getFullYear());

var someFormattedDate = y + '-'+ mm + '-'+ dd;
return someFormattedDate;
}
countDays();

function formatTime(time){
  return time < 10 ? (`0${time}`): time;
}
//on click set time
//show time of alert (time + 10 min)
function afterMin(){
var someDate = new Date();
var added10Min = new Date(someDate.getTime() + (10*60*1000));
//console.log(added10Min);
var min = formatTime(someDate.getMinutes());
var hour = formatTime(someDate.getHours());
var day = formatTime(someDate.getDate());
var month = formatTime(someDate.getMonth() + 1);
var year = formatTime(someDate.getFullYear());

var formattedDateWithMin = year +'-'+ month +'-'+ day +' '+ hour +':'+ min;
return formattedDateWithMin;
}
afterMin();

var learnDay = countDays(0);
//  --> sukurti alert priminima pakartojimui informacijos
var day1 = afterMin();
var day2 = countDays(1); 
var day3 = countDays(7);
var day4 = countDays(30);
var day5 = countDays(182);

document.getElementById("today").innerHTML = learnDay;
document.getElementById("day1").innerHTML = day1;
document.getElementById("day2").innerHTML = day2;
document.getElementById("day3").innerHTML = day3;
document.getElementById("day4").innerHTML = day4;
document.getElementById("day5").innerHTML = day5;

// console.log(learnDay);
//console.log(day1);
// console.log(day3);
// console.log(day4);
// console.log(day5);

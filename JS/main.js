function countDays(days){
var someDate = new Date();
var numberOfDaysToAdd = days;
someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 

var dd = someDate.getDate();
var mm = someDate.getMonth() + 1;
var y = someDate.getFullYear();

var someFormattedDate = dd + '/'+ mm + '/'+ y;
return someFormattedDate;
}
countDays();

var learnDay = countDays(0);
//var day1 = min + 10;
//  --> sukurti alert priminima pakartojimui informacijos, naudoti countdown-timer logika
var day2 = countDays(1); 
var day3 = countDays(7);
var day4 = countDays(30);
var day5 = countDays(182);

document.getElementById("today").innerHTML = learnDay;
//document.getElementById("day1").innerHTML = someFormattedDate;
document.getElementById("day2").innerHTML = day2;
document.getElementById("day3").innerHTML = day3;
document.getElementById("day4").innerHTML = day4;
document.getElementById("day5").innerHTML = day5;

// console.log(learnDay);
// console.log(day2);
// console.log(day3);
// console.log(day4);
// console.log(day5);

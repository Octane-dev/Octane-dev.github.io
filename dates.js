const e = new Date()
const dateNow = new Date(e).toLocaleDateString("en-GB");
var date = new Date(e),
d = date.getDate(),
m = date.getMonth(),
y = date.getFullYear();
const day1 = new Date(y,m,d).toLocaleDateString();
const day2 = new Date(y,m,d+1).toLocaleDateString();
const day3 = new Date(y,m,d+2).toLocaleDateString();
const day4 = new Date(y,m,d+3).toLocaleDateString();
const day5 = new Date(y,m,d+4).toLocaleDateString();
const day6 = new Date(y,m,d+5).toLocaleDateString();
const day7 = new Date(y,m,d+6).toLocaleDateString();

const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const day1d = weekday[new Date(y,m,d).getDay()];
const day2d = weekday[new Date(y,m,d+1).getDay()];
const day3d = weekday[new Date(y,m,d+2).getDay()];
const day4d = weekday[new Date(y,m,d+3).getDay()];
const day5d = weekday[new Date(y,m,d+4).getDay()];
const day6d = weekday[new Date(y,m,d+5).getDay()];
const day7d = weekday[new Date(y,m,d+6).getDay()];
// console.log(day1d,day2d,day3d,day4d,day5d,day6d,day7d)

const day1date = new Date(y,m,d).getDate()
const day2date = new Date(y,m,d+1).getDate()
const day3date = new Date(y,m,d+2).getDate()
const day4date = new Date(y,m,d+3).getDate()
const day5date = new Date(y,m,d+4).getDate()
const day6date = new Date(y,m,d+5).getDate()
const day7date = new Date(y,m,d+6).getDate()
// console.log(day1date,day7date)

const day1e = document.getElementById("day1")
const day2e = document.getElementById("day2")
const day3e = document.getElementById("day3")
const day4e = document.getElementById("day4")
const day5e = document.getElementById("day5")
const day6e = document.getElementById("day6")
const day7e = document.getElementById("day7")

day1e.innerHTML = day1d + "<br>" + day1date
day2e.innerHTML = day2d + "<br>" + day2date
day3e.innerHTML = day3d + "<br>" + day3date
day4e.innerHTML = day4d + "<br>" + day4date
day5e.innerHTML = day5d + "<br>" + day5date
day6e.innerHTML = day6d + "<br>" + day6date
day7e.innerHTML = day7d + "<br>" + day7date
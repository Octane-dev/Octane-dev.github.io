var station_snow = 0,
  station_rain = 0,
  station_max_temp = 0,
  station_min_temp = 0,
  station_chill = 0,
  station_wind_spd = 0,
  mid_snow = 0,
  mid_rain = 0,
  mid_max_tmp = 0,
  mid_min_temp = 0,
  mid_feel_like = 0,
  mid_wind_spd = 0,
  wind_dir = 0,
  mid_w2 = 0,
  mid_w5 = 0,
  peak_snow = 0,
  peak_rain = 0,
  peak_max_tmp = 0,
  peak_min_tmp = 0,
  peak_feel_like = 0,
  peak_wind_spd = 0,
  wind_dir = 0,
  peak_w2 = 0,
  peak_w5 = 0;
// var station_wind_gust = mid_wind_gust
var station_w2 = 0;
var station_w5 = 0;
function freezingLevel(pk_t1, pk_t2, vy_t1, vy_t2) {
  const bot = 725;
  const top = 485;
  const topStation = 550;
  const bottomStation = 690;

  var pk_t = parseFloat(parseFloat(parseFloat(pk_t2) + parseFloat(pk_t1))/2)
  // console.log(pk_t, pk_t2, pk_t1)
  var vy_t = parseFloat(parseFloat(parseFloat(vy_t2) + parseFloat(vy_t1))/2)
  // console.log(vy_t, vy_t2, vy_t1)
  const rTopStation = 1700;
  const rBottomStation = 320;
  // console.log(pk_t1,vy_t1)
  if (vy_t <= 0) {
    var fzl = rBottomStation + (vy_t * 500) / 3.281;
  }
  // else if (pk_t1 > vy_t1) {
  //     console.log(pk_t1,vy_t1)
  //     // pk_t1 = 0
  //     var fzl = rTopStation+(rTopStation-rBottomStation)*(0+pk_t1)/(pk_t1-vy_t1)
  // }
  else {
    var fzl =
      rTopStation +
      ((rTopStation - rBottomStation) * (0 - pk_t)) / (pk_t - vy_t);
  }
  if (fzl < 0) {
    fzl = 0;
  }
  if (fzl > 2000) {
    fzl = 2250;
  }
  // console.log(fzl)

  var pxl = 725 - (fzl / 1700) * (725 - 550);
  // console.log(fzl);
  // console.log(pxl);
  return pxl;
}
function drawTable(station) {
  if (station == "Bot") {
    var station_snow = vlly_snow;
    var station_rain = vlly_rain;
    var station_max_temp = vlly_max_tmp;
    var station_min_temp = vlly_min_tmp;
    var station_chill = vlly_feel_like;
    var station_wind_spd = vlly_wind_spd;
    var station_wind_dir = wind_dir;
    // var station_wind_gust = vlly_wind_gust
    var station_w2 = vlly_w2;
    var station_w5 = vlly_w5;
    // console.log(date,vy_snow_dph)
    if (parseFloat(station_chill) > parseFloat(station_min_temp)) {
      station_chill = station_min_temp;
    }
  }
  if (station == "Mid") {
    // console.log(mid_snow);
    station_snow = mid_snow;
    station_rain = mid_rain;
    station_max_temp = mid_max_tmp;
    station_min_temp = mid_min_temp;
    station_chill = mid_feel_like;
    // console.log(station_chill, station_min_temp);
    station_wind_spd = mid_wind_spd;
    station_wind_dir = wind_dir;
    // var station_wind_gust = mid_wind_gust
    station_w2 = mid_w2;
    station_w5 = mid_w5;
    // console.log(station)
    if (parseFloat(station_chill) > parseFloat(station_min_temp)) {
      station_chill = station_min_temp;
    }
  }
  // console.log(station_chill,station_min_temp)
  if (station == "Top") {
    var station_snow = peak_snow;
    var station_rain = peak_rain;
    var station_max_temp = peak_max_tmp;
    var station_min_temp = peak_min_tmp;
    var station_chill = peak_feel_like;
    var station_wind_spd = peak_wind_spd;
    var station_wind_dir = wind_dir;
    // var station_wind_gust = peak_wind_gust
    var station_w2 = peak_w2;
    var station_w5 = peak_w5;
    // console.log(peak_snow,station_snow);
    if (parseFloat(station_chill) > parseFloat(station_min_temp)) {
      station_chill = station_min_temp;
    }
  }

  if (dateNow == date) {
    // console.log(peak_snow)
    if (station_snow == "0") {
      station_snow = "-";
    } else {
      station_snow = station_snow;
    }

    if (station_rain == "0") {
      station_rain = "-";
    } else {
      station_rain = station_rain;
    }

    // console.log(
    //     date,
    //     vlly_max_tmp,
    //     vlly_min_tmp,
    //     vlly_feel_like,
    //     vlly_wind_spd,
    //     vlly_wind_gust,
    //     vlly_w2,
    //     vlly_w5,
    //     station_snow,
    //     station_rain
    // );
    var max_degree = document.getElementById("top-deg-cell__value1");
    max_degree.innerHTML = station_max_temp;

    var min_degree = document.getElementById("min-deg-cell__value1");
    min_degree.innerHTML = station_min_temp;

    var chill_degree = document.getElementById("chill-deg-cell1");
    chill_degree.innerHTML = station_chill;
    // console.log(station_chill,station_min_temp)

    var snow = document.getElementById("snow-cell__value1");
    snow.innerHTML = station_snow;

    var rain = document.getElementById("rain-cell__value1");
    rain.innerHTML = station_rain;

    if (station_w5 == "") {
      var weather = document.getElementById("w1-ph");
      weather.innerHTML = station_w2;
    } else {
      var weather = document.getElementById("w1-ph");
      weather.innerHTML = station_w5;
    }

    var windSpeed = document.getElementById("wind1");
    windSpeed.innerHTML = station_wind_spd;

    var windDir = document.getElementById("wind-dir-1");
    windDir.innerHTML = station_wind_dir;

    if (snow.innerHTML > 0) {
      snow.classList.add("has-value");
    } else {
      snow.classList.remove("has-value");
    }

    if (rain.innerHTML > 0) {
      rain.classList.add("has-value");
    } else {
      rain.classList.remove("has-value");
    }

    var snowFill = document.getElementById("snow-cell__fill1");

    if (snow.innerHTML <= 5 && snow.innerHTML > 0) {
      snowFill.style.height = "5px";
    } else if (snow.innerHTML > 5 && snow.innerHTML <= 10) {
      snowFill.style.height = "10px";
    } else if (snow.innerHTML > 10 && snow.innerHTML <= 15) {
      snowFill.style.height = "20px";
    } else if (snow.innerHTML > 15 && snow.innerHTML <= 20) {
      snowFill.style.height = "30px";
    } else if (snow.innerHTML > 20 && snow.innerHTML <= 25) {
      snowFill.style.height = "40px";
    } else if (snow.innerHTML > 25) {
      snowFill.style.height = "45px";
    } else {
      snowFill.style.height = "0px";
    }

    var rainFill = document.getElementById("rain-cell__fill1");

    if (rain.innerHTML <= 5 && rain.innerHTML > 0) {
      rainFill.style.height = "5px";
    } else if (rain.innerHTML > 5 && rain.innerHTML <= 10) {
      rainFill.style.height = "10px";
    } else if (rain.innerHTML > 10 && rain.innerHTML <= 15) {
      rainFill.style.height = "20px";
    } else if (rain.innerHTML > 15 && rain.innerHTML <= 20) {
      rainFill.style.height = "30px";
    } else if (rain.innerHTML > 20 && rain.innerHTML <= 25) {
      rainFill.style.height = "40px";
    } else if (rain.innerHTML > 25) {
      rainFill.style.height = "45px";
    } else {
      rainFill.style.height = "0px";
    }
    var pxl1 = freezingLevel(peak_min_tmp, peak_max_tmp, vlly_min_tmp, vlly_max_tmp);
    point1.style.top = pxl1 + "px";
  }

  if (day2 == date) {
    if (station_snow == "0") {
      station_snow = "-";
    } else {
      station_snow = station_snow;
    }

    if (station_rain == "0") {
      station_rain = "-";
    } else {
      station_rain = station_rain;
    }

    // console.log(
    //     date,
    //     vlly_max_tmp,
    //     vlly_min_tmp,
    //     vlly_feel_like,
    //     vlly_wind_spd,
    //     vlly_wind_gust,
    //     vlly_w2,
    //     vlly_w5,
    //     station_snow,
    //     station_rain
    // );
    var max_degree = document.getElementById("top-deg-cell__value2");
    max_degree.innerHTML = station_max_temp;

    var min_degree = document.getElementById("min-deg-cell__value2");
    min_degree.innerHTML = station_min_temp;

    var chill_degree = document.getElementById("chill-deg-cell2");
    chill_degree.innerHTML = station_chill;

    var snow = document.getElementById("snow-cell__value2");
    snow.innerHTML = station_snow;

    var rain = document.getElementById("rain-cell__value2");
    rain.innerHTML = station_rain;

    if (station_w5 == "") {
      var weather = document.getElementById("w2-ph");
      weather.innerHTML = station_w2;
    } else {
      var weather = document.getElementById("w2-ph");
      weather.innerHTML = station_w5;
    }

    var valleyWindSpeed = document.getElementById("wind2");
    valleyWindSpeed.innerHTML = station_wind_spd;

    var windDir = document.getElementById("wind-dir-2");
    windDir.innerHTML = station_wind_dir;

    if (snow.innerHTML > 0) {
      snow.classList.add("has-value");
    } else {
      snow.classList.remove("has-value");
    }

    if (rain.innerHTML > 0) {
      rain.classList.add("has-value");
    } else {
      rain.classList.remove("has-value");
    }

    var snowFill = document.getElementById("snow-cell__fill2");

    if (snow.innerHTML <= 5 && snow.innerHTML > 0) {
      snowFill.style.height = "5px";
    } else if (snow.innerHTML > 5 && snow.innerHTML <= 10) {
      snowFill.style.height = "10px";
    } else if (snow.innerHTML > 10 && snow.innerHTML <= 15) {
      snowFill.style.height = "20px";
    } else if (snow.innerHTML > 15 && snow.innerHTML <= 20) {
      snowFill.style.height = "30px";
    } else if (snow.innerHTML > 20 && snow.innerHTML <= 25) {
      snowFill.style.height = "40px";
    } else if (snow.innerHTML > 25) {
      snowFill.style.height = "45px";
    } else {
      snowFill.style.height = "0px";
    }

    var rainFill = document.getElementById("rain-cell__fill2");

    if (rain.innerHTML <= 5 && rain.innerHTML > 0) {
      rainFill.style.height = "5px";
    } else if (rain.innerHTML > 5 && rain.innerHTML <= 10) {
      rainFill.style.height = "10px";
    } else if (rain.innerHTML > 10 && rain.innerHTML <= 15) {
      rainFill.style.height = "20px";
    } else if (rain.innerHTML > 15 && rain.innerHTML <= 20) {
      rainFill.style.height = "30px";
    } else if (rain.innerHTML > 20 && rain.innerHTML <= 25) {
      rainFill.style.height = "40px";
    } else if (rain.innerHTML > 25) {
      rainFill.style.height = "45px";
    } else {
      rainFill.style.height = "0px";
    }
    var pxl2 = freezingLevel(peak_min_tmp, peak_max_tmp, vlly_min_tmp, vlly_max_tmp);
    point2.style.top = pxl2 + "px";
  }
  if (day3 == date) {
    if (station_snow == "0") {
      station_snow = "-";
    } else {
      station_snow = station_snow;
    }

    if (station_rain == "0") {
      station_rain = "-";
    } else {
      station_rain = station_rain;
    }

    // console.log(
    //     date,
    //     vlly_max_tmp,
    //     vlly_min_tmp,
    //     vlly_feel_like,
    //     vlly_wind_spd,
    //     vlly_wind_gust,
    //     vlly_w2,
    //     vlly_w5,
    //     station_snow,
    //     station_rain
    // );
    var max_degree = document.getElementById("top-deg-cell__value3");
    max_degree.innerHTML = station_max_temp;

    var min_degree = document.getElementById("min-deg-cell__value3");
    min_degree.innerHTML = station_min_temp;

    var chill_degree = document.getElementById("chill-deg-cell3");
    chill_degree.innerHTML = station_chill;

    var snow = document.getElementById("snow-cell__value3");
    snow.innerHTML = station_snow;

    var rain = document.getElementById("rain-cell__value3");
    rain.innerHTML = station_rain;

    if (station_w5 == "") {
      var weather = document.getElementById("w3-ph");
      weather.innerHTML = station_w2;
    } else {
      var weather = document.getElementById("w3-ph");
      weather.innerHTML = station_w5;
    }

    var valleyWindSpeed = document.getElementById("wind3");
    valleyWindSpeed.innerHTML = station_wind_spd;

    var windDir = document.getElementById("wind-dir-3");
    windDir.innerHTML = station_wind_dir;

    if (snow.innerHTML > 0) {
      snow.classList.add("has-value");
    } else {
      snow.classList.remove("has-value");
    }

    if (rain.innerHTML > 0) {
      rain.classList.add("has-value");
    } else {
      rain.classList.remove("has-value");
    }

    var snowFill = document.getElementById("snow-cell__fill3");

    if (snow.innerHTML <= 5 && snow.innerHTML > 0) {
      snowFill.style.height = "5px";
    } else if (snow.innerHTML > 5 && snow.innerHTML <= 10) {
      snowFill.style.height = "10px";
    } else if (snow.innerHTML > 10 && snow.innerHTML <= 15) {
      snowFill.style.height = "20px";
    } else if (snow.innerHTML > 15 && snow.innerHTML <= 20) {
      snowFill.style.height = "30px";
    } else if (snow.innerHTML > 20 && snow.innerHTML <= 25) {
      snowFill.style.height = "40px";
    } else if (snow.innerHTML > 25) {
      snowFill.style.height = "45px";
    } else {
      snowFill.style.height = "0px";
    }

    var rainFill = document.getElementById("rain-cell__fill3");

    if (rain.innerHTML <= 5 && rain.innerHTML > 0) {
      rainFill.style.height = "5px";
    } else if (rain.innerHTML > 5 && rain.innerHTML <= 10) {
      rainFill.style.height = "10px";
    } else if (rain.innerHTML > 10 && rain.innerHTML <= 15) {
      rainFill.style.height = "20px";
    } else if (rain.innerHTML > 15 && rain.innerHTML <= 20) {
      rainFill.style.height = "30px";
    } else if (rain.innerHTML > 20 && rain.innerHTML <= 25) {
      rainFill.style.height = "40px";
    } else if (rain.innerHTML > 25) {
      rainFill.style.height = "45px";
    } else {
      rainFill.style.height = "0px";
    }
    var pxl3 = freezingLevel(peak_min_tmp, peak_max_tmp, vlly_min_tmp, vlly_max_tmp);
    point3.style.top = pxl3 + "px";
  }
  if (day4 == date) {
    if (station_snow == "0") {
      station_snow = "-";
    } else {
      station_snow = station_snow;
    }

    if (station_rain == "0") {
      station_rain = "-";
    } else {
      station_rain = station_rain;
    }

    // console.log(
    //     date,
    //     vlly_max_tmp,
    //     vlly_min_tmp,
    //     vlly_feel_like,
    //     vlly_wind_spd,
    //     vlly_wind_gust,
    //     vlly_w2,
    //     vlly_w5,
    //     station_snow,
    //     station_rain
    // );
    var max_degree = document.getElementById("top-deg-cell__value4");
    max_degree.innerHTML = station_max_temp;

    var min_degree = document.getElementById("min-deg-cell__value4");
    min_degree.innerHTML = station_min_temp;

    var chill_degree = document.getElementById("chill-deg-cell4");
    chill_degree.innerHTML = station_chill;

    var snow = document.getElementById("snow-cell__value4");
    snow.innerHTML = station_snow;

    var rain = document.getElementById("rain-cell__value4");
    rain.innerHTML = station_rain;

    if (station_w5 == "") {
      var weather = document.getElementById("w4-ph");
      weather.innerHTML = station_w2;
    } else {
      var weather = document.getElementById("w4-ph");
      weather.innerHTML = station_w5;
    }

    var valleyWindSpeed = document.getElementById("wind4");
    valleyWindSpeed.innerHTML = station_wind_spd;

    var windDir = document.getElementById("wind-dir-4");
    windDir.innerHTML = station_wind_dir;

    if (snow.innerHTML > 0) {
      snow.classList.add("has-value");
    } else {
      snow.classList.remove("has-value");
    }

    if (rain.innerHTML > 0) {
      rain.classList.add("has-value");
    } else {
      rain.classList.remove("has-value");
    }

    var snowFill = document.getElementById("snow-cell__fill4");

    if (snow.innerHTML <= 5 && snow.innerHTML > 0) {
      snowFill.style.height = "5px";
    } else if (snow.innerHTML > 5 && snow.innerHTML <= 10) {
      snowFill.style.height = "10px";
    } else if (snow.innerHTML > 10 && snow.innerHTML <= 15) {
      snowFill.style.height = "20px";
    } else if (snow.innerHTML > 15 && snow.innerHTML <= 20) {
      snowFill.style.height = "30px";
    } else if (snow.innerHTML > 20 && snow.innerHTML <= 25) {
      snowFill.style.height = "40px";
    } else if (snow.innerHTML > 25) {
      snowFill.style.height = "45px";
    } else {
      snowFill.style.height = "0px";
    }

    var rainFill = document.getElementById("rain-cell__fill4");

    if (rain.innerHTML <= 5 && rain.innerHTML > 0) {
      rainFill.style.height = "5px";
    } else if (rain.innerHTML > 5 && rain.innerHTML <= 10) {
      rainFill.style.height = "10px";
    } else if (rain.innerHTML > 10 && rain.innerHTML <= 15) {
      rainFill.style.height = "20px";
    } else if (rain.innerHTML > 15 && rain.innerHTML <= 20) {
      rainFill.style.height = "30px";
    } else if (rain.innerHTML > 20 && rain.innerHTML <= 25) {
      rainFill.style.height = "40px";
    } else if (rain.innerHTML > 25) {
      rainFill.style.height = "45px";
    } else {
      rainFill.style.height = "0px";
    }
    var pxl4 = freezingLevel(peak_min_tmp, peak_max_tmp, vlly_min_tmp, vlly_max_tmp);
    point4.style.top = pxl4 + "px";
  }
  if (day5 == date) {
    if (station_snow == "0") {
      station_snow = "-";
    } else {
      station_snow = station_snow;
    }

    if (station_rain == "0") {
      station_rain = "-";
    } else {
      station_rain = station_rain;
    }

    // console.log(
    //     date,
    //     vlly_max_tmp,
    //     vlly_min_tmp,
    //     vlly_feel_like,
    //     vlly_wind_spd,
    //     vlly_wind_gust,
    //     vlly_w2,
    //     vlly_w5,
    //     station_snow,
    //     station_rain
    // );
    var max_degree = document.getElementById("top-deg-cell__value5");
    max_degree.innerHTML = station_max_temp;

    var min_degree = document.getElementById("min-deg-cell__value5");
    min_degree.innerHTML = station_min_temp;

    var chill_degree = document.getElementById("chill-deg-cell5");
    chill_degree.innerHTML = station_chill;

    var snow = document.getElementById("snow-cell__value5");
    snow.innerHTML = station_snow;

    var rain = document.getElementById("rain-cell__value5");
    rain.innerHTML = station_rain;

    if (station_w5 == "") {
      var weather = document.getElementById("w5-ph");
      weather.innerHTML = station_w2;
    } else {
      var weather = document.getElementById("w5-ph");
      weather.innerHTML = station_w5;
    }

    var valleyWindSpeed = document.getElementById("wind5");
    valleyWindSpeed.innerHTML = station_wind_spd;

    var windDir = document.getElementById("wind-dir-5");
    windDir.innerHTML = station_wind_dir;

    if (snow.innerHTML > 0) {
      snow.classList.add("has-value");
    } else {
      snow.classList.remove("has-value");
    }

    if (rain.innerHTML > 0) {
      rain.classList.add("has-value");
    } else {
      rain.classList.remove("has-value");
    }

    var snowFill = document.getElementById("snow-cell__fill5");

    if (snow.innerHTML <= 5 && snow.innerHTML > 0) {
      snowFill.style.height = "5px";
    } else if (snow.innerHTML > 5 && snow.innerHTML <= 10) {
      snowFill.style.height = "10px";
    } else if (snow.innerHTML > 10 && snow.innerHTML <= 15) {
      snowFill.style.height = "20px";
    } else if (snow.innerHTML > 15 && snow.innerHTML <= 20) {
      snowFill.style.height = "30px";
    } else if (snow.innerHTML > 20 && snow.innerHTML <= 25) {
      snowFill.style.height = "40px";
    } else if (snow.innerHTML > 25) {
      snowFill.style.height = "45px";
    } else {
      snowFill.style.height = "0px";
    }

    var rainFill = document.getElementById("rain-cell__fill5");

    if (rain.innerHTML <= 5 && rain.innerHTML > 0) {
      rainFill.style.height = "5px";
    } else if (rain.innerHTML > 5 && rain.innerHTML <= 10) {
      rainFill.style.height = "10px";
    } else if (rain.innerHTML > 10 && rain.innerHTML <= 15) {
      rainFill.style.height = "20px";
    } else if (rain.innerHTML > 15 && rain.innerHTML <= 20) {
      rainFill.style.height = "30px";
    } else if (rain.innerHTML > 20 && rain.innerHTML <= 25) {
      rainFill.style.height = "40px";
    } else if (rain.innerHTML > 25) {
      rainFill.style.height = "45px";
    } else {
      rainFill.style.height = "0px";
    }
    var pxl5 = freezingLevel(peak_min_tmp, peak_max_tmp, vlly_min_tmp, vlly_max_tmp);
    point5.style.top = pxl5 + "px";
  }
  if (day6 == date) {
    if (station_snow == "0") {
      station_snow = "-";
    } else {
      station_snow = station_snow;
    }

    if (station_rain == "0") {
      station_rain = "-";
    } else {
      station_rain = station_rain;
    }

    // console.log(
    //     date,
    //     vlly_max_tmp,
    //     vlly_min_tmp,
    //     vlly_feel_like,
    //     vlly_wind_spd,
    //     vlly_wind_gust,
    //     vlly_w2,
    //     vlly_w5,
    //     station_snow,
    //     station_rain
    // );

    var max_degree = document.getElementById("top-deg-cell__value6");
    max_degree.innerHTML = station_max_temp;

    var min_degree = document.getElementById("min-deg-cell__value6");
    min_degree.innerHTML = station_min_temp;

    var chill_degree = document.getElementById("chill-deg-cell6");
    chill_degree.innerHTML = station_chill;

    var snow = document.getElementById("snow-cell__value6");
    snow.innerHTML = station_snow;

    var rain = document.getElementById("rain-cell__value6");
    rain.innerHTML = station_rain;

    if (station_w5 == "") {
      var weather = document.getElementById("w6-ph");
      weather.innerHTML = station_w2;
    } else {
      var weather = document.getElementById("w6-ph");
      weather.innerHTML = station_w5;
    }

    var valleyWindSpeed = document.getElementById("wind6");
    valleyWindSpeed.innerHTML = station_wind_spd;

    var windDir = document.getElementById("wind-dir-6");
    windDir.innerHTML = station_wind_dir;

    if (snow.innerHTML > 0) {
      snow.classList.add("has-value");
    } else {
      snow.classList.remove("has-value");
    }

    if (rain.innerHTML > 0) {
      rain.classList.add("has-value");
    } else {
      rain.classList.remove("has-value");
    }

    var snowFill = document.getElementById("snow-cell__fill6");

    if (snow.innerHTML <= 5 && snow.innerHTML > 0) {
      snowFill.style.height = "5px";
    } else if (snow.innerHTML > 5 && snow.innerHTML <= 10) {
      snowFill.style.height = "10px";
    } else if (snow.innerHTML > 10 && snow.innerHTML <= 15) {
      snowFill.style.height = "20px";
    } else if (snow.innerHTML > 15 && snow.innerHTML <= 20) {
      snowFill.style.height = "30px";
    } else if (snow.innerHTML > 20 && snow.innerHTML <= 25) {
      snowFill.style.height = "40px";
    } else if (snow.innerHTML > 25) {
      snowFill.style.height = "45px";
    } else {
      snowFill.style.height = "0px";
    }

    var rainFill = document.getElementById("rain-cell__fill6");

    if (rain.innerHTML <= 5 && rain.innerHTML > 0) {
      rainFill.style.height = "5px";
    } else if (rain.innerHTML > 5 && rain.innerHTML <= 10) {
      rainFill.style.height = "10px";
    } else if (rain.innerHTML > 10 && rain.innerHTML <= 15) {
      rainFill.style.height = "20px";
    } else if (rain.innerHTML > 15 && rain.innerHTML <= 20) {
      rainFill.style.height = "30px";
    } else if (rain.innerHTML > 20 && rain.innerHTML <= 25) {
      rainFill.style.height = "40px";
    } else if (rain.innerHTML > 25) {
      rainFill.style.height = "45px";
    } else {
      rainFill.style.height = "0px";
    }
    var pxl6 = freezingLevel(peak_min_tmp, peak_max_tmp, vlly_min_tmp, vlly_max_tmp);
    point6.style.top = pxl6 + "px";
  }
  if (day7 == date) {
    if (station_snow == "0") {
      station_snow = "-";
    } else {
      station_snow = station_snow;
    }

    if (station_rain == "0") {
      station_rain = "-";
    } else {
      station_rain = station_rain;
    }

    // console.log(
    //     date,
    //     vlly_max_tmp,
    //     vlly_min_tmp,
    //     vlly_feel_like,
    //     vlly_wind_spd,
    //     vlly_wind_gust,
    //     vlly_w2,
    //     vlly_w5,
    //     station_snow,
    //     station_rain
    // );
    var max_degree = document.getElementById("top-deg-cell__value7");
    max_degree.innerHTML = station_max_temp;

    var min_degree = document.getElementById("min-deg-cell__value7");
    min_degree.innerHTML = station_min_temp;

    var chill_degree = document.getElementById("chill-deg-cell7");
    chill_degree.innerHTML = station_chill;

    var snow = document.getElementById("snow-cell__value7");
    snow.innerHTML = station_snow;

    var rain = document.getElementById("rain-cell__value7");
    rain.innerHTML = station_rain;

    if (station_w5 == "") {
      var weather = document.getElementById("w7-ph");
      weather.innerHTML = station_w2;
    } else {
      var weather = document.getElementById("w7-ph");
      weather.innerHTML = station_w5;
    }

    var valleyWindSpeed = document.getElementById("wind7");
    valleyWindSpeed.innerHTML = station_wind_spd;

    var windDir = document.getElementById("wind-dir-7");
    windDir.innerHTML = station_wind_dir;

    if (snow.innerHTML > 0) {
      snow.classList.add("has-value");
    } else {
      snow.classList.remove("has-value");
    }

    if (rain.innerHTML > 0) {
      rain.classList.add("has-value");
    } else {
      rain.classList.remove("has-value");
    }

    var snowFill = document.getElementById("snow-cell__fill7");

    if (snow.innerHTML <= 5 && snow.innerHTML > 0) {
      snowFill.style.height = "5px";
    } else if (snow.innerHTML > 5 && snow.innerHTML <= 10) {
      snowFill.style.height = "10px";
    } else if (snow.innerHTML > 10 && snow.innerHTML <= 15) {
      snowFill.style.height = "20px";
    } else if (snow.innerHTML > 15 && snow.innerHTML <= 20) {
      snowFill.style.height = "30px";
    } else if (snow.innerHTML > 20 && snow.innerHTML <= 25) {
      snowFill.style.height = "40px";
    } else if (snow.innerHTML > 25) {
      snowFill.style.height = "45px";
    } else {
      snowFill.style.height = "0px";
    }

    var rainFill = document.getElementById("rain-cell__fill7");

    if (rain.innerHTML <= 5 && rain.innerHTML > 0) {
      rainFill.style.height = "5px";
    } else if (rain.innerHTML > 5 && rain.innerHTML <= 10) {
      rainFill.style.height = "10px";
    } else if (rain.innerHTML > 10 && rain.innerHTML <= 15) {
      rainFill.style.height = "20px";
    } else if (rain.innerHTML > 15 && rain.innerHTML <= 20) {
      rainFill.style.height = "30px";
    } else if (rain.innerHTML > 20 && rain.innerHTML <= 25) {
      rainFill.style.height = "40px";
    } else if (rain.innerHTML > 25) {
      rainFill.style.height = "45px";
    } else {
      rainFill.style.height = "0px";
    }
    var pxl7 = freezingLevel(peak_min_tmp, peak_max_tmp, vlly_min_tmp, vlly_max_tmp);
    point7.style.top = pxl7 + "px";
  }

  // if (vy_snow_dph > 1 && date == tomorrow) {
  //   console.log(vy_snow_dph)
  // }
}
function processData() {
  const topStation = "550px";
  const bottomStation = "690px";
  const topDegree = document.getElementById("top-deg-cell");
  const topDegree1 = document.getElementById("top-deg-cell1");
  const topDegree2 = document.getElementById("top-deg-cell2");
  const topDegree3 = document.getElementById("top-deg-cell3");
  const topDegree4 = document.getElementById("top-deg-cell4");
  const topDegree5 = document.getElementById("top-deg-cell5");
  const topDegree6 = document.getElementById("top-deg-cell6");

  const botDegree = document.getElementById("min-deg-cell");
  const botDegree1 = document.getElementById("min-deg-cell1");
  const botDegree2 = document.getElementById("min-deg-cell2");
  const botDegree3 = document.getElementById("min-deg-cell3");
  const botDegree4 = document.getElementById("min-deg-cell4");
  const botDegree5 = document.getElementById("min-deg-cell5");
  const botDegree6 = document.getElementById("min-deg-cell6");

  const chillDegree = document.getElementById("chill-deg-cell1");
  const chillDegree1 = document.getElementById("chill-deg-cell2");
  const chillDegree2 = document.getElementById("chill-deg-cell3");
  const chillDegree3 = document.getElementById("chill-deg-cell4");
  const chillDegree4 = document.getElementById("chill-deg-cell5");
  const chillDegree5 = document.getElementById("chill-deg-cell6");
  const chillDegree6 = document.getElementById("chill-deg-cell7");
  const topDegreeTemp = document.getElementById(
    "top-deg-cell__value1"
  ).innerHTML;
  const topDegreeTemp1 = document.getElementById(
    "top-deg-cell__value2"
  ).innerHTML;
  const topDegreeTemp2 = document.getElementById(
    "top-deg-cell__value3"
  ).innerHTML;
  const topDegreeTemp3 = document.getElementById(
    "top-deg-cell__value4"
  ).innerHTML;
  const topDegreeTemp4 = document.getElementById(
    "top-deg-cell__value5"
  ).innerHTML;
  const topDegreeTemp5 = document.getElementById(
    "top-deg-cell__value6"
  ).innerHTML;
  const topDegreeTemp6 = document.getElementById(
    "top-deg-cell__value7"
  ).innerHTML;

  if (topDegreeTemp >= 10) {
    topDegree.setAttribute("data-temp", "sub-20");
  } else if (topDegreeTemp < -15) {
    topDegree.setAttribute("data-temp", "sub--15");
  } else if (topDegreeTemp < -10) {
    topDegree.setAttribute("data-temp", "sub--10");
  } else if (topDegreeTemp < -5) {
    topDegree.setAttribute("data-temp", "sub--5");
  } else if (topDegreeTemp < 0) {
    topDegree.setAttribute("data-temp", "sub-zero");
  } else if (topDegreeTemp < 5) {
    topDegree.setAttribute("data-temp", "sub-5");
  } else {
    topDegree.setAttribute("data-temp", "sub-10");
  }

  if (topDegreeTemp1 >= 10) {
    topDegree1.setAttribute("data-temp", "sub-20");
  } else if (topDegreeTemp1 < -15) {
    topDegree1.setAttribute("data-temp", "sub--15");
  } else if (topDegreeTemp1 < -10) {
    topDegree1.setAttribute("data-temp", "sub--10");
  } else if (topDegreeTemp1 < -5) {
    topDegree1.setAttribute("data-temp", "sub--5");
  } else if (topDegreeTemp1 < 0) {
    topDegree1.setAttribute("data-temp", "sub-zero");
  } else if (topDegreeTemp1 < 5) {
    topDegree1.setAttribute("data-temp", "sub-5");
  } else {
    topDegree1.setAttribute("data-temp", "sub-10");
  }

  if (topDegreeTemp2 >= 10) {
    topDegree2.setAttribute("data-temp", "sub-20");
  } else if (topDegreeTemp2 < -15) {
    topDegree2.setAttribute("data-temp", "sub--15");
  } else if (topDegreeTemp2 < -10) {
    topDegree2.setAttribute("data-temp", "sub--10");
  } else if (topDegreeTemp2 < -5) {
    topDegree2.setAttribute("data-temp", "sub--5");
  } else if (topDegreeTemp2 < 0) {
    topDegree2.setAttribute("data-temp", "sub-zero");
  } else if (topDegreeTemp2 < 5) {
    topDegree2.setAttribute("data-temp", "sub-5");
  } else {
    topDegree2.setAttribute("data-temp", "sub-10");
  }

  if (topDegreeTemp3 >= 10) {
    topDegree3.setAttribute("data-temp", "sub-20");
  } else if (topDegreeTemp3 < -15) {
    topDegree3.setAttribute("data-temp", "sub--15");
  } else if (topDegreeTemp3 < -10) {
    topDegree3.setAttribute("data-temp", "sub--10");
  } else if (topDegreeTemp3 < -5) {
    topDegree3.setAttribute("data-temp", "sub--5");
  } else if (topDegreeTemp3 < 0) {
    topDegree3.setAttribute("data-temp", "sub-zero");
  } else if (topDegreeTemp3 < 5) {
    topDegree3.setAttribute("data-temp", "sub-5");
  } else {
    topDegree3.setAttribute("data-temp", "sub-10");
  }

  if (topDegreeTemp4 >= 10) {
    topDegree4.setAttribute("data-temp", "sub-20");
  } else if (topDegreeTemp4 < -15) {
    topDegree4.setAttribute("data-temp", "sub--15");
  } else if (topDegreeTemp4 < -10) {
    topDegree4.setAttribute("data-temp", "sub--10");
  } else if (topDegreeTemp4 < -5) {
    topDegree4.setAttribute("data-temp", "sub--5");
  } else if (topDegreeTemp4 < 0) {
    topDegree4.setAttribute("data-temp", "sub-zero");
  } else if (topDegreeTemp4 < 5) {
    topDegree4.setAttribute("data-temp", "sub-5");
  } else {
    topDegree4.setAttribute("data-temp", "sub-10");
  }

  if (topDegreeTemp5 >= 10) {
    topDegree5.setAttribute("data-temp", "sub-20");
  } else if (topDegreeTemp5 < -15) {
    topDegree5.setAttribute("data-temp", "sub--15");
  } else if (topDegreeTemp5 < -10) {
    topDegree5.setAttribute("data-temp", "sub--10");
  } else if (topDegreeTemp5 < -5) {
    topDegree5.setAttribute("data-temp", "sub--5");
  } else if (topDegreeTemp5 < 0) {
    topDegree5.setAttribute("data-temp", "sub-zero");
  } else if (topDegreeTemp5 < 5) {
    topDegree5.setAttribute("data-temp", "sub-5");
  } else {
    topDegree5.setAttribute("data-temp", "sub-10");
  }

  if (topDegreeTemp6 >= 10) {
    topDegree6.setAttribute("data-temp", "sub-20");
  } else if (topDegreeTemp6 < -15) {
    topDegree6.setAttribute("data-temp", "sub--15");
  } else if (topDegreeTemp6 < -10) {
    topDegree6.setAttribute("data-temp", "sub--10");
  } else if (topDegreeTemp6 < -5) {
    topDegree6.setAttribute("data-temp", "sub--5");
  } else if (topDegreeTemp6 < 0) {
    topDegree6.setAttribute("data-temp", "sub-zero");
  } else if (topDegreeTemp6 < 5) {
    topDegree6.setAttribute("data-temp", "sub-5");
  } else {
    topDegree6.setAttribute("data-temp", "sub-10");
  }

  const botDegreeTemp = document.getElementById(
    "min-deg-cell__value1"
  ).innerHTML;
  const botDegreeTemp1 = document.getElementById(
    "min-deg-cell__value2"
  ).innerHTML;
  const botDegreeTemp2 = document.getElementById(
    "min-deg-cell__value3"
  ).innerHTML;
  const botDegreeTemp3 = document.getElementById(
    "min-deg-cell__value4"
  ).innerHTML;
  const botDegreeTemp4 = document.getElementById(
    "min-deg-cell__value5"
  ).innerHTML;
  const botDegreeTemp5 = document.getElementById(
    "min-deg-cell__value6"
  ).innerHTML;
  const botDegreeTemp6 = document.getElementById(
    "min-deg-cell__value7"
  ).innerHTML;

  if (botDegreeTemp >= 10) {
    botDegree.setAttribute("data-temp", "sub-20");
  } else if (botDegreeTemp < -15) {
    botDegree.setAttribute("data-temp", "sub--15");
  } else if (botDegreeTemp < -10) {
    botDegree.setAttribute("data-temp", "sub--10");
  } else if (botDegreeTemp < -5) {
    botDegree.setAttribute("data-temp", "sub--5");
  } else if (botDegreeTemp < 0) {
    botDegree.setAttribute("data-temp", "sub-zero");
  } else if (botDegreeTemp < 5) {
    botDegree.setAttribute("data-temp", "sub-5");
  } else {
    botDegree.setAttribute("data-temp", "sub-10");
  }

  if (botDegreeTemp1 >= 10) {
    botDegree1.setAttribute("data-temp", "sub-20");
  } else if (botDegreeTemp1 < -15) {
    botDegree1.setAttribute("data-temp", "sub--15");
  } else if (botDegreeTemp1 < -10) {
    botDegree1.setAttribute("data-temp", "sub--10");
  } else if (botDegreeTemp1 < -5) {
    botDegree1.setAttribute("data-temp", "sub--5");
  } else if (botDegreeTemp1 < 0) {
    botDegree1.setAttribute("data-temp", "sub-zero");
  } else if (botDegreeTemp1 < 5) {
    botDegree1.setAttribute("data-temp", "sub-5");
  } else {
    botDegree1.setAttribute("data-temp", "sub-10");
  }

  if (botDegreeTemp2 >= 10) {
    botDegree2.setAttribute("data-temp", "sub-20");
  } else if (botDegreeTemp2 < -15) {
    botDegree2.setAttribute("data-temp", "sub--15");
  } else if (botDegreeTemp2 < -10) {
    botDegree2.setAttribute("data-temp", "sub--10");
  } else if (botDegreeTemp2 < -5) {
    botDegree2.setAttribute("data-temp", "sub--5");
  } else if (botDegreeTemp2 < 0) {
    botDegree2.setAttribute("data-temp", "sub-zero");
  } else if (botDegreeTemp2 < 5) {
    botDegree2.setAttribute("data-temp", "sub-5");
  } else {
    botDegree2.setAttribute("data-temp", "sub-10");
  }

  if (botDegreeTemp3 >= 10) {
    botDegree3.setAttribute("data-temp", "sub-20");
  } else if (botDegreeTemp3 < -15) {
    botDegree3.setAttribute("data-temp", "sub--15");
  } else if (botDegreeTemp3 < -10) {
    botDegree3.setAttribute("data-temp", "sub--10");
  } else if (botDegreeTemp3 < -5) {
    botDegree3.setAttribute("data-temp", "sub--5");
  } else if (botDegreeTemp3 < 0) {
    botDegree3.setAttribute("data-temp", "sub-zero");
  } else if (botDegreeTemp3 < 5) {
    botDegree3.setAttribute("data-temp", "sub-5");
  } else {
    botDegree3.setAttribute("data-temp", "sub-10");
  }

  if (botDegreeTemp4 >= 10) {
    botDegree4.setAttribute("data-temp", "sub-20");
  } else if (botDegreeTemp4 < -15) {
    botDegree4.setAttribute("data-temp", "sub--15");
  } else if (botDegreeTemp4 < -10) {
    botDegree4.setAttribute("data-temp", "sub--10");
  } else if (botDegreeTemp4 < -5) {
    botDegree4.setAttribute("data-temp", "sub--5");
  } else if (botDegreeTemp4 < 0) {
    botDegree4.setAttribute("data-temp", "sub-zero");
  } else if (botDegreeTemp4 < 5) {
    botDegree4.setAttribute("data-temp", "sub-5");
  } else {
    botDegree4.setAttribute("data-temp", "sub-10");
  }

  if (botDegreeTemp5 >= 10) {
    botDegree5.setAttribute("data-temp", "sub-20");
  } else if (botDegreeTemp5 < -15) {
    botDegree5.setAttribute("data-temp", "sub--15");
  } else if (botDegreeTemp5 < -10) {
    botDegree5.setAttribute("data-temp", "sub--10");
  } else if (botDegreeTemp5 < -5) {
    botDegree5.setAttribute("data-temp", "sub--5");
  } else if (botDegreeTemp5 < 0) {
    botDegree5.setAttribute("data-temp", "sub-zero");
  } else if (botDegreeTemp5 < 5) {
    botDegree5.setAttribute("data-temp", "sub-5");
  } else {
    botDegree5.setAttribute("data-temp", "sub-10");
  }

  if (botDegreeTemp6 >= 10) {
    botDegree6.setAttribute("data-temp", "sub-20");
  } else if (botDegreeTemp6 < -15) {
    botDegree6.setAttribute("data-temp", "sub--15");
  } else if (botDegreeTemp6 < -10) {
    botDegree6.setAttribute("data-temp", "sub--10");
  } else if (botDegreeTemp6 < -5) {
    botDegree6.setAttribute("data-temp", "sub--5");
  } else if (botDegreeTemp6 < 0) {
    botDegree6.setAttribute("data-temp", "sub-zero");
  } else if (botDegreeTemp6 < 5) {
    botDegree6.setAttribute("data-temp", "sub-5");
  } else {
    botDegree6.setAttribute("data-temp", "sub-10");
  }

  const chillDegreeTemp = document.getElementById("chill-deg-cell1").innerHTML;
  const chillDegreeTemp1 = document.getElementById("chill-deg-cell2").innerHTML;
  const chillDegreeTemp2 = document.getElementById("chill-deg-cell3").innerHTML;
  const chillDegreeTemp3 = document.getElementById("chill-deg-cell4").innerHTML;
  const chillDegreeTemp4 = document.getElementById("chill-deg-cell5").innerHTML;
  const chillDegreeTemp5 = document.getElementById("chill-deg-cell6").innerHTML;
  const chillDegreeTemp6 = document.getElementById("chill-deg-cell7").innerHTML;

  if (chillDegreeTemp >= 10) {
    chillDegree.setAttribute("data-temp", "sub-20");
  } else if (chillDegreeTemp < -15) {
    chillDegree.setAttribute("data-temp", "sub--15");
  } else if (chillDegreeTemp < -10) {
    chillDegree.setAttribute("data-temp", "sub--10");
  } else if (chillDegreeTemp < -5) {
    chillDegree.setAttribute("data-temp", "sub--5");
  } else if (chillDegreeTemp < 0) {
    chillDegree.setAttribute("data-temp", "sub-zero");
  } else if (chillDegreeTemp < 5) {
    chillDegree.setAttribute("data-temp", "sub-5");
  } else {
    chillDegree.setAttribute("data-temp", "sub-10");
  }

  if (chillDegreeTemp1 >= 10) {
    chillDegree1.setAttribute("data-temp", "sub-20");
  } else if (chillDegreeTemp1 < -15) {
    chillDegree1.setAttribute("data-temp", "sub--15");
  } else if (chillDegreeTemp1 < -10) {
    chillDegree1.setAttribute("data-temp", "sub--10");
  } else if (chillDegreeTemp1 < -5) {
    chillDegree1.setAttribute("data-temp", "sub--5");
  } else if (chillDegreeTemp1 < 0) {
    chillDegree1.setAttribute("data-temp", "sub-zero");
  } else if (chillDegreeTemp1 < 5) {
    chillDegree1.setAttribute("data-temp", "sub-5");
  } else {
    chillDegree1.setAttribute("data-temp", "sub-10");
  }

  if (chillDegreeTemp2 >= 10) {
    chillDegree2.setAttribute("data-temp", "sub-20");
  } else if (chillDegreeTemp2 < -15) {
    chillDegree2.setAttribute("data-temp", "sub--15");
  } else if (chillDegreeTemp2 < -10) {
    chillDegree2.setAttribute("data-temp", "sub--10");
  } else if (chillDegreeTemp2 < -5) {
    chillDegree2.setAttribute("data-temp", "sub--5");
  } else if (chillDegreeTemp2 < 0) {
    chillDegree2.setAttribute("data-temp", "sub-zero");
  } else if (chillDegreeTemp2 < 5) {
    chillDegree2.setAttribute("data-temp", "sub-5");
  } else {
    chillDegree2.setAttribute("data-temp", "sub-10");
  }

  if (chillDegreeTemp3 >= 10) {
    chillDegree3.setAttribute("data-temp", "sub-20");
  } else if (chillDegreeTemp3 < -15) {
    chillDegree3.setAttribute("data-temp", "sub--15");
  } else if (chillDegreeTemp3 < -10) {
    chillDegree3.setAttribute("data-temp", "sub--10");
  } else if (chillDegreeTemp3 < -5) {
    chillDegree3.setAttribute("data-temp", "sub--5");
  } else if (chillDegreeTemp3 < 0) {
    chillDegree3.setAttribute("data-temp", "sub-zero");
  } else if (chillDegreeTemp3 < 5) {
    chillDegree3.setAttribute("data-temp", "sub-5");
  } else {
    chillDegree3.setAttribute("data-temp", "sub-10");
  }

  if (chillDegreeTemp4 >= 10) {
    chillDegree4.setAttribute("data-temp", "sub-20");
  } else if (chillDegreeTemp4 < -15) {
    chillDegree4.setAttribute("data-temp", "sub--15");
  } else if (chillDegreeTemp4 < -10) {
    chillDegree4.setAttribute("data-temp", "sub--10");
  } else if (chillDegreeTemp4 < -5) {
    chillDegree4.setAttribute("data-temp", "sub--5");
  } else if (chillDegreeTemp4 < 0) {
    chillDegree4.setAttribute("data-temp", "sub-zero");
  } else if (chillDegreeTemp4 < 5) {
    chillDegree4.setAttribute("data-temp", "sub-5");
  } else {
    chillDegree4.setAttribute("data-temp", "sub-10");
  }

  if (chillDegreeTemp5 >= 10) {
    chillDegree5.setAttribute("data-temp", "sub-20");
  } else if (chillDegreeTemp5 < -15) {
    chillDegree5.setAttribute("data-temp", "sub--15");
  } else if (chillDegreeTemp5 < -10) {
    chillDegree5.setAttribute("data-temp", "sub--10");
  } else if (chillDegreeTemp5 < -5) {
    chillDegree5.setAttribute("data-temp", "sub--5");
  } else if (chillDegreeTemp5 < 0) {
    chillDegree5.setAttribute("data-temp", "sub-zero");
  } else if (chillDegreeTemp5 < 5) {
    chillDegree5.setAttribute("data-temp", "sub-5");
  } else {
    chillDegree5.setAttribute("data-temp", "sub-10");
  }

  if (chillDegreeTemp6 >= 10) {
    chillDegree6.setAttribute("data-temp", "sub-20");
  } else if (chillDegreeTemp6 < -15) {
    chillDegree6.setAttribute("data-temp", "sub--15");
  } else if (chillDegreeTemp6 < -10) {
    chillDegree6.setAttribute("data-temp", "sub--10");
  } else if (chillDegreeTemp6 < -5) {
    chillDegree6.setAttribute("data-temp", "sub--5");
  } else if (chillDegreeTemp6 < 0) {
    chillDegree6.setAttribute("data-temp", "sub-zero");
  } else if (chillDegreeTemp6 < 5) {
    chillDegree6.setAttribute("data-temp", "sub-5");
  } else {
    chillDegree6.setAttribute("data-temp", "sub-10");
  }

  function lines() {
    function drawline1() {
      var p1 = { x: point1.offsetLeft, y: point1.offsetTop };
      var p2 = { x: point2.offsetLeft, y: point2.offsetTop };
      var a = p1.x - p2.x;
      var b = p1.y - p2.y;
      var length = Math.sqrt(a * a + b * b);
      var angleDeg = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
      var pointWidth = point1.clientWidth / 2;
      var pointHeight = point1.clientWidth / 2;
      line.style.width = length + "px";
      line.style.left = p1.x + pointWidth + "px";
      line.style.top = p1.y + pointHeight + "px";
      line.style.transform = "rotate(" + angleDeg + "deg)";
    }
    function drawline2() {
      var p1 = { x: point2.offsetLeft, y: point2.offsetTop };
      var p2 = { x: point3.offsetLeft, y: point3.offsetTop };
      var a = p1.x - p2.x;
      var b = p1.y - p2.y;
      var length = Math.sqrt(a * a + b * b);
      var angleDeg = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
      var pointWidth = point1.clientWidth / 2;
      var pointHeight = point1.clientWidth / 2;
      line1.style.width = length + "px";
      line1.style.left = p1.x + pointWidth + "px";
      line1.style.top = p1.y + pointHeight + "px";
      line1.style.transform = "rotate(" + angleDeg + "deg)";
    }
    function drawline3() {
      var p1 = { x: point3.offsetLeft, y: point3.offsetTop };
      var p2 = { x: point4.offsetLeft, y: point4.offsetTop };
      var a = p1.x - p2.x;
      var b = p1.y - p2.y;
      var length = Math.sqrt(a * a + b * b);
      var angleDeg = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
      var pointWidth = point1.clientWidth / 2;
      var pointHeight = point1.clientWidth / 2;
      line2.style.width = length + "px";
      line2.style.left = p1.x + pointWidth + "px";
      line2.style.top = p1.y + pointHeight + "px";
      line2.style.transform = "rotate(" + angleDeg + "deg)";
    }
    function drawline4() {
      var p1 = { x: point4.offsetLeft, y: point4.offsetTop };
      var p2 = { x: point5.offsetLeft, y: point5.offsetTop };
      var a = p1.x - p2.x;
      var b = p1.y - p2.y;
      var length = Math.sqrt(a * a + b * b);
      var angleDeg = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
      var pointWidth = point1.clientWidth / 2;
      var pointHeight = point1.clientWidth / 2;
      line3.style.width = length + "px";
      line3.style.left = p1.x + pointWidth + "px";
      line3.style.top = p1.y + pointHeight + "px";
      line3.style.transform = "rotate(" + angleDeg + "deg)";
    }
    function drawline5() {
      var p1 = { x: point5.offsetLeft, y: point5.offsetTop };
      var p2 = { x: point6.offsetLeft, y: point6.offsetTop };
      var a = p1.x - p2.x;
      var b = p1.y - p2.y;
      var length = Math.sqrt(a * a + b * b);
      var angleDeg = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
      var pointWidth = point1.clientWidth / 2;
      var pointHeight = point1.clientWidth / 2;
      line4.style.width = length + "px";
      line4.style.left = p1.x + pointWidth + "px";
      line4.style.top = p1.y + pointHeight + "px";
      line4.style.transform = "rotate(" + angleDeg + "deg)";
    }
    function drawline6() {
      var p1 = { x: point6.offsetLeft, y: point6.offsetTop };
      var p2 = { x: point7.offsetLeft, y: point7.offsetTop };
      var a = p1.x - p2.x;
      var b = p1.y - p2.y;
      var length = Math.sqrt(a * a + b * b);
      var angleDeg = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
      var pointWidth = point1.clientWidth / 2;
      var pointHeight = point1.clientWidth / 2;
      line5.style.width = length + "px";
      line5.style.left = p1.x + pointWidth + "px";
      line5.style.top = p1.y + pointHeight + "px";
      line5.style.transform = "rotate(" + angleDeg + "deg)";
    }
    drawline1();
    drawline2();
    drawline3();
    drawline4();
    drawline5();
    drawline6();
  }
  lines();
}

function compareData() {
  var topDegree = document.getElementById("top-deg-cell");
  var topDegree1 = document.getElementById("top-deg-cell1");

  var botDegree = document.getElementById("min-deg-cell");
  var botDegree1 = document.getElementById("min-deg-cell1");

  var chillDegree = document.getElementById("chill-deg-cell1");
  var chillDegree1 = document.getElementById("chill-deg-cell2");

  var topDegreeTemp = document.getElementById("top-deg-cell__value1").innerHTML;
  var topDegreeTemp1 = document.getElementById(
    "top-deg-cell__value2"
  ).innerHTML;

  if (topDegreeTemp >= 10) {
    topDegree.setAttribute("data-temp", "sub-20");
  } else if (topDegreeTemp < -15) {
    topDegree.setAttribute("data-temp", "sub--15");
  } else if (topDegreeTemp < -10) {
    topDegree.setAttribute("data-temp", "sub--10");
  } else if (topDegreeTemp < -5) {
    topDegree.setAttribute("data-temp", "sub--5");
  } else if (topDegreeTemp < 0) {
    topDegree.setAttribute("data-temp", "sub-zero");
  } else if (topDegreeTemp < 5) {
    topDegree.setAttribute("data-temp", "sub-5");
  } else {
    topDegree.setAttribute("data-temp", "sub-10");
  }

  if (topDegreeTemp1 >= 10) {
    topDegree1.setAttribute("data-temp", "sub-20");
  } else if (topDegreeTemp1 < -15) {
    topDegree1.setAttribute("data-temp", "sub--15");
  } else if (topDegreeTemp1 < -10) {
    topDegree1.setAttribute("data-temp", "sub--10");
  } else if (topDegreeTemp1 < -5) {
    topDegree1.setAttribute("data-temp", "sub--5");
  } else if (topDegreeTemp1 < 0) {
    topDegree1.setAttribute("data-temp", "sub-zero");
  } else if (topDegreeTemp1 < 5) {
    topDegree1.setAttribute("data-temp", "sub-5");
  } else {
    topDegree1.setAttribute("data-temp", "sub-10");
  }

  const botDegreeTemp = document.getElementById(
    "min-deg-cell__value1"
  ).innerHTML;
  const botDegreeTemp1 = document.getElementById(
    "min-deg-cell__value2"
  ).innerHTML;

  if (botDegreeTemp >= 10) {
    botDegree.setAttribute("data-temp", "sub-20");
  } else if (botDegreeTemp < -15) {
    botDegree.setAttribute("data-temp", "sub--15");
  } else if (botDegreeTemp < -10) {
    botDegree.setAttribute("data-temp", "sub--10");
  } else if (botDegreeTemp < -5) {
    botDegree.setAttribute("data-temp", "sub--5");
  } else if (botDegreeTemp < 0) {
    botDegree.setAttribute("data-temp", "sub-zero");
  } else if (botDegreeTemp < 5) {
    botDegree.setAttribute("data-temp", "sub-5");
  } else {
    botDegree.setAttribute("data-temp", "sub-10");
  }

  if (botDegreeTemp1 >= 10) {
    botDegree1.setAttribute("data-temp", "sub-20");
  } else if (botDegreeTemp1 < -15) {
    botDegree1.setAttribute("data-temp", "sub--15");
  } else if (botDegreeTemp1 < -10) {
    botDegree1.setAttribute("data-temp", "sub--10");
  } else if (botDegreeTemp1 < -5) {
    botDegree1.setAttribute("data-temp", "sub--5");
  } else if (botDegreeTemp1 < 0) {
    botDegree1.setAttribute("data-temp", "sub-zero");
  } else if (botDegreeTemp1 < 5) {
    botDegree1.setAttribute("data-temp", "sub-5");
  } else {
    botDegree1.setAttribute("data-temp", "sub-10");
  }

  var chillDegreeTemp = document.getElementById("chill-deg-cell1").innerHTML;
  var chillDegreeTemp1 = document.getElementById("chill-deg-cell2").innerHTML;

  if (chillDegreeTemp >= 10) {
    chillDegree.setAttribute("data-temp", "sub-20");
  } else if (chillDegreeTemp < -15) {
    chillDegree.setAttribute("data-temp", "sub--15");
  } else if (chillDegreeTemp < -10) {
    chillDegree.setAttribute("data-temp", "sub--10");
  } else if (chillDegreeTemp < -5) {
    chillDegree.setAttribute("data-temp", "sub--5");
  } else if (chillDegreeTemp < 0) {
    chillDegree.setAttribute("data-temp", "sub-zero");
  } else if (chillDegreeTemp < 5) {
    chillDegree.setAttribute("data-temp", "sub-5");
  } else {
    chillDegree.setAttribute("data-temp", "sub-10");
  }

  if (chillDegreeTemp1 >= 10) {
    chillDegree1.setAttribute("data-temp", "sub-20");
  } else if (chillDegreeTemp1 < -15) {
    chillDegree1.setAttribute("data-temp", "sub--15");
  } else if (chillDegreeTemp1 < -10) {
    chillDegree1.setAttribute("data-temp", "sub--10");
  } else if (chillDegreeTemp1 < -5) {
    chillDegree1.setAttribute("data-temp", "sub--5");
  } else if (chillDegreeTemp1 < 0) {
    chillDegree1.setAttribute("data-temp", "sub-zero");
  } else if (chillDegreeTemp1 < 5) {
    chillDegree1.setAttribute("data-temp", "sub-5");
  } else {
    chillDegree1.setAttribute("data-temp", "sub-10");
  }
}

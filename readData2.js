async function read_data1(myCallback1) {
    const response = await fetch('csv/data/test/WeatherHeavensPeakNew (1).csv');
    const data = await response.text();
    const rows = data.split('\n').slice(1);
    var total = 0;
    rows.forEach(elt => {
        const row = elt.split(',');
        date = row[0];
        peak_wind_gust = row[2];
        mid_wind_gust = row[3];
        vlly_wind_gust = row[4];
        peak_wind_spd = row[5];
        mid_wind_spd = row[6];
        vlly_wind_spd = row[7];
        peak_min_tmp = row[8];
        peak_max_tmp = row[9];
        peak_feel_like = row[10];
        mid_min_temp = row[11];
        mid_max_tmp = row[12];
        mid_feel_like = row[13];
        vlly_min_tmp = row[14];
        vlly_max_tmp = row[15];
        vlly_feel_like = row[16];
        inversion = row[17];
        peak_w2 = row[18];
        peak_w5 = row[19];
        mid_w2 = row[20];
        mid_w5 = row[21];
        vlly_w2 = row[22];
        vlly_w5 = row[23];
        peak_rain = row[24];
        mid_rain = row[25];
        vlly_rain = row[26];
        peak_snow = row[27];
        mid_snow = row[28];
        vlly_snow = row[29];
        thunder = row[31];
        pk_snow_dph = row[32];
        md_snow_dph = row[33];
        vy_snow_dph = row[34];
        wind_dir = row[35];
        // console.log(date)
        // console.log(peak_wind_gust)
        total = parseFloat(total) + parseFloat(vlly_snow);
        console.log(total)
        myCallback1()
    })
};
async function read_data(myCallback) {
    // const response = await fetch('csv/data/test/data_hp.csv');
    // const response = await fetch('csv/data/official/data_hp_archive_2014-7.csv');
    // const response = await fetch('csv/data/test/WeatherHeavensPeakNew (1).csv');
    const response = await fetch('csv/data/official/weatherHeavenPeaknew.csv');
    const data = await response.text();
    const rows = data.split('\n').slice(1);
    var total = 0;
    rows.forEach(elt => {
        const row = elt.split(',');
        date = row[0];
        peak_wind_gust = row[1];
        mid_wind_gust = row[2];
        vlly_wind_gust = row[3];
        peak_wind_spd = row[4];
        mid_wind_spd = row[5];
        vlly_wind_spd = row[6];
        peak_min_tmp = row[7];
        peak_max_tmp = row[8];
        peak_feel_like = row[9];
        mid_min_temp = row[10];
        mid_max_tmp = row[11];
        mid_feel_like = row[12];
        vlly_min_tmp = row[13];
        vlly_max_tmp = row[14];
        vlly_feel_like = row[15];
        inversion = row[16];
        peak_w2 = row[17];
        peak_w5 = row[18];
        mid_w2 = row[19];
        mid_w5 = row[20];
        vlly_w2 = row[21];
        vlly_w5 = row[22];
        peak_rain = row[23];
        mid_rain = row[24];
        vlly_rain = row[25];
        peak_snow = row[26];
        mid_snow = row[27];
        vlly_snow = row[28];
        thunder = row[30];
        pk_snow_dph = row[33];
        md_snow_dph = row[36];
        vy_snow_dph = row[39];
        wind_dir = row[40];
        total = parseFloat(total) + parseFloat(vlly_snow);
        console.log(total)
        myCallback()
    })
};
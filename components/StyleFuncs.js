
export function getColorAqi (aqi) {
  if (!aqi) return '#e2f1f8';
  if (aqi >= 0 && aqi <= 50) return '#66BB6A'; // green
  if (aqi >= 51 && aqi <= 100) return '#FFF176'; // yellow
  if (aqi >= 101 && aqi <= 150) return '#FFA726'; // orange
  if (aqi >= 151 && aqi <= 200) return '#EF5350'; // red
  if (aqi >= 201 && aqi <= 300) return '#9C27B0'; // purple
  if (aqi >= 301 && aqi <= 500) return '#880E4F'; // maroon
}

function getColorHumidity (humidity) {
  if (!humidity) return '#e2f1f8';
  if (humidity >= 0 && humidity <= 20) return '#B3E5FC';
  if (humidity >= 21 && humidity <= 40) return '#4FC3F7';
  if (humidity >= 41 && humidity <= 60) return '#03A9F4';
  if (humidity >= 61 && humidity <= 80) return '#0288D1';
  if (humidity >= 81 && humidity <= 100) return '#01579B';
}

export function circleStyle (data) {
  let color;
  if (!data.length) {
    color = getColorAqi();
  } else if (data[0].hasOwnProperty('aqi')) {
    color = getColorAqi(data[0].aqi);
  } else {
    color = getColorHumidity(data[0].humidity);
  }
  return {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: color,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#37474f',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
}

const lastModified = document.querySelector("#lastmodified");
const windChillSpan = document.querySelector("#windChill");

lastModified.textContent = document.lastModified;
const calculateWindChill = (temperature, windspeed) => {
  if (temperature > 10 || windspeed <= 4.8) {
    return "N/A";
  }

  let windchill =
    13.12 +
    0.6215 * temperature -
    11.37 * Math.pow(windspeed, 0.16) +
    0.3965 * temperature * Math.pow(windspeed, 0.16);

  return String(Math.round(windchill * 100) / 100);
};
let temperature = 5;
let windspeed = 10;
const windchill = calculateWindChill(temperature, windspeed);
windChillSpan.textContent = windchill + "°C";

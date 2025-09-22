const lastModified = document.querySelector("#lastmodified");

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

  return windchill;
};

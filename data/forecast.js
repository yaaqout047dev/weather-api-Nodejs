const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=6fa0c4488dc9eccb88bd1510510296f6&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Error Has Happened", undefined);
    } else if (response.body.error) {
      callback(response.body.error.message, undefined);
    } else {
      callback(
        undefined,
        response.body.location.name +
          "\n* it is : " +
          response.body.current.weather_descriptions[0] +
          "\n* temperature is : " +
          response.body.current.temperature +
          " ْC"
      );
    }
  });
};

module.exports = forecast;

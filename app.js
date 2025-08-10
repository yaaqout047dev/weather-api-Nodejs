const forecast = require("./data/forecast");
const geocode = require("./data/geocode");

const address = process.argv[2];

geocode(address, (error, data) => {
  console.log("Error : ", error);
  console.log("Location : ", data);

  forecast(data.latitude, data.longitude, (error, data) => {
    console.log("Error : ", error);
    console.log("Location : ", data);
  });
});

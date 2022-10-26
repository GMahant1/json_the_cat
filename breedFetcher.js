const request = require("request");
// breed search api link https://api.thecatapi.com/v1/breeds/search

//add functionality for command line arguments
const userInputBreed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${userInputBreed}`, function(error, response, body) {
  if (error) {
    console.log("Error occured", error);
    return;
  }
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Error: Invalid breed type");
    return;
  }
  console.log(data[0].description);
});


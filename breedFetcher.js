const request = require("request");
// breed search api link https://api.thecatapi.com/v1/breeds/search

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {

    if (error) {
      callback(error, null);
      return;
    }

    const desc = JSON.parse(body);
    if (desc.length === 0) {
      callback("Breed not found", null);
      return;
    }

    callback(null, desc[0].description);
  });
};

module.exports = { fetchBreedDescription };

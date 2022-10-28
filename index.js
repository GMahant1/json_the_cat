//import breedFetcher function
const { fetchBreedDescription } = require("./breedFetcher");

//command line argument
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error fetch details: ", error);
  } else {
    if (desc === null) {
      console.log("Breed not found");
    } else {
      console.log(desc);
    };
  };
});



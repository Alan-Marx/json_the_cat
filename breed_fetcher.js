const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (err, request, body) => {
    if (err) {
      callback(err, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback ('The requested breed cannot be found', null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };

  










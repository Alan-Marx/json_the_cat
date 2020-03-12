const request = require('request');




request('https://api.thecatapi.com/v1/breeds/search?q=' + process.argv.slice(2).join(' '), (err, request, body) => {
  if (err) {
    console.log('Error:', err);
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('The requested breed cannot be found');
  } else {
    console.log(data[0].description);
  }
});


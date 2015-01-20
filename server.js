var express = require('express');
var app = express();
var server = require('http').createServer(app);
var Twit = require('twit');
var fs = require('fs');
var https = require('https');
// var bodyParser = require('body-parser')

var port = process.env.PORT || 8000;

var placesData;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))

server.listen(port, function() {
  console.log('Server listening on port ' + port);
});

// var auth = new Twit({
//   consumer_key:         process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret:      process.env.TWITTER_CONSUMER_SECRET,
//   access_token:         process.env.TWITTER_ACCESS_TOKEN,
//   access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET
// });
//
// var centralLondon = ['-0.5654233', '51.2415153', '0.3109232', '51.7419679'];
//
// var stream = auth.stream('statuses/filter', { locations: centralLondon });
//
// var count = 0
//
// stream.on('tweet', function (tweet) {
//
//   fs.appendFile("./tweets.txt", JSON.stringify(tweet) + "\n", function(err) {
//     if(err) {
//       console.log(err);
//     } else {
//       count++;
//       console.log('Saved tweet number ' + count + ': ' + tweet.text);
//     }
//   });
// });

var key = process.env.GOOGLE_PLACES_KEY;

https.get("https://maps.googleapis.com/maps/api/place/radarsearch/json?location=51.517307,-0.073403&radius=200&types=bar&key=" + key, function(response) {
  var buf = '';
  response.setEncoding('utf8');
  response.on('data', function(data) {
    buf += data;
  }).on('end', function() {
    placesData = JSON.parse(buf);
    app.get('/', function(request, response) {
      response.render('index', placesData);
    });
  })
})

    // fs.appendFile("./places.txt", data, function(err) {
    //       if(err) {
    //
    //       } else {
    //
    //       }
    // });
  //   console.log(data);
  // });
//
// }).on('error', function(e) {
//   console.log("Got error: " + e.message);
//
// });

// fs.readFile('./places.txt', 'utf8', function (err, data) {
//   if (err) throw err;
//   placesData = data;
//   console.log(placesData);
// });


module.exports = server;

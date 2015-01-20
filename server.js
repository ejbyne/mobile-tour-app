var express = require('express');
var app = express();
var server = require('http').createServer(app);
var Twit = require('twit');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

server.listen(port, function() {
  console.log('Server listening on port ' + port);
});

var auth = new Twit({
  consumer_key:         process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:      process.env.TWITTER_CONSUMER_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var centralLondon = ['-0.5654233', '51.2415153', '0.3109232', '51.7419679'];

var stream = auth.stream('statuses/filter', { locations: centralLondon });

var count = 0

stream.on('tweet', function (tweet) {
  console.log(count ++);
  console.log(tweet["text"]);
});

module.exports = server;
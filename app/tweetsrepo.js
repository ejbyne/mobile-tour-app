var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TweetSchema = new Schema({

  details: Object

});

module.exports = mongoose.model('Tweet', TweetSchema);

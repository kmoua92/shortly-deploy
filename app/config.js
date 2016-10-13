var path = require('path');
// Connection URL - change for live, keep for local
var url = 'mongodb://localhost:27017/shortly';
//connect the database to the orm, mongoose
var mongoose = require('mongoose');
mongoose.connect(url);
//need to connect to the mongo db database
//this connection serves as our way to get and set data from the database
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connecting to db!');
});


var urlSchema = mongoose.Schema({
  id: ObjectId, // new mongoose.Types.ObjectId;
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number,
  timestamps: Date // Date.now
});

var userSchema = mongoose.Schema({
  id: ObjectId,
  username: String,
  password: String,
  timestamps: Date
});


module.exports = db;




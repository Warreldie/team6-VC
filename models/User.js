const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  username: String,
  email: String,
  password: String,
  tokens: Number
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
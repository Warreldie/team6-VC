const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Transfer = new Schema({
  sender: String,
  recipient: String,
  reason: String,
  message: String,
  amount: Number
});

module.exports = mongoose.model('Transfer', Transfer);
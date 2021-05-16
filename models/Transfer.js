const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Transfer = new Schema({
  recipient: String,
  reason: String,
  message: String,
  amount: Number
});

module.exports = mongoose.model('Transfer', Transfer);
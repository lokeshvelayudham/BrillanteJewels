const mongoose = require('mongoose');

const goldItemSchema = new mongoose.Schema({
  name: String,
  grams: Number,
  price: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('GoldItem', goldItemSchema);
var mongoose = require('mongoose');

module.exports = mongoose.model('Prop', {
  address: {type: String, default: '', trim: true},
  occupied: {type: Boolean, default: false},
  price: {type: Number, default: 0},
  util: {type: Number, default: 0},
  other: {type: String, default: '', trim: true}
})

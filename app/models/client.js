var mongoose = require('mongoose');

module.exports = mongoose.model('Client', {
  name: {type: String, default: '', trim: true}
  email: {type: String, default: '', trim: true}
  phone: {type: String, default: '', trim: true}
  other: {type: String, default: '', trim: true}
})

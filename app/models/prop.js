'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = mongoose.model('Prop',

var PropSchema = new Schema({
  name: {type: String, default: '', trim: true},
  email: {type: String, default: '', trim: true},
  phone: {type: String, default: '', trim: true},
  created: {type: Date, default: Date.now},
  other: {type: String, default: '', trim: true},
  client: {type: Schema.ObjectId, ref:'Client'}
});

mongoose.model('Prop', PropSchema);

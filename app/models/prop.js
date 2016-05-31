'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var PropSchema = new Schema({
  name: {type: String, default: '', trim: true},
  address: {type: String, default: '', trim: true},
  rent: {type: Number, default: '', trim: true},
  util: {type: Number, default: '', trim: true},
  created: {type: Date, default: Date.now},
  other: {type: String, default: '', trim: true},
  client: {type: Schema.ObjectId, ref:'Client'}
});

module.exports = mongoose.model('Prop', PropSchema);

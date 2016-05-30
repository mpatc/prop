'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;



var ClientSchema = new Schema({
  name: {type: String, default: '', trim: true},
  email: {type: String, default: '', trim: true},
  phone: {type: String, default: '', trim: true},
  created: {type: Date, default: Date.now},
  other: {type: String, default: '', trim: true},
  prop: {type: Schema.ObjectId, ref:'Prop'}
});

module.exports = mongoose.model('Client', ClientSchema);

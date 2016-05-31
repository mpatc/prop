'use strict'


var path = require('path'),
  mongoose = require('mongoose'),
  _ = require('lodash'),
 Prop = mongoose.model('Prop');

exports.create = function(req, res) {
  var prop = new Prop(req.body);
  prop.client = req.name;

  prop.save(function(err){
    if (err) {
      return res.status(400).send('err');
    } else {
      res.jsonp(prop)
    }
  })
};

exports.read = function(req, res) {
  var prop = req.prop ? req.prop.toJSON() : {};
  res.jsonp(prop);
};


exports.update = function(req, res) {
  var prop = req.prop ;

  prop = _.extend(prop , req.body)
  prop.save(function(err){
    if (err) {
      return res.status(400).send('err');
    } else {
      res.jsonp(prop)
    }
  })
};

exports.delete = function(req, res) {
  var prop = req.prop ;
  prop.remove(function(err){
    if (err) {
      return res.status(400).send('err');
    } else {
      res.jsonp(prop)
    }
  })
  };


  exports.list = function(req, res) {
    Prop.find().sort('-created').populate('client', 'name').exec(function(err, prop){
      if (err) {
        return res.status(400).send('err');
      } else {
        res.jsonp(prop);
    }
  });
};


  exports.propByID = function(req, res, next, id) {

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({
        message: 'prop is invalid'
      });
    }

    Prop.findById(id).populate('client', 'name').exec(function (err, prop) {
      if (err) {
        return next(err);
      } else if (!prop) {
        return res.status(404).send({
          message: 'No prop with that identifier has been found'
        });
      }
      req.prop = prop;
      next();
    });
  };

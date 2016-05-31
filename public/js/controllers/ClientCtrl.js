'use strict'


angular.module('ClientCtrl', []).controller('ClientController', function($scope) {

    $scope.tagline = 'To the moon and back!';

});

//
// var path = require('path'),
//   mongoose = require('mongoose'),
//   _ = require('lodash'),
//  Client = mongoose.model('Client');
//
// exports.create = function(req, res) {
//   var client = new Client(req.body);
//   client.address = req.address
//
//   client.save(function(err){
//     if (err) {
//       return res.status(400).send('err');
//     } else {
//       res.jsonp(client)
//     }
//   })
// };
//
// exports.read = function(req, res) {
//   var client = req.client ? req.client.toJSON() : {};
//   res.jsonp(client);
// };
//
//
// exports.update = function(req, res) {
//   var client = req.client ;
//
//   client = _.extend(client , req.body)
//   client.save(function(err){
//     if (err) {
//       return res.status(400).send('err');
//     } else {
//       res.jsonp(client)
//     }
//   })
// };
//
// exports.delete = function(req, res) {
//   var client = req.client ;
//   client.remove(function(err){
//     if (err) {
//       return res.status(400).send('err');
//     } else {
//       res.jsonp(client);
//     }
//   })
//   };
//
//
//   exports.list = function(req, res) {
//     Client.find().sort('-created').populate('prop', 'address').exec(function(err, client){
//       if (err) {
//         return res.status(400).send('err');
//       } else {
//         res.jsonp(client);
//     }
//   });
//   }
//
//
//   exports.clientByID = function(req, res, next, id) {
//
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).send({
//         message: 'client is invalid'
//       });
//     }
//
//     Client.findById(id).populate('prop', 'address').exec(function (err, client) {
//       if (err) {
//         return next(err);
//       } else if (!listing) {
//         return res.status(404).send({
//           message: 'No client with that identifier has been found'
//         });
//       }
//       req.client = client;
//       next();
//     });
//   };

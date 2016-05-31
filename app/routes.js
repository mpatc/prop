'use strict';


var props = require('../public/js/props'),
    clients = require('../public/js/clients');

module.exports = function(app) {

  app.route('/api/props')
  .get(props.list)
  .post(props.create);

  app.route('/api/props/:propId')
  .get(props.read)
  .put(props.update)
  .delete(props.delete);

  app.route('/api/clients')
  .get(clients.list)
  .post(clients.create);

  app.route('/api/clients/:clientId')
  .get(clients.read)
  .put(clients.update)
  .delete(clients.delete);



  app.param('propId', props.propByID);

  app.param('clientId', clients.clientByID);

  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  })
}

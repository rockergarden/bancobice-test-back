'use strict';

module.exports = function(app) {
    var indicatorsController = require('./indicators.controller')
    var cors = require('cors')
  

    //activa cors
    app.use(cors());

    app.route('/get_last')
      .get(indicatorsController.get_last);

    app.route('/get_detail')
      .get(indicatorsController.get_detail);

    app.listen(80, function () {
      console.log('CORS-enabled web server listening on port 80')
    })
}
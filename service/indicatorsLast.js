'use strict';

var request = require('request');
var config = require('../config/config');
var url = config.endpoint.url;

var indicatorsLast = {
    last: function (req, res, next) {
        request(url + '/last',
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    response = JSON.parse(body);
                    res.send(response);
                } else {
                    console.log(response.statusCode + response.body);
                    res.send({ distance: -1 });
                }
            });

    }
};

module.exports = indicatorsLast;
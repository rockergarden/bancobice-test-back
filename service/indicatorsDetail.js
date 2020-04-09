'use strict';

var request = require('request');
var config = require('../config/config');
var url = config.endpoint.url;

var indicatorsDetail = {
    detail: function (req, res, next) {
        request(url + '/values/' + req.query.key,
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

module.exports = indicatorsDetail;
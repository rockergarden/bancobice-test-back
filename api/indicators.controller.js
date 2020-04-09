'use strict';
var properties = require('../package.json')
var indicatorsLast = require('../service/indicatorsLast');
var indicatorsDetail = require('../service/indicatorsDetail');
var controllers = {
    
    get_last: function (req, res) {
        indicatorsLast.last(req, res, function (err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },

    get_detail: function (req, res) {
        //console.log(req.query.key)
        indicatorsDetail.detail(req, res, function (err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
};
module.exports = controllers;
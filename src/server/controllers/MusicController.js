var _ = require('lodash');
var Promise = require("bluebird");
var request = Promise.promisify(require('request'));

var SpotifySvc = require('../services/SpotifySvc');

module.exports = {
    getArtistAlbums(req, res){
        'use strict';

        SpotifySvc.getAlbums().then(function (items) {
            res.send(items);
        }).catch(function(){
            res.sendStatus(400);
        });
    }
}


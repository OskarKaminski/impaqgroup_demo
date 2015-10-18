(
    function () {
        'use strict';

        const _ = require('lodash'),
            Promise = require("bluebird"),
            request = Promise.promisify(require('request'));

        const maxLimit = 50,
            searchingAlbum = 'Iron Maiden';

        module.exports = {
            getAlbums(){
                return new Promise(function (resolve, reject) {
                    getAlbumsNumber(searchingAlbum)
                        .then(prepareQueries)
                        .then(getSpotifyAlbums)
                        .then(function (promises) {
                            Promise.all(promises)
                                .then(function (items) {
                                    var merged = [].concat.apply([], items);
                                    merged = _.uniq(merged, function (item) {
                                        return item.name.toLowerCase();
                                    });
                                    resolve(merged);
                                })
                        }).catch(reject);
                });
            }
        }

        function getAlbumsNumber (name) {
            return new Promise(function (resolve, reject) {
                let qs = {q: name, type: 'album', limit: 1, offset: 0};

                request({url: 'https://api.spotify.com/v1/search', qs: qs, json: true})
                    .spread(function (response, body) {
                        resolve(body.albums.total);
                    }).catch(reject);
            });
        }

        function prepareQueries (albumsNumber) {
            return new Promise(function (resolve) {

                var queriesNumber = Math.ceil(albumsNumber / maxLimit);
                let queries = [];
                for (let i = 0; i < queriesNumber; i++) {
                    queries.push({
                        q: searchingAlbum,
                        type: 'album',
                        limit: maxLimit,
                        offset: i * maxLimit
                    });
                }
                resolve(queries);

            });
        }

        function getSpotifyAlbums (queries) {
            var promises = [];
            queries.forEach(query => {
                var promise = new Promise(function (resolve, reject) {

                    request({url: 'https://api.spotify.com/v1/search', qs: query, json: true})
                        .spread(function (response, body) {
                            resolve(body.albums.items);
                        }).catch(reject);
                });
                promises.push(promise);
            });
            return promises;
        }
    }
)()
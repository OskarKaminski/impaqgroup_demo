var musicCtrl = require('../controllers/MusicController');

module.exports = function(app) {

  app.get('/api/music/albums', musicCtrl.getArtistAlbums);

  app.all('/api/*', function(req, res) {
    res.send(404);
  });

  app.get('*', function(req, res) {
    res.sendFile('index.html');
  });
}
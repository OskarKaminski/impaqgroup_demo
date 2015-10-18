angular.module('app').controller('MusicCtrl', function($scope, MusicSvc){
    MusicSvc.getAlbums().then(function(albums){
        $scope.albums = albums;
    });
});
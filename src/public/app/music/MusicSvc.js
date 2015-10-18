angular.module('app').factory('MusicSvc', function($http){
    return {
        getAlbums: function(){
            return $http.get('/api/music/albums').then(function(response){
                return response.data;
            });
        }
    }

});
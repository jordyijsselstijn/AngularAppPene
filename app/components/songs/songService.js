angular
    .module('app').service('SongService', function($http, $q){
        var deferred = $q.defer();
        var url = "https://api.soundcloud.com/users/6367745/tracks.json?client_id=YOUR_CLIENT_ID";

        $http.get(url).then(function(data){
            deferred.resolve(data);
        });
        this.getSongs = function(){
            return deferred.promise;
        };
    });
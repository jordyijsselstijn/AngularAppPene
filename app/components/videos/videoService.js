angular
    .module('app').service('VideoService', function($http, $q){

        var deferred = $q.defer();

        $http.get('assets/js/videos.json').then(function(data){

            deferred.resolve(data);

        });

        this.getVideos = function(){

            return deferred.promise;

        };
    });
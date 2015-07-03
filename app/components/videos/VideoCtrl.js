angular
    .module('app')
    .controller('videoCtrl',['$scope', 'VideoService', function($scope, VideoService){

        $scope.title = "home";
        $scope.nameSpace = "app/app.js";

        var promise = VideoService.getVideos();

        promise.then(function(data){
            $scope.videos = data.data;
        });

    }]);
angular
    .module('app')
    .controller('homeCtrl',['$scope', 'ShowService', function($scope, ShowService){

        $scope.showToAdd = {};
        $scope.showToAdd.link ="";

        var promise = ShowService.getShows();

        promise.then(function(data){

            $scope.shows = data.data;

        });

        $scope.sendForm = function(){

            $scope.showToAdd.img = $("#eventPic").attr("src");
            ShowService.insertShow($scope.showToAdd);

        };


        $scope.pullFBPic = function(){

            if($scope.showToAdd.link!=""){

                var link = $scope.showToAdd.link;
                var eventId = link.split("/")[4];

                ShowService.getFBPic(eventId);

            }

        };



    }]);
angular.module('nowPlaying',[])
        .directive('nowPlaying', function(){

       return{

           restrict:"A",
           scope:'=',
           link:function(s,e,a){

           },
           controller:function($scope, $element){


               $scope.$watch('currentPlaying', setColor);


               function setColor(){

                    $(".singleSong").css('font-weight', 400);
                    $("#"+$scope.currentPlaying).css('font-weight', 600);

               }
           }

       };



    });
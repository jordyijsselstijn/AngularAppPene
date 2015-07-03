angular.module('player',[])
    .directive('player', function(){

       return{
           restrict:"E",
           templateUrl:"app/shared/player/player.html",
           link:function(s,e,a){

               console.log("created "+e);

           },
           controller:function($scope){



           }




       };



    });
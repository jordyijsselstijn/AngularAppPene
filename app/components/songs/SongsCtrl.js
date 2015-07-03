angular
    .module('app')
    .controller('songsCtrl',['$scope','SongService', '$rootScope', function($scope, SongService, $rootScope){

        $scope.title = "home";
        $scope.nameSpace = "app/app.js";




        if($rootScope.currentSong==null){

            $rootScope.currentPlaying=0;
            $rootScope.currentSong = "";

        }else{

            //$rootScope.currentPlaying = song.song.id;
            //$rootScope.currentSong = song.song.title;

        }

        var promise = SongService.getSongs();

        promise.then(function(data){

            $scope.songs = data.data;
            console.log($scope.songs);

        });

        $scope.initializeSoundCloud = function(){

            SC.initialize({
                client_id: '1ee188dc631432bd1402390fcbf15258'
            });

        };

        $scope.playSound = function(song){


            if($scope.player!=undefined){

                $scope.player.kill();

            }

            console.log($scope);

                $rootScope.currentPlaying = song.song.id;
                $rootScope.currentSong = song.song.title;


                SC.stream("/tracks/"+$scope.currentPlaying, function(sound){


                    $rootScope.player = sound._player;
                    sound.play();
                });



        };

        $scope.stopSound = function(){

            if($rootScope.player!=undefined){
                $rootScope.player.kill();
                $rootScope.currentPlaying=0;
            }
        };

        if($rootScope.currentSong==""){

            $scope.initializeSoundCloud();
        }




    }]);
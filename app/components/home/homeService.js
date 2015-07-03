angular
    .module('app').service('ShowService', function($http, $q){

        var deferred = $q.defer();

        $http.get('server/getShows.php').then(function(data){
           deferred.resolve(data);
        });

        this.getShows = function(){
          return deferred.promise;
        };

        this.insertShow = function(show){

            $http.post('server/insertShow.php', show).
                success(function(data, status, headers, config) {

                    console.log(data);
                }).
                error(function(data, status, headers, config) {

                    console.log(data);

                });

            console.log("call from service "+ show);

        };

        this.getFBPic = function(eventId){

            FB.api(
                "/"+eventId+"/picture",
                {
                    "redirect": false,
                    "type": "normal",
                    "access_token":"986060144777446|NymQTLg1ODUzcWZTQdVKRNyDuVg"
                },
                function (response) {

                    if (response && !response.error) {
                        $("#eventPic").attr("src",response.data.url );
                    }else{
                        console.log(response.error);
                    }
                }
            );

        }


    });
angular.module('show', [])
    .directive('show', function(){

       return{

           restrict:"A",
           templateUrl:'app/shared/show/showView.html',
           scope: '=' ,
           link:function(s,e,a){

               s.modalShow = e;


           },
           controller:function($scope){

               $scope.selectedEl = function(e){

                   var modal=$($scope.modalShow);


                   modal.modal({closable:false});
                   modal.modal('setting', { detachable:false }).modal('show');



                   $scope.show = e.show;
                   $scope.placeMap($scope.show);

               };

               $scope.placeMap = function(show){


                   var long = show.geoLong;
                   var latt = show.geoLat;
                   var showTitle = show.name;
                   var showVenue = show.showVenue;


                   L.mapbox.accessToken = 'pk.eyJ1Ijoiam9yZHlpanNzZWxzdGlqbiIsImEiOiI4ODhjMDcwZWZmODczZDIxZjljYjkxNDk4NWExYTEzYiJ9.Ms-0B7kxtAo1hW1GO0Wx_Q';
                   var map = L.mapbox.map('map', 'jordyijsselstijn.medof7ob')
                       .setView([latt, long], 9);

                   L.mapbox.featureLayer({
                       // this feature is in the GeoJSON format: see geojson.org
                       // for the full specification
                       type: 'Feature',
                       geometry: {
                           type: 'Point',
                           // coordinates here are in longitude, latitude order because
                           // x, y is the standard for GeoJSON and many formats
                           coordinates: [
                               long,
                               latt
                           ]
                       },
                       properties: {
                           title: showTitle,
                           description: showVenue,
                           // one can customize markers by adding simplestyle properties
                           // https://www.mapbox.com/guides/an-open-platform/#simplestyle
                           'marker-size': 'large',
                           'marker-color': '#BE9A6B',
                           'marker-symbol': 'music'
                       }
                   }).addTo(map);

               };

               $scope.destroyMap = function(){

                    $('#map').remove();
                    $('#showDesc').append('<div id="map"></div>');

               };

           }


       };



    });
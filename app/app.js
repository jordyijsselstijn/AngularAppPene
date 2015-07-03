angular
	.module('app',[
		'ui.router',
		'sideBar',
		'toolTip',
		'show',
		'nowPlaying',
		'player',
		'ngYouTubeAPI',
		'addShow'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){

			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('home', {

					url:'/',
					templateUrl:'app/components/home/homeView.html',
					controller: 'homeCtrl'
				})
				.state('songs', {

					url:'/songs',
					templateUrl:'app/components/songs/songsView.html',
					controller: 'songsCtrl'
				})
				.state('videos', {

					url:'/videos',
					templateUrl:'app/components/videos/videoView.html',
					controller: 'videoCtrl'
				})
	}]);


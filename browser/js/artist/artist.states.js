juke.config(function($stateProvider){
	$stateProvider.state('allArtists',{
		url:'/artists',
		templateUrl:'/js/artist/artists.view.html',
		controller: 'ArtistsCtrl'
	});
});

juke.config(function($stateProvider){
	// $urlRouterProvider.when('/artist/:artistid', '/artist/:artistid/albums');
	$stateProvider.state('oneArtist',{
		url:'/artist/:artistid',
		abstract:true,
		templateUrl:'/js/artist/artist.view.html',
		controller: 'ArtistCtrl'
	});
});

juke.config(function($stateProvider){
	$stateProvider.state('oneArtist.Albums',{
		url:'/artist/:artistid/albums',
		templateUrl:'/js/album/albums.view.html',
	});
});

juke.config(function($stateProvider){
	$stateProvider.state('oneArtist.Songs',{
		url:'/artist/:artistid/songs',
		templateUrl:'/js/artist/songs.view.html',
	});
});

juke.config(function($stateProvider){
	$stateProvider.state('allArtists',{
		url:'/artists',
		templateUrl:'/js/artist/artists.view.html',
		controller: 'ArtistsCtrl'
	});
});

juke.config(function($stateProvider){
	$stateProvider.state('oneArtist',{
		url:'/artist/:artistid',
		templateUrl:'/js/artist/artist.view.html',
		controller: 'ArtistCtrl'
	});
});

juke.config(function($stateProvider){
	$stateProvider.state('oneArtist.Albums',{
		url:'/artist/:artistid/albums',
		templateUrl:'/js/artist/albums.view.html',
	});
});


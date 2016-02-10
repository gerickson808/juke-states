juke.config(function($stateProvider){
	$stateProvider.state('allAlbums',{
		url:'/albums',
		templateUrl:'/js/album/albums.view.html',
		controller: 'AlbumsCtrl'
	});
});

juke.config(function($stateProvider){
	$stateProvider.state('oneAlbum',{
		url:'/albums/:albumid',
		templateUrl:'/js/album/album.view.html',
		controller: 'AlbumCtrl'
	});
});
juke.config(function($stateProvider){
	$stateProvider.state('allAlbums',{
		url:'/albums',
		templateUrl:'/js/album/albums.view.html',
		controller: 'AlbumsCtrl'
	});
});
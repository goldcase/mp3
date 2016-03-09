var app = angular.module('mp3',['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "partials/list.html",
			controller: "ListController"
		})
		.when("/details/:movie_rank", {
			templateUrl: "partials/details.html",
			controller: "DetailController"
		})
		.when("/gallery", {
			templateUrl: "partials/gallery.html",
			controller: "GalleryController"
		})
		.otherwise({
			redirectTo: "/"
		});

	$locationProvider.html5Mode(true);
});

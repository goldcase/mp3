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
		.when("/shit", {
			templateUrl: "paritals/details.html",
			controller: "ListController"
		})
		.otherwise({
			redirectTo: "/"
		});
	$locationProvider.html5Mode(true);
});

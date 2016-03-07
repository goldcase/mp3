/* Sample Controller */
app.controller("DataController", ["$scope", "$http", function($scope, $http) {
	$http({
		method: "GET",
		url: "../data/imdb250.json"
	}).success(function(data, status, headers, config) {
		$scope.movies = data;
	}).error(function(data, status, headers, config) {
	});
}]);

app.controller("ListController", ["$scope", function($scope) {
	$scope.greeting = "Hi";
}]);

app.controller("DetailController", ["$scope", "$routeParams", function($scope, $routeParams) {
	$scope.movie_id = $routeParams.movie_rank - 1;
	$scope.movie = $scope.movies[$scope.movie_id];
}]);
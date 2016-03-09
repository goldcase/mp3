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
	$scope.predicate = set_order("rank");
	$scope.reverse = true;

	function set_order(order_str) {
		var ret = order_str;//"movie." + order_str;
		console.log(ret);
		return ret;
	}

	$scope.order = function(order_str) {
		$scope.predicate = set_order(order_str);
	};

	$scope.is_ascending = function(num) {
		$scope.reverse = 0 === num;
		console.log($scope.reverse);
	};
}]);

app.controller("DetailController", ["$scope", "$routeParams", function($scope, $routeParams) {
	$scope.movie_id = $routeParams.movie_rank - 1;
	$scope.movie = $scope.movies[$scope.movie_id];
}]);

app.controller("GalleryController", ["$scope", function(){
	
	
}]);
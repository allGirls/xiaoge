app.controller("tuijianCtrl", ["$scope", "$http", "$state", function ($scope, $http, $state) {
	$http.get("data/sort1.json").success(function (data) {
		$scope.data = data;
	});
	
	$scope.change = function(){
		$state.go("changeStore", { id: JSON.stringify(this.item) });
	};
	
}]);



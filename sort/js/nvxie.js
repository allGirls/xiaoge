app.controller("nvxieCtrl", ["$scope", "$http", function ($scope, $http) {
	$http.get("data/sort5.json").success(function (data) {
		$scope.data = data;
	})	
}]);


//app.service("sortSer", function () {
////	console.log(this);
//	this.import = function () {
//		console.log(this);
//	}
//})
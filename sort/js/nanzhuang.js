app.controller("nanzhuangCtrl", ["$scope", "$http", function ($scope, $http) {
	$http.get("data/sort2.json").success(function (data) {
		$scope.data = data;
	})	
}]);


//app.service("sortSer", function () {
////	console.log(this);
//	this.import = function () {
//		console.log(this);
//	}
//})
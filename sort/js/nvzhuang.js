app.controller("nvzhuangCtrl", ["$scope", "$http", function ($scope, $http) {
	$http.get("data/sort3.json").success(function (data) {
		$scope.data = data;
	})	
}]);


//app.service("sortSer", function () {
////	console.log(this);
//	this.import = function () {
//		console.log(this);
//	}
//})
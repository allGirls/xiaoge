app.controller("pinDaoCtrl", ["$scope", "$http", "pinDaoStroe", "$state", function($scope, $http, pinDaoStroe, $state){
	$http.get("./data/pinDao.json").success(function(data){
		$scope.arr = data;
	});
	 
	$scope.change = function(index){
		pinDaoStroe.saveData(index + 1);
	};
	
	$scope.back = function(){
		$state.go("home");
	};
}]);
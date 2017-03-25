app.controller("VTpinDaoCtrl", ["$scope", "$http", "pinDaoStroe", '$state', function($scope, $http, pinDaoStroe, $state){
	$scope.storeData = pinDaoStroe.getData();
//	console.log($scope.storeData);
	$http.get("./data/" + $scope.storeData + ".json").success(function(data){
		$scope.storeList = data;
	});
	
	$scope.showDetail = function(){
		$state.go("storeDetali", { id: JSON.stringify(this.item) });
	};
	
}]);
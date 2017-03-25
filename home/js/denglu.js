app.controller("loginCtrl", ["$scope", "$state", function($scope, $state){
	$scope.flag = true;
	$scope.add = function(){
		$scope.flag = !$scope.flag;
	};
	//点击回退按钮到首页
	$scope.back = function(){
		$state.go("home");
	};
	
}]);
app.controller("myCtrl", ["$scope", "$http", "$stateParams", "$state", function($scope, $http, $stateParams, $state){
	$scope.id = JSON.parse($stateParams.id);
	
	//存放页数数据
	$scope.brr = [1, 2, 3, 4, 5, 6];
	//默认显示上一页和下一页
	$scope.pageShow = true;
	//根据所点服装类别显示对应商品
	$http.get("./data/" + $scope.id.Id + ".json").success(function(data){
			//默认第一页显示新品里的前六件商品
			$scope.arr = data.slice(0, 6);
			$scope.crr = [true];
			$scope.changePage = function(index){
				$scope.arr = data.slice(index * 6, index * 6 + 6);
				//改变分页下标的颜色
				$scope.crr = [false, false, false];
				$scope.crr[index] = true;
			};
	});
	
	//顶部菜单栏点击事件
	$scope.showstroeList = function(num, event){
		var event = event || window.event;
		var lis = event.target.parentNode.childNodes;
		for(var value of lis){
			value.className = "";
		}
		event.target.className = "myColor";
		$http.get("./data/" + num + ".json").success(function(data){
			$scope.arr = data.slice(0, 6);
			$scope.crr = [true];
			$scope.changePage = function(index){
				$scope.arr = data.slice(index * 6, index * 6 + 6);
				//改变分页下标的颜色
				$scope.crr = [false, false, false];
				$scope.crr[index] = true;
			};
		});
	};

	//点击实现跳转
	$scope.come = function(){
		$state.go("storeDetali", { id: JSON.stringify(this.item) });
	};
	
}]);
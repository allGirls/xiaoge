app.controller("storeDetaliCtrl", ["$scope", "$stateParams",function ($scope, $stateParams) {

    $scope.id = JSON.parse($stateParams.id);
//	console.log($scope.id);
    // $http.get('')
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        //pagination : '#swiper-pagination1',
        autoplay: 2000,
        loop: true
    })

    // 商品详情,先将参数放到一个对象里面，切记页面音容
    $scope.spxqObj = {
    	'spxq': true,
    	'pl': false,
    	'zx': false
    }
    $scope.spxqFn = function (whichPage) {
    	for(var i in $scope.spxqObj){
    		// 先将所有的都隐藏
    		$scope.spxqObj[i] = false;
    	}
    	//点击哪个让哪个显示
    	// console.log(whichPage);
    	// console.log($scope.spxqObj[whichPage]) 返回的 是布尔值
    	$scope.spxqObj[whichPage] = true;
    	
    }

}]);
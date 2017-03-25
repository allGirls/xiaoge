app.controller("homeCtrl", ["$scope", "$http", function($scope, $http) {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: false,
        autoplay: 1000,
        loop: true
    })
	
	$http.get("./data/chunjixp.json").success(function (data) {
		$scope.chunjiData = data;
	})
	
	$http.get("./data/gengduojp.json").success(function (data) {
		$scope.gnegduoData = data;
	})
	
	$http.get("./data/hanguog.json").success(function (data) {
		$scope.hanguoData = data;
	})
	
//	$scope.hidden = function(){
//		$(".menu").css({"display" : "none"});
//	};
}])

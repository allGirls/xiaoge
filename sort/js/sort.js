app.controller("sortCtrl", ["$scope", "$state", function ($scope, $state) {
	$(".main_menu ul li").on("click", function () {
		$(this).addClass("click_li").siblings().removeClass("click_li");
		$(this).find("a").addClass("click_a");
		$(this).siblings().find("a").removeClass("click_a");
	});
	
	$scope.back = function(){
		$state.go("home");
	};
}])
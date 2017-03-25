var app = angular.module("myApp", ["ui.router"]);

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    //配置默认锚点
    $urlRouterProvider.when('', 'home');
    $urlRouterProvider.when("/sort", "/sort/tuijian");
    $urlRouterProvider.when("/login", "/login/putong");
    //配置路由
    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "./home/home.html",
            controller: "homeCtrl"
        })
        //登录注册页
        .state("login", {
            url: "/login",
            templateUrl: "./home/login.html",
            controller: "loginCtrl"
        })
        .state("register", {
            url: "/register",
            templateUrl: "./home/register.html",
//          controller: "registerCtrl"
        })
        //登录下面的二级路由
        .state("login.putong", {
            url: "/putong",
            templateUrl: "./home/putong.html",
//          controller: "putongCtrl"
        })
        .state("login.kuaideng", {
            url: "/kuaideng",
            templateUrl: "./home/kuaideng.html",
//          controller: "kuaidengCtrl"
        })
       
        .state("sort", {
            url: "/sort",
            templateUrl: "./sort/sort.html",
            controller : "sortCtrl"
        })
        
        //分类的二级路由
        .state("sort.tuijian", {
        	url : "/tuijian",
        	templateUrl : "./sort/tuijian.html",
        	controller : "tuijianCtrl"
        })
        .state("sort.nanzhuang", {
        	url : "/nanzhuang",
        	templateUrl : "./sort/nanzhuang.html",
        	controller : "nanzhuangCtrl"
        })
        .state("sort.nvzhuang", {
        	url : "/nvzhuang",
        	templateUrl : "./sort/nvzhuang.html",
        	controller : "nvzhuangCtrl"
        })
        .state("sort.nanxie", {
        	url : "/nanxie",
        	templateUrl : "./sort/nanxie.html",
        	controller : "nanxieCtrl"
        })
        .state("sort.nvxie", {
        	url : "/nvxie",
        	templateUrl : "./sort/nvxie.html",
        	controller : "nvxieCtrl"
        })
        //分类里面商品到的一级路由
        .state("changeStore", {
        	url : "/changeStore/:id",
        	templateUrl : "./changeStore/changeStore.html",
        	controller : "myCtrl"
        })
        .state("pinDao", {
            url: "/pinDao",
            templateUrl: "./pinDao/pinDao.html",
            controller: "pinDaoCtrl"
        })
        //具体频道页面
        .state("VTpinDao", {
            url: "/VTpinDao",
            templateUrl: "./pinDao/VTpinDao.html",
            controller: "VTpinDaoCtrl"
        })
        .state("cart", {
            url: "/cart",
            templateUrl: "./cart/cart.html"
        })
        .state("mine", {
            url: "/mine",
            templateUrl: "./mine/mine.html"
        })
        //商品详情页面
        .state("storeDetali", {
            url: "/storeDetali/:id",
            templateUrl: "./storeDetali/storeDetali.html",
            controller: "storeDetaliCtrl"
        })
}]);


$(".menu").css({"display" : "block"});
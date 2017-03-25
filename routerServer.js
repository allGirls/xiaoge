// 服务
app.service('pinDaoStroe', function () {
	var myData = null;
	//保存所点击li返回的页面数据
    this.saveData = function (data) {
    	myData = data;  
    	return myData;
    };
    //取得数据
    this.getData = function(){
    	return myData;
    }
});

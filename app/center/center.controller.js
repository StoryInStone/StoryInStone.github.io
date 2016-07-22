(function() {
	'use strict';

	var app = angular
		.module('MobileAngularUiVC')
		.controller('CenterController', CenterController);

	CenterController.$inject = ['$rootScope', '$scope', '$location', '$http'];

	function CenterController($rootScope, $scope, $location, $http) {

		var user = $http.get('//139.129.22.161:8080/web/user');
		user.success(function(data, status, headers, config) {
			if (status == 200) {
				$rootScope.username = data.username;
				$scope.followingNum = data.followingNum;
				$scope.followerNum = data.followerNum;
			} else if (status == 203) {
				alert(data);
				$location.path("/login");
			} else {
				alert("查询失败!");
			}
		});


		var res = $http.get('//139.129.22.161:8080/web/mine/posts');
		res.success(function(data, status, headers, config) {
			if (status == 200) {
				$scope.records = data;
				$scope.recordsNum = data.length;
			} else if (status == 203) {
				alert(data);
				$location.path("/login");
			} else {
				alert("查询失败!");
			}
		});

	}

})();
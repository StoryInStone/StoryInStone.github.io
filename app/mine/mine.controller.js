(function() {
	'use strict';

	var app = angular
		.module('MobileAngularUiVC')
		.controller('MineController', MineController);

	MineController.$inject = ['$rootScope', '$scope', '$location', '$http'];

	function MineController($rootScope, $scope, $location, $http) {

		var res = $http.get('//139.129.22.161:8080/web/mine/posts');
		res.success(function(data, status, headers, config) {
			if (status == 200) {
				$scope.records = data;
			} else if (status == 203) {
				alert(data);
				$location.path("/login");
			} else {
				alert("查询失败!");
			}
		});

	}

})();
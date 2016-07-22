(function() {
	'use strict';

	var app = angular
		.module('MobileAngularUiVC')
		.controller('LoginController', LoginController);

	LoginController.$inject = ['$rootScope', '$scope', '$location', 'LoginService'];

	function LoginController($rootScope, $scope, $location, LoginService) {

		$scope.rememberMe = true;
		$scope.username = null;
		$scope.password = null;

		$scope.login = function() {

			var dataObj = {
				rememberMe: $scope.rememberMe,
				username: $scope.username,
				password: $scope.password
			};

			LoginService.login(dataObj)
				.success(function(data, status, headers, config) {
					if (status === 200) {
						$rootScope.access_token = data;
						$rootScope.$broadcast('authorized');
					}
					if (status === 400) {
						alert("登陆失败,用户名与密码不匹配!");
					}
				})
				.error(function(data, status, headers, config) {
					alert("请求失败,请重新登陆!");
				});

		}

	}

})();
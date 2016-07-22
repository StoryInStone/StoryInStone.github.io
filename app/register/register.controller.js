(function() {
	'use strict';

	var app = angular
		.module('MobileAngularUiVC')
		.controller('RegisterController', RegisterController);

	RegisterController.$inject = ['$rootScope', '$scope', 'RegisterService'];

	function RegisterController($rootScope, $scope, RegisterService) {

		$scope.username = null;
		$scope.password = null;

		$scope.register = function() {
			var dataObj = {
				username: $scope.username,
				password: $scope.password
			};
			RegisterService.register(dataObj);
		}

	}

})();
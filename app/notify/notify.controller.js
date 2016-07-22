(function() {
	'use strict';

	var app = angular
		.module('MobileAngularUiVC')
		.controller('NotifyController', NotifyController);

	NotifyController.$inject = ['$rootScope', '$scope', 'RegisterService'];

	function NotifyController($rootScope, $scope, RegisterService) {

		$scope.notices = [];

		for (var j = 0; j < 10; j++) {
			$scope.notices.push({
				icon: 'envelope',
				message: 'Notice ' + (j + 1)
			});
		}

		$scope.deleteNotice = function(notice) {
			var index = $scope.notices.indexOf(notice);
			if (index > -1) {
				$scope.notices.splice(index, 1);
			}
		};

	}

})();
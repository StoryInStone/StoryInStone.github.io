(function() {
    'use strict';

    var app = angular
        .module('MobileAngularUiVC');

    app.controller('TimelineController', function($rootScope, $scope, $http) {

        var scrollItems = [];

        for (var i = 1; i <= 100; i++) {
            scrollItems.push('Item ' + i);
        }

        $scope.scrollItems = scrollItems;

        $scope.openComment = function(commentPid) {
            $rootScope.commentPid = commentPid;
        }


    });
})();
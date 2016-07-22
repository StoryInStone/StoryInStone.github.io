(function() {
    'use strict';

    var app = angular
        .module('MobileAngularUiVC');

    app.controller('CommentController', function($rootScope, $scope, $http) {

        $scope.comment = function() {
            var commentContent = $scope.commentContent;
            var commentPid = $rootScope.commentPid;
        }

    });
})();
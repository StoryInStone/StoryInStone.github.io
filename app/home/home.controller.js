(function() {
    'use strict';

    var app = angular
        .module('MobileAngularUiVC');

    app.controller('HomeController', function($rootScope, $scope, $http) {

        $scope.post = function() {
            var dataObj = {
                postContent: $scope.postContent,
                password: $scope.password
            };
            // var res = $http.post('//localhost:8080/web/register', dataObj);
            // res.success(function(data, status, headers, config) {});
            // res.error(function(data, status, headers, config) {});
        }

    });
})();
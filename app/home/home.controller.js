(function() {
    'use strict';

    var app = angular
        .module('MobileAngularUiVC');

    app.controller('HomeController', function($rootScope, $scope, $location, $http, $route) {
        $scope.postContent = null;
        var res = $http.get('//139.129.22.161:8080/web/timeline');
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

        $scope.post = function() {
            var dataObj = {
                postContent: $scope.postContent
            };
            var res = $http.post('//139.129.22.161:8080/web/post', dataObj);
            res.success(function(data, status, headers, config) {
                if (status == 201) {
                    $route.reload();
                } else if (status == 203) {
                    alert(data);
                    $location.path("/login");
                } else {
                    alert("帖子内容非法!");
                }
            });
            res.error(function(data, status, headers, config) {});
        }

    });
})();
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

        $scope.openComment = function(commentPid) {
            $rootScope.commentPid = commentPid;
        }


    });
})();
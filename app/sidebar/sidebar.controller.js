(function() {
    'use strict';

    var app = angular
        .module('MobileAngularUiVC');

    app.controller('SidebarController', function($rootScope, $scope, $http) {

        // 
        // Right Sidebar
        // 
        $scope.chatUsers = [{
            name: '成龙',
            online: true
        }, {
            name: '吴彦祖',
            online: true
        }, {
            name: '李连杰',
            online: false
        }, {
            name: '宋慧乔',
            online: false
        }, {
            name: '刘涛',
            online: false
        }];


        $scope.post = function() {
            var dataObj = {
                postContent: $scope.postContent,
                password: $scope.password
            };
            // var res = $http.post('//139.129.22.161:8080/web/register', dataObj);
            // res.success(function(data, status, headers, config) {});
            // res.error(function(data, status, headers, config) {});
        }

    });
})();
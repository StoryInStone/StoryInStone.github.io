(function() {
    'use strict';

    var app = angular
        .module('MobileAngularUiVC');

    app.service('RegisterService', function($http, $location, ENDPOINT_URI) {
        var service = this;

        function getRegisterUrl() {
            return ENDPOINT_URI + 'register';
        }

        service.register = function(dataObj) {
            var res = $http.post(getRegisterUrl(), dataObj);
            res.success(function(data, status, headers, config) {
                if (status === 201) {
                    alert("注册成功,请登录!");
                    $location.path("/login");
                }
            });
            res.error(function(data, status, headers, config) {
                if (status === 400) {
                    alert("用户名已存在,注册失败!");
                } else {
                    alert("请求失败,请重新注册!");
                }
            });
        };

    });

})();
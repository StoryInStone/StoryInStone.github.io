(function() {
    'use strict';

    var app = angular
        .module('MobileAngularUiVC');

    app.service('LoginService', function($http, ENDPOINT_URI) {
        var service = this;

        function getLoginUrl() {
            return ENDPOINT_URI + 'login';
        }

        service.login = function(dataObj) {
            return $http.post(getLoginUrl(), dataObj);
        };

    });

})();
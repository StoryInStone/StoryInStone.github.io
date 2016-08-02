(function() {
    'use strict';

    angular
        .module('vcApp')
        .factory('AuthServerProvider', AuthServerProvider);

    AuthServerProvider.$inject = ['$http', '$localStorage', '$sessionStorage', '$q'];

    function AuthServerProvider($http, $localStorage, $sessionStorage, $q) {
        var service = {
            getToken: getToken,
            login: login,
            loginWithToken: loginWithToken,
            storeAuthenticationToken: storeAuthenticationToken,
            logout: logout
        };

        return service;

        function getToken() {
            return $localStorage.authenticationToken || $sessionStorage.authenticationToken;
        }

        function login(credentials) {

            var data = {
                username: credentials.username,
                password: credentials.password,
                rememberMe: credentials.rememberMe
            };
            console.log(data);
            return $http.post('//localhost:8080/api/authenticate', data).then(authenticateSuccess, authenticateFail);

            function authenticateSuccess(response) {
                console.log(response.data.id_token);
                // console.log(headers('Authorization'));
                // console.log(data);
                // var bearerToken = headers('Authorization');
                // if (angular.isDefined(bearerToken) && bearerToken.slice(0, 7) === 'Bearer ') {
                //     var jwt = bearerToken.slice(7, bearerToken.length);
                //     service.storeAuthenticationToken(jwt, credentials.rememberMe);
                //     return jwt;
                // }
                var jwt = response.data.id_token;
                service.storeAuthenticationToken(jwt, credentials.rememberMe);
                return jwt;
            }

            function authenticateFail(data, headers, status) {
                
            }
        }

        function loginWithToken(jwt, rememberMe) {
            var deferred = $q.defer();

            if (angular.isDefined(jwt)) {
                this.storeAuthenticationToken(jwt, rememberMe);
                deferred.resolve(jwt);
            } else {
                deferred.reject();
            }

            return deferred.promise;
        }

        function storeAuthenticationToken(jwt, rememberMe) {
            console.log("auth-jwt:", jwt);
            if (rememberMe) {
                $localStorage.authenticationToken = jwt;
            } else {
                $sessionStorage.authenticationToken = jwt;
            }
        }

        function logout() {
            delete $localStorage.authenticationToken;
            delete $sessionStorage.authenticationToken;
        }
    }
})();
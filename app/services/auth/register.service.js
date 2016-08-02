(function () {
    'use strict';

    angular
        .module('vcApp')
        .factory('Register', Register);

    Register.$inject = ['$resource', 'END_POINT'];

    function Register ($resource, END_POINT) {
        return $resource(END_POINT + 'api/register', {}, {});
    }
})();

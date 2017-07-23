(function () {
    'use strict';

    angular
        .module('youtubeportal')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http){

    }
})();

angular.module('youtubeportal').factory('LocalStorageService', LocalStorageService);

LocalStorageService.$inject = ['$localStorage'];

function LocalStorageService($localStorage) {

    return {
        setData:setData,
        getData: getData
    };

    /**
     * @name setData
     * @desc Saving 'true' - representing that data it's in localStorage
     * @param {string} value - true
     */
    function setData(value){
        $localStorage.data=value;
    }

    /**
     * @name getData
     * @desc Looking if data is in localStorage
     * @returns {string} true/false
     */
    function getData(){
        return $localStorage.data;
    }
}

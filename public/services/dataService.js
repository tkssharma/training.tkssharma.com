angular
    .module('youtubeportal')
    .factory('FirebaseService', FirebaseService);

FirebaseService.$inject = [
    '$q',
    '$firebaseAuth',
    '$firebaseObject',
    '$state',
    'LocalStorageService',
    '$timeout'
];
/**
     * @name FirebaseService
     * @desc Service for communication with webservice
     */
function FirebaseService($q, $firebaseAuth, $firebaseObject, $state, LocalStorageService, $timeout) {

    return {
        /**
             * @name getData
             * @desc Fetch and synchronize data from web service
             * @param {string} lang- language (hr,en..)
             * @returns {Object[]|json}
             */
        getServiceRef: function () {
            return $firebaseAuth();
        },
        getApplicationData: function () {
            var defer = $q.defer();

            if ($firebaseAuth().$getAuth()) {
                var ref = firebase
                    .database()
                    .ref();
                var obj = $firebaseObject(ref);
                // to take an action after the data loads, use the $loaded() promise
                obj
                    .$loaded()
                    .then(function () {
                        defer.resolve();
                        console.log("loaded record:", obj.$id, obj.someOtherKeyInData);

                        LocalStorageService.setData('true');
                    }, function () {
                        defer.reject();
                    });
            } else {
                $timeout(function () {
                    $state.go('app.login');/* (4) */
                });
                defer.reject();
            }
            return defer.promise;
        },
        getAuth: function () {
            var firebaseUser = $firebaseAuth().$getAuth();
            if (firebaseUser) {
                $timeout(function () {
                    // if user is loggedin
                    $state.go('home');/* (4) */
                });
            } else {
                return false;
            }
        },
        signout: function () {
            firebase
                .auth()
                .signOut()
                .then(function () {
                    // Sign-out successful.
                    $timeout(function () {
                        // if user is loggedin
                        $state.go('login');
                    });
                }, function (error) {
                    // An error happened.
                });

        },
        getCurrentUser: function () {
            var defer = $q.defer();
            var _user = firebase
                .auth()
                .currentUser;
            if (_user) {
                defer.resolve(_user);/* (1) */
            } else {
                defer.reject(null);/* (2) */
            }
            return defer.promise;

        },
        _skipIfAuthenticated: function () {
            var defer = $q.defer();
            if ($firebaseAuth().$getAuth()) {
                defer.reject();/* (1) */
            } else {
                defer.resolve();/* (2) */
            }
            return defer.promise;
        },
        _redirectIfNotAuthenticated: function () {
            var defer = $q.defer();
            if ($firebaseAuth().$getAuth()) {
                defer.resolve();/* (3) */
            } else {
                $timeout(function () {
                    $state.go('app.login');/* (4) */
                });
                defer.reject();
            }
            return defer.promise;
        }
    };
}
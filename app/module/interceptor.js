/**
 * global declaration of all angular modules Modules related to resource design
 * can be added to this root module & should be added in every file
 */
(function () {
	angular
		.module('youtubeportal')
		.config(function ($httpProvider, $provide) {
			$provide
				.factory('httpInterceptor', function ($q, $rootScope) {
					return {
						'request': function (config) {
							// intercept and change config: e.g. change the URL

							return config || $q.when(config);
						},
						'response': function (response) {
							// we can intercept and change response here... broadcasting 'httpResponse'
							// event $rootScope.$broadcast('httpResponse', response);
							return response || $q.when(response);
						},
						'requestError': function (rejection) {
							// broadcasting 'httpRequestError' event
							// $rootScope.$broadcast('httpRequestError', rejection);
							return $q.reject(rejection);
						},
						'responseError': function (rejection) {
							$rootScope.$broadcast(
							{}[rejection.status], rejection);
							return $q.reject(rejection);
						}
					};
				});

		});

})();

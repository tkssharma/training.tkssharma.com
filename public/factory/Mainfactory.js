		(function () {
			'use strict';

			angular
				.module('youtubeportal')
				.factory('Mainfactory', Mainfactory);

			Mainfactory.$inject = ['$rootScope', '$q', '$http', '$stateParams','$timeout'];
			function Mainfactory($rootScope, $q, $http, $stateParams,$location,$timeout) {
				var Mainfactory = {};

				Mainfactory.LoadapplicationData = LoadapplicationData;
				Mainfactory.getTrainingByTrainingID = getTrainingByTrainingID;
				Mainfactory.getYouTubeVideosByID = getYouTubeVideosByID;
				Mainfactory.LoadAllDiscussions = LoadAllDiscussions;
				Mainfactory.LoadDiscussionVideo = LoadDiscussionVideo;
				Mainfactory.LoadYouTubeapplicationData = LoadYouTubeapplicationData;
				Mainfactory.LoadScreenCastData = LoadScreenCastData;

				return Mainfactory;

				function LoadapplicationData() {
					var deferred = $q.defer();

					if ($rootScope.applicationData) {
						return true;
					} else {
						$http
							.get('../assets/json/train.json')
							.success(function (response) {
								deferred.resolve(response);
								$rootScope.applicationData = response;

							})
							.error(function (error) {
								// Handle error case
								deferred.reject(error);
							});
						return deferred.promise;
					}
				}

				function LoadScreenCastData() {
					var deferred = $q.defer();
					if ($rootScope.applicationScreenCastData) {
						return true;
					} else {
						$http
							.get('../assets/json/webcast.json')
							.success(function (response) {
								deferred.resolve(response);
								$rootScope.applicationScreenCastData = response;

							})
							.error(function (error) {
								// Handle error case
								deferred.reject(error);
							});
						return deferred.promise;
					}
				}
				function LoadYouTubeapplicationData() {
					var deferred = $q.defer();
					if ($rootScope.applicationYouTubeData) {
						return true;
					} else {
						$http
							.get('../assets/json/data.json')
							.success(function (response) {
								deferred.resolve(response);
								$rootScope.applicationYouTubeData = response;

							})
							.error(function (error) {
								// Handle error case
								deferred.reject(error);
							});
						return deferred.promise;
					}
				}
				function getTrainingByTrainingID(trainingid) {
					if(! $rootScope.applicationData){
										$location.go('login');
										return;
				}
					var deferred = $q.defer();

					$rootScope
						.applicationData
						.filter(function (_item) {
							if (_item._id === trainingid) {
								$rootScope.TrainingData = _item;
								deferred.resolve(_item);
							}
						});
					if ($rootScope.TrainingData === null) {
						deferred.reject();
					}
					return deferred.promise;

				}

				function getYouTubeVideosByID(youtube_id) {
					var deferred = $q.defer();

					$http
						.get('/api/getYouTubeVideosByID/' + youtube_id)
						.success(function (response) {
							deferred.resolve(response);
							$rootScope.YouTubeData = response;

						})
						.error(function (error) {
							// Handle error case
							deferred.reject(error);
						});
					return deferred.promise;
				}
				function LoadAllDiscussions() {
					var deferred = $q.defer();

					$http
						.get('/api/getAllDiscussions')
						.success(function (response) {
							deferred.resolve(response);
							$rootScope.Alldiscussions = response;

						})
						.error(function (error) {
							// Handle error case
							deferred.reject(error);
						});
					return deferred.promise;
				}
				function LoadDiscussionVideo(id) {
					var deferred = $q.defer();

					$http
						.get('/api/getDiscussion/' + id)
						.success(function (response) {
							deferred.resolve(response);
							$rootScope.discussionwithVideos = response;

						})
						.error(function (error) {
							// Handle error case
							deferred.reject(error);
						});
					return deferred.promise;
				}

			}
		})();

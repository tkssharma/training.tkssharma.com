/* bootstrap  Angular app for fetching common resources
 * removed ng-app from index page to use manual bootstrap
 * @ bootstrap module added
 */
(function () {
	'use strict';
	angular.module('youtubeportal')
	.controller(
			"PlayListController",
			[
			 "$scope",
			 "$rootScope",
			 'resourceData',
			 '$http',
			 '$stateParams',
			 function PlayListController($scope, $rootScope,resourceData,$http,$stateParams) {
				 this.filteredData = null;
				 this.filterYouTubeData = function(){
					 this.filteredData  = $rootScope.applicationScreenCastData.filter(function(item){
						  if(item.ID === $stateParams.ID){
									 item.url = "https://www.youtube.com/embed/"+item.ID+"?list="+item.WelcomeVideoId;
          return true;
								}

					 });
					 /*if(this.filteredData != null){
						 this.tubeurl ="https://www.youtube.com/embed/"+ this.filteredData[0].ID+ "?list="+this.filteredData[0].WelcomeVideoId;
					 }*/
					 console.log(this.filteredData );

				 }

			 }]);

}) ();

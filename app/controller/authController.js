 (function () {

  angular
   .module('youtubeportal')
   .controller('authController', function ($scope, $state, FirebaseService, $rootScope) {
    $scope.user = {};
    $scope.SignUp = function (form) {
     if (!form.$valid) {
      $scope.registersubmitted = true;
      return;
     }
     console.log("Create User Function called");
       $(".page-loading").removeClass("hidden");
     FirebaseService
      .getServiceRef()
      .$createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
      .then(function (firebaseUser) {
          $(".page-loading").addClass("hidden");

       $scope.message = "User created with uid: " + firebaseUser.uid;

       $state.go('login');
      })
      .catch(function (error) {
       $scope.error = error;
          $(".page-loading").addClass("hidden");

       $scope.message = error;
      });

    };

    $scope.SignIn = function (form) {
     if (!form.$valid) {
      $scope.loginsubmitted = true;
      return;
     }
    $(".page-loading").removeClass("hidden");
     FirebaseService
      .getServiceRef()
      .$signInWithEmailAndPassword($scope.user.email, $scope.user.password)
      .then(function (firebaseUser) {
       $rootScope.firebaseUser = firebaseUser;
       $(".page-loading").addClass("hidden");
       $state.go('home');
      }, function (error) {})
      .catch(function (error) {
       $scope.error = error;
       $(".page-loading").addClass("hidden");
      });
    };

    $scope.reset = function (form) {
     if(! form.$valid){
      $scope.resetsubmitted = true;
      return;
     }
      FirebaseService
       .getServiceRef()
       .$sendPasswordResetEmail($scope.user.email)
       .then(function () {
        $scope.resetMessage = 'reset email sent';
        alert('reset email has been sent to '+$scope.user.email);
       })
       .catch(function (error) {
        $scope.resetMessage = error;
       });
     }

   });
 })();

angular.module('noteeApp')
  .controller('LoginCtrl', function ($scope, $window, $rootScope, Button, gapi) {
    $scope.button = new Button();
    $scope.redirectHome = function(googleUser) {    
      $rootScope.homeVisible =true;
      $window.location.href = '#/home';
    };
    
    $scope.signOut = function() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
        $rootScope.homeVisible =false;
	$scope.button.active();
      });
    }
  });

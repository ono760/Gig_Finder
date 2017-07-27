app.controller("SignUpControl", ['$scope', '$http', '$location', '$state', function($scope, $http, $location, $state) {
  $scope.signup = {};
  $scope.signup.signUpMessage = "Signup for a free account";
  $scope.master = {};
  $scope.signup.errorMessage = false;
  $scope.signup.successMessage = false;
  $scope.signUp = function(post) {
    $http.post('/signup/post', post).then(function success(res) {
      $scope.signup.signUpResults = res.data;
      $scope.signup.successMessage = true;
      alert ("Thank You for Signing Up");
      $location.url('signin');
    }).catch(function error(res) {
      $scope.signup.errorMessage = true;
      $scope.newUser = angular.copy($scope.master);
      $scope.signUpForm.$setPristine();
      $scope.signUpForm.$setUntouched();
    });
  };
}]);
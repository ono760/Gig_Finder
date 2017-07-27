app.controller("UserControl", ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.user = {};
  $scope.user.userMessage = "Welcome to your page!";
}]);
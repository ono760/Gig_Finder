app.controller("SignInControl", function($scope, $http, $location) {
    $scope.signin = {};
    $scope.master = {};
    $scope.signin.signInMessage = "Login with your account";
    $scope.signin.errorMessage = false;
    $scope.signIn = function(post) {
        $http.post('/signin/post', post).then(function success(res) {
            $scope.signin.signInResults = res.data;
            $location.url('/user');
        }).catch(function error(res) {
            $scope.signin.errorMessage = true;
            $scope.user = angular.copy($scope.master);
            $scope.signUpForm.$setPristine();
            $scope.signUpForm.$setUntouched();
        })

    };
});

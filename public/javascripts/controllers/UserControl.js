app.controller("UserControl", function($scope, $http, $location) {
    $scope.user = {};
    $scope.user.userMessage = "Welcome to your page!";
    // $scope.signIn = function(post) {
    //     $http.post('/signin/post', post).then(function success(res) {
    //         $scope.signin.signInResults = res.data;
    //         $location.url('/user') //change this route to user's own page once account is created.
    //     }).then(function error(res) {
    //         $location.url('/signup')
    //     })


    // };
});

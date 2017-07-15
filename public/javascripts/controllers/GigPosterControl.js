app.controller("PosterControl", ['$scope', '$timeout', '$mdSidenav', '$http', function($scope, $timeout, $mdSidenav, $http) {
    $scope.poster = {};
    $scope.poster.greeting = "Welcome, Gig Poster!";
    $scope.poster.showForm = false;
    $scope.poster.showList = false;
    $scope.poster.showChat = false;
    $scope.poster.newPostVisible = false;
    $scope.show = function(string) {
        if (string === 'gig') {
            $scope.poster.showForm = !$scope.poster.showForm;
        } else if (string === 'list') {
            $scope.poster.showList = !$scope.poster.showList;
        } else {
            $scope.poster.showChat = !$scope.poster.showChat;
        }
    };

    $http({
            method: 'GET',
            url: '/gig_seekers',

        }).then(function success(res) {
            $scope.poster.results = res.data;

        }),
        function error(res) {
            console.log("error");
        };

    $scope.postGig = function(post) {
        $http.post('/gig_posters/post', post).then(function success(res) {
            $scope.poster.postResults = res.data;
        })
        $scope.poster.newPostVisible = false;
        $scope.newPost = {};
        $scope.poster.showForm = !$scope.poster.showForm;
        $scope.postForm.$setPristine();
        $scope.postForm.$setUntouched();
    };

    $scope.checkForError = function(option) {
        return option.$invalid && option.$touched;
    };


}]);

app.controller("GigSeekerControl", ['$scope', '$http', function($scope, $http) {
    $scope.seeker = {};
    $scope.seeker.greeting = "Hey there, gig seeker!";
    $scope.seeker.message = "Good luck finding a gig!";
    $scope.poster = {};
    $scope.poster.showEdit = false;
    $scope.poster.newPostVisible = false;

    $scope.show = function(string) {
        if (string === 'gigs') {
            $scope.poster.showGigs = !$scope.poster.showGigs;
        } else if (string === 'chat') {
            $scope.poster.showChat = !$scope.poster.showChat;
        } else {
            $scope.poster.showEdit = !$scope.poster.showEdit;
        }
    };

    $http({
            method: 'GET',
            url: '/gigs',

        }).then(function successCallback(res) {
            $scope.poster.gigs = res.data;

        }),
        function errorCallback(res) {
            console.log("error");
        }

    $scope.postProfile = function(post) {
        $http.post('/gig_seekers/post', post).then(function success(res) {
            $scope.poster.postResults = res.data;

        })
        $scope.poster.newPostVisible = false;
        $scope.newPost = {};
        $scope.poster.showEdit = !$scope.poster.showEdit;
        $scope.postProfForm.$setPristine();
        $scope.postProfForm.$setUntouched();
    };


    $scope.checkForError = function(option) {
        return option.$invalid && option.$touched;
    };
}]);

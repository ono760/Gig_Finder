var app = angular.module('gigApp', ['ui.router', 'ngMaterial', 'ngMessages', 'ngAnimate', 'btford.socket-io', 'pascalprecht.translate', 'ngCookies']);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: "/",
            controller: "HomeControl",
            templateUrl: "partials/home.html"
        })

    .state('about', {
        url: "/about",
        controller: "AboutControl",
        templateUrl: "partials/about.html"
    })

    .state('signup', {
            url: "/signup",
            controller: "SignUpControl",
            templateUrl: "partials/signup.html"
        })
        .state('whoami', {
            url: "/whoami",
            controller: "UserControl",
            templateUrl: "partials/whoami.html"
        })
        .state('gigposter', {
            url: "/gigposter",
            controller: "PosterControl",
            templateUrl: "partials/gigposter.html"
        })

    .state('gigseeker', {
            url: "/gigseeker",
            controller: "GigSeekerControl",
            templateUrl: "partials/gigseeker.html"
        })
        .state('signin', {
            url: "/signin",
            controller: "SignInControl",
            templateUrl: "partials/signin.html"
        })
        .state('/user', {
            url: "/user",
            controller: "UserControl",
            templateUrl: "partials/user.html"
        })
        .state('/chatroom', {
            url: "/chatroom",
            controller: "ChatRoomControl",
            templateUrl: "partials/chatroom.html"
        })

});

app.config(['$translateProvider', function($translateProvider) {
    $translateProvider.preferredLanguage('en');
    $translateProvider.useLoader('asyncLoader');
    $translateProvider.useCookieStorage();
    $translateProvider.useLocalStorage();
}]);


app.factory('asyncLoader', function($q, $timeout) {

    return function(options) {
        var deferred = $q.defer(),
            translations;

        if (options.key === 'en') {
            translations = translationsEN;
        } else {
            translations = translationsES;
        }

        $timeout(function() {
            deferred.resolve(translations);
        }, 0);

        return deferred.promise;
    };
});

app.controller('TranslateControl', ['$translate', '$scope', function($translate, $scope) {
  $scope.changeLanguage = function(langKey) {
    $translate.use(langKey);
  };
}]);
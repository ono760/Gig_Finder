angular.module('gigApp')
  .factory('socket', function(socketFactory) {
    return socketFactory();
  });
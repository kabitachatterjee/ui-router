console.log('app.js is linked');
var app = angular.module('sampleApp', ['ui.router']);
app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
  $stateProvider.state('firstMessage', {
    url: '/first-msg',
    templateUrl: 'first.html',
    controller: 'first'
  })
  .state('secondMessage', {
    url: '/second-msg',
    templateUrl: 'second.html',
    controller: 'second'
  })
  .state('root', {
    url: '/',
    templateUrl: 'home.html'
  });
  $urlRouterProvider.otherwise('/')
}]);
app.controller('first', ['$scope', function($scope) {
  $scope.a = 10;
  $scope.b = 20;
}]);
app.controller('second', ['$scope', function($scope) {
  $scope.c = 20;
  $scope.d = 30;
}]);

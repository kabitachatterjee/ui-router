console.log('app.js is linked');
var app = angular.module('sampleApp', ['ui.router']);
app.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('firstMessage', {
    url: '/first-msg',
    template: '<strong>first message</strong>'
    //controller: 'first'
  });
}]);
// app.controller('first', ['$scope', function($scope) {
//   $scope.a = 10;
//   $scope.b = 20;
// }]);

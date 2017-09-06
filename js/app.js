console.log('app.js is linked');
var app = angular.module('sampleApp', ['ui.router']);
app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {

  $stateProvider
  .state('itemDetails', {
    url: '/:itemName/:quantity',
    templateUrl: 'itemDetails.html',
    controller: 'itemDetails'
  })
  .state('root', {
    url: '/',
    templateUrl: 'home.html',
    controller: 'home'
  });
  $urlRouterProvider.otherwise('/')
}]);

app.controller('home', ['$scope', '$stateParams', function($scope, $stateParams) {
  $scope.list = [{itemName: 'cookies', quantity: '30'},
                {itemName:'milk', quantity: '1'},
                {itemName:'eggs', quantity:'24'},
              {itemName:'sugar', quantity:'1'}];
}]);
app.controller('itemDetails', ['$scope', '$stateParams', function($scope, $stateParams) {
  $scope.itemName = $stateParams.itemName;
  $scope.quantity = $stateParams.quantity;
}]);

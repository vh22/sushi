app.controller('tabsController', ['$scope', function($scope) {
  $scope.activeTab = 'cont-1'; 
  $scope.switchToTab = function( tab ) { 
    $scope.activeTab = tab; 
  } 
}]);
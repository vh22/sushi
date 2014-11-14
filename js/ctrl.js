angular.module('sushiApp', ['ui.bootstrap']);
angular.module('sushiApp').controller('DatepickerDemoCtrl', function ($scope) {


  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };




  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
}).config(function (datepickerConfig, datepickerPopupConfig) {
      datepickerConfig.showWeeks = false;
      datepickerPopupConfig.toggleWeeksText = null;
}).controller('tabsController', ['$scope', function($scope) { 
  $scope.activeTab = 'cont-1'; 
  $scope.switchToTab = function( tab ) { 
    $scope.activeTab = tab; 
  } 
}]).controller('RatingDemoCtrl', function ($scope) {
  $scope.rate = 1;
  $scope.max = 5;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'icon-star', stateOff: 'icon-star'}
  ];
});

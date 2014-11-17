app.controller('RatingDemoCtrl', function ($scope) {
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
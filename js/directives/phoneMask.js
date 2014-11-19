app.directive('phone', function(){
  return {
        restrict: "E",
        template: '<input type="text" name="phone" id="phone" kp-mask="+7{{maskValue}}" data-ng-model="phone" />',
        transclude: true,
        link: function($scope){
          $scope.maskValue = '(999)999-99-99';
        }
    }
});
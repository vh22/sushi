app.controller('showAdditionalCtrl', ['$scope', function($scope) {
    $scope.orderAdditional = false;
    $scope.showMore = function(){
        $scope.orderAdditional = !$scope.orderAdditional
    };
}]);
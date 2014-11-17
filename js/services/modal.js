app.run(function($rootScope, $modal) {
  $rootScope.openModal = function(templateUrl) {
    var modalInstance;
    templateUrl = templateUrl || [];
    modalInstance = $modal.open({
      templateUrl: templateUrl,
      windowClass: templateUrl,
      controller: function($scope, $modalInstance) {
        $scope.close = function() {
          $modalInstance.dismiss('cancel');
        };
        $scope.goStep = function(templateUrl) {
          $modalInstance.dismiss('cancel');
          $scope.$root.openModal(templateUrl);
        };
         $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
          };
      }
    });
  };
});
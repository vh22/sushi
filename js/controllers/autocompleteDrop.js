app.controller( 'AutoDrop' , function( $scope ) {
  $scope.titles = [ "Action Comics" , "Detective Comics" , "Superman" , "Fantastic Four" , "Amazing Spider-Man", "asd", "asda", "asdw", "asdq", "asdr", "asdf", "asdg", "asds" ];
  $scope.addItem = function( item ) {
    if ( !_.contains( $scope.titles , item.title ) ){
      $scope.titles.push( item.title );
    }
    $scope.item = {};
  }
});
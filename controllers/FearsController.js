fearsLister.controller('FearsCtrl', function($scope, $FearsFactory){
  $scope.fears = FearsFactory.fears;
  $scope.FearsFactory = FearsFactory;
});
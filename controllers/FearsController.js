fearsLister.controller('FearsCtrl', function FearsCtrl($scope, FearsFactory){
  $scope.fears = FearsFactory.fears;
  $scope.FearsFactory = FearsFactory;
});
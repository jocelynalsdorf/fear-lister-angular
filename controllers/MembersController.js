fearsLister.controller('MembersCtrl', function MembersCtrl($scope, $stateParams, FearsFactory, UtilitiesFactory){
  $scope.fear = UtilitiesFactory.findById(FearsFactory.fears, $stateParams.fearId);
  $scope.addMember =  function(){
    $scope.fear.members.push({name: $scope.memberName});
    $scope.memberName = null;
  }
});
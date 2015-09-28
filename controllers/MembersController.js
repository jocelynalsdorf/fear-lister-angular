fearsLister.controller('MembersCtrl', function MembersCtrl($scope, $stateParams, FearsFactory, UtilitiesFactory){
  $scope.member = UtilitiesFactory.findById(FearsFactory.fears, $stateParams.courseId);
  $scope.addMember =  function(){
    $scope.fear.members.push({name: $scope.memberName});
    $scope.memberName = null;
  }
});
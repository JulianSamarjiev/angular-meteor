angular.module("socially").controller("PartiesListCtrl", ['$scope', '$meteor', function($scope, $meteor) {

  $scope.parties = $meteor.collection(Parties);

  $scope.remove = function(party) {
    $scope.parties.remove(party);
  };

  $scope.removeAll = function() {
    $scope.parties.remove();
  }

}]);

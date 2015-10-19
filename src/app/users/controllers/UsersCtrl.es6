angular.module('app').controller('UsersCtrl', function($scope, UserSvc, PubSubChannelSvc){
    $scope.users = UserSvc.query();

    $scope.editMany = ()=>{
        PubSubChannelSvc.editData();
    }
});
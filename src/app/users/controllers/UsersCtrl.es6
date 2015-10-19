angular.module('app').controller('UsersCtrl', function($scope, UserSvc, PubSubChannelSvc){
    $scope.users = UserSvc.query();

    $scope.editMany = ()=>{
        PubSubChannelSvc.editData();
    }

    $scope.removeEntry = (element)=>{
        element.entry.$remove(function(){
            $scope.users.splice(element.index, 1);
        })
    }
});
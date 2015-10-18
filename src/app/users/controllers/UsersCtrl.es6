angular.module('app').controller('UsersCtrl', function($scope, UserSvc){
    $scope.users = UserSvc.query();

    $scope.save = (user)=>{
        user.$save();
    }

    $scope.remove = (user, i)=>{
        user.$remove(function() {
            $scope.users.splice(i, 1);
        });
    }
});
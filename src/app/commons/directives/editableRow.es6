angular.module('app').directive('editableRow', function(PubSubChannelSvc){
    return {
        restrict: 'EAC',
        scope: {
            obj: '='
        },
        templateUrl: 'app/commons/directives/editable-row.html',
        link: function(scope, elem, attrs){
            scope.selected = false;
            scope.rowform.$hide();
            scope.save = (user)=>{
                console.log({"user": user});
                user.$save();
            }

            scope.remove = (user, i)=>{
                user.$remove(function() {
                    scope.users.splice(i, 1);
                });
            }

            var editSelected = function() {
                if(scope.selected){
                    scope.rowform.$show();
                    scope.selected = false;
                }
            }

            PubSubChannelSvc.onEditData(scope, editSelected);
        }
    }
});
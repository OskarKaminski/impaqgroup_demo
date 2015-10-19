angular.module('app').directive('editableRow', function(PubSubChannelSvc){
    return {
        restrict: 'EAC',
        scope: {
            obj: '=',
            removeEntry: '&'
        },
        templateUrl: 'app/commons/directives/editable-row.html',
        link: function(scope, elem, attrs){
            scope.selected = false;
            scope.rowform.$hide();
            scope.save = (user)=>{
                user.$save();
            }

            scope.remove = ()=>{
                scope.removeEntry({entry: scope.obj});
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
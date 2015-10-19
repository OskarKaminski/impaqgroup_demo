class PubSubChannel{

    constructor($rootScope){
        this.$rootScope = $rootScope;
        this._EDIT_DATA_ = '_EDIT_DATA_';
        this._DATA_UPDATED_ = '_DATA_UPDATED_';
    };

    editData(item){
        this.$rootScope.$broadcast(this._EDIT_DATA_, {item: item});
    }

    onEditData($scope, handler){
        $scope.$on(this._EDIT_DATA_, function(event, args) {
            handler(args.item);
        });
    }

    dataUpdated(){
        this.$rootScope.$broadcast(this._DATA_UPDATED_);
    }

    onDataUpdated($scope, handler){
        $scope.$on(this._DATA_UPDATED_, function (event) {
            handler();
        });
    }
}
PubSubChannel.$inject = ['$rootScope'];

angular.module('app').service('PubSubChannelSvc', PubSubChannel);
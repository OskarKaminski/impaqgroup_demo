angular.module('app.users', ['userMock', 'xeditable']).run(function(editableOptions){
    editableOptions.theme = 'bs3';
});
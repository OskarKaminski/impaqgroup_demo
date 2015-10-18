angular.module('app').factory('UserSvc', function($resource){
    return $resource('users.impaqgroup.com/:userId', {userId: '@id'}, {
        'query': {method: 'GET', url: 'users.impaqgroup.com/findall', isArray:true},
        'save': {method: 'POST', url: 'users.impaqgroup.com/edit/:userId', params:{userId: '@id'}},
        'remove': {method: 'POST', url: 'users.impaqgroup.com/remove/:userId', params:{userId: '@id'}, isArray:true},
        'get': {method: 'GET', url: 'users.impaqgroup.com/find/:userId', params:{userId: '@id'}}
    });
});
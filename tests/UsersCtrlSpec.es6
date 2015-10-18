describe("UsersCtrl", ()=> {

    let scope, controller, userSvcMock, deferredUsers, usersMock;

    beforeEach(angular.mock.module('app'));
    beforeEach(inject(($rootScope, $controller, $q)=> {
        deferredUsers = $q.defer();
        usersMock = [{
            id: 1,
            name: 'name0',
            surname: 'surname0',
            date_of_birth: '24-8-1981',
            mobile_number: '555888555',
            address: {
                city: 'Poznan',
                street: 'Dluga',
                house_number: 2
            }
        },{
            id: 2,
            name: 'name1',
            surname: 'surname1',
            date_of_birth: '24-8-1981',
            mobile_number: '555888555',
            address: {
                city: 'Poznan',
                street: 'Dluga',
                house_number: 2
            }
        }];

        userSvcMock = {
            query: jasmine.createSpy('query spy').and.returnValue(deferredUsers.promise)
        };

        scope = $rootScope.$new();

        controller = $controller('UsersCtrl', {
            '$scope': scope,
            'UserSvc': userSvcMock
        });
    }));

    describe("When controller is initialized",()=> {

        it('Should call userSvcMock method query', ()=> {
            expect(userSvcMock.query).toHaveBeenCalled();
        });

    });
});

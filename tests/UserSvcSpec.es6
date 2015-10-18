describe("UserSvc", () => {

    let $httpBackend, UserSvc, mockedUsersResponse;

    beforeEach(angular.mock.module('app'));
    beforeEach(inject((_$httpBackend_, _UserSvc_)=> {
        $httpBackend = _$httpBackend_;
        UserSvc = _UserSvc_;
    }));

    describe("When getAlbums is called", ()=> {

        beforeEach(()=> {
            mockedUsersResponse = {
                data: [
                    {
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
                    }, {
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
                    }
                ]
            };
            $httpBackend.when('GET', 'users.impaqgroup.com/findall').respond(mockedUsersResponse);
        });


    });
});

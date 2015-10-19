
angular.module('userMock', ['ngMockE2E']).run(function($httpBackend){
    var users = [
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
        },{
            id: 3,
            name: 'name2',
            surname: 'surname2',
            date_of_birth: '24-8-1981',
            mobile_number: '555888555',
            address: {
                city: 'Poznan',
                street: 'Dluga',
                house_number: 2
            }
        },{
            id: 4,
            name: 'name3',
            surname: 'surname3',
            date_of_birth: '24-8-1981',
            mobile_number: '555888555',
            address: {
                city: 'Poznan',
                street: 'Dluga',
                house_number: 2
            }
        }
    ];

    $httpBackend.whenPOST(/users.impaqgroup.com\/remove\/(.+)/, undefined, undefined, ['id']).respond(200);

    $httpBackend.whenPOST(/users.impaqgroup.com\/edit\/(.+)/, undefined, undefined, ['id']).respond(200);

    $httpBackend.whenGET('users.impaqgroup.com/findall').respond(users);

    $httpBackend.whenGET('users.impaqgroup.com/find').respond(function(data){
        data = JSON.parse(data);
        users.forEach(user=>{
            if(user.id === data.id){
                return [200, user, {}];
            }
        });
    });

    $httpBackend.whenGET(/\.html$/).passThrough();
})
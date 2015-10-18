describe("MusicCtrl", ()=> {

    let scope, controller, musicSvcMock, deferredAlbums, albumsMock;

    beforeEach(angular.mock.module('app'));
    beforeEach(inject(($rootScope, $controller, MusicSvc, $q)=> {
        deferredAlbums = $q.defer();
        albumsMock = [{
                images: [{
                        height: 640,
                        url: "https://i.scdn.co/image/60905c7dc80eca3c82b23cb2344d5d889ccb4cf8",
                        width: 640
                }],
                name: "The Book Of Souls"
        },{
                images: [{
                        height: 640,
                        url: "https://i.scdn.co/image/60905c7dc80eca3c82b23cb2344d5d889ccb4cf8",
                        width: 640
                    }],
                name: "The Book Of Souls 2"
            }];

        musicSvcMock = {
            getAlbums: jasmine.createSpy('getAlbums spy').and.returnValue(deferredAlbums.promise)
        };

        scope = $rootScope.$new();

        controller = $controller('MusicCtrl', {
            '$scope': scope,
            'MusicSvc': musicSvcMock
        });
    }));

    describe("When controller is initialized",()=> {

        it('Should call musicSvc method getAlbums', ()=> {
            expect(musicSvcMock.getAlbums).toHaveBeenCalled();
        });

        describe('When getAlbums promise is resolved',()=>{
            beforeEach(()=> {
                deferredAlbums.resolve(albumsMock);
                scope.$digest();
            });

            it('scope should contain albums array',()=>{
                expect(scope.albums.length).toBe(2);
                expect(scope.albums[0].name).toBe(albumsMock[0].name);
            });
        });

    });
});

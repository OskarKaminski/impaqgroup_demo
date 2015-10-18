describe("MusicSvc", () => {

    let $httpBackend, MusicSvc, mockedAlbumsResponse;

    beforeEach(angular.mock.module('app'));
    beforeEach(inject((_$httpBackend_, _MusicSvc_)=> {
        $httpBackend = _$httpBackend_;
        MusicSvc = _MusicSvc_;
    }));

    describe("When getAlbums is called", ()=> {

        beforeEach(()=> {
            mockedAlbumsResponse = {
                data: [
                    {
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/60905c7dc80eca3c82b23cb2344d5d889ccb4cf8",
                                width: 640
                            }
                        ],
                        name: "The Book Of Souls"
                    },
                    {
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/60905c7dc80eca3c82b23cb2344d5d889ccb4cf8",
                                width: 640
                            }
                        ],
                        name: "The Book Of Souls 2"
                    }
                ]
            };
            $httpBackend.when('GET', '/api/music/albums').respond(mockedAlbumsResponse);
        });

        it('Should return albums array', (done)=> {
            MusicSvc.getAlbums().then((response)=> {
                expect(response.data.length).toEqual(2);
                done();
            });
            $httpBackend.flush();
        });

        it('Albums should contain title and image url', (done)=> {
            MusicSvc.getAlbums().then((response)=> {
                expect(response.data[0].images[0].url).toBeDefined();
                done();
            });
            $httpBackend.flush();
        });

    });
});

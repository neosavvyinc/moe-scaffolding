'use strict';

xdescribe('services.WorklistService', function () {
    var items, service, configuration, $q, $rootScope, $httpBackend, $resource

    beforeEach(function () {

        //Define any underlying mock data.
        items = [];

        //We laod all the module dependancies up front.
        module.apply(module, MOE.Dependencies.concat('ngResource'));

        //Injecting all of our services in the "beforeEach" section allows us to avoid cluttering out tests. 	
        inject(function ($injector) {
            $q = $injector.get('$q');
            $rootScope = $injector.get('$rootScope');
            $httpBackend = $injector.get('$httpBackend');
            configuration = $injector.get('configuration');
            service = $injector.get('services.WorklistService');
            $resource = $injector.get('$resource');
        });

        //Stub out the backend response with the fixture
        $httpBackend.whenGET(configuration.WORKLISTS_URL).respond(loadJsonFixtures('worklists.json')['worklists.json']);

    });

    afterEach(function () {
        //flush the data from the http call to resolve any pending promises.
        $httpBackend.flush();
    });

    it('should return a result with valid params', function () {

        //This doesn't do anything yet
        service.get().then(function (result) {
            expect(result).not.toBeNull();
        });

    });
});
       
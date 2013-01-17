'use strict';;

xdescribe('dateTimeInput', function () {
    var element, $q, $rootScope, $compile, $httpBackend

    beforeEach(function () {

        //We laod all the module dependancies up front.
        module.apply(module, MOE.Dependencies);

        //Injecting all of our services in the "beforeEach" section allows us to avoid cluttering out tests. 	
        inject(function ($injector) {
            $q = $injector.get('$q')
            $rootScope = $injector.get('$rootScope');
            $compile = $injector.get('$compile');
            $httpBackend = $injector.get('$httpBackend');
        });

        //Applying the rootScope digests and refreshes the ui so our directive renders.
        this.date = $rootScope.date = new Date();
        this.timeFormat = $rootScope.timeFormat = "%I:%M:%S %p";

        $rootScope.$apply(function () {
            //We compile a directive into an angular element so we canmanipulate it programatically.
            element = $compile('<date-time-input date="\'this.date\'" format="\'this.timeFormat\'"></date-time-input>')($rootScope);
        });

    });

    it('should display the given date in the time format specified', function () {

        //Once an element has been rendered you can perform any of the "angular.element" operations.
        var formattedTime = this.date.strftime(this.timeFormat);

        expect($(element).find('input').val()).toBe(formattedTime);

    });
});
'use strict'

describe('The Equity Ticket', function(){

    it('should display the correct url', function(){
        browser().navigateTo('/');
        expect(browser().window().hash()).toMatch('/');

    });

});

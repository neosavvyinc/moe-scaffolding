'use strict';

describe('The Equity Ticket', function(){

    it('should support adding one order at the bottom of the orders list', function(){
        browser().navigateTo('/');
        expect(browser().window().hash()).toMatch('');

        expect(repeater('.equity-ticket .accordion-group').count()).toEqual(3);
        expect(element('#accountInfo0 p:nth-child(1)').text()).toMatch('John Doe');
        expect(element('#accountInfo1 p:nth-child(1)').text()).toMatch('Jane Doe');
        expect(element('#accountInfo2 p:nth-child(1)').text()).toMatch('Dove Doe');

        element('#addTicket').click();
        expect(repeater('.equity-ticket .accordion-group').count()).toEqual(4);

        expect(element('#accountInfo0 p:nth-child(1)').text()).toMatch('John Doe');
        expect(element('#accountInfo1 p:nth-child(1)').text()).toMatch('Jane Doe');
        expect(element('#accountInfo2 p:nth-child(1)').text()).toMatch('Dove Doe');
        expect(element('#accountInfo3 p:nth-child(1)').text()).toMatch('John Doe');
    })

});
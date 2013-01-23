'use strict';

describe('The Equity Ticket', function(){

    it('should be an accordian and each item should be expandable', function(){

        browser().navigateTo('/');
        expect(browser().window().hash()).toMatch('');

        var ticketBeforeClickElement = element('#ticket0');
        expect(ticketBeforeClickElement.outerHeight()).toEqual(72);

        var row0collapseElement = element('#accordianToggle0');
        row0collapseElement.click();
        sleep(2); //wait for the animation to complete
        var ticketAfterClickElement = element('#ticket0');
        expect(ticketAfterClickElement.outerHeight()).toEqual(410);

    })

});
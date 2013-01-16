'use strict';

ddescribe('The Equity Ticket', function(){

    it('should be an accordian and each item should be expandable', function(){

        browser().navigateTo('/');
        expect(browser().window().hash()).toMatch('');

        var ticketBeforeClickElement = element('#ticket0');
        expect(ticketBeforeClickElement.outerHeight()).toEqual(72);

        var row0collapseElement = element('#ticket0//a');
        row0collapseElement.click();
        sleep(10);
        var ticketAfterClickElement = element('#ticket0');
        expect(ticketAfterClickElement.outerHeight()).toEqual(408);

    })

});
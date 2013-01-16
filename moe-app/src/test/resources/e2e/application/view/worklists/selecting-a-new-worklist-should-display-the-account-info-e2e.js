'use strict';

xdescribe('Should display the account info of the newly selected worklist', function () {

    it('Should display the first account as selected by default', function () {
        browser().navigateTo('/');
        expect(browser().window().hash()).toMatch('');
        //browser().navigateTo('/#worklists');
        //expect(browser().window().hash()).toMatch('/worklists');

        sleep(100);

        var accountRow = $($('.worklists').find('.content').find('.row')[0]);

        expect(accountRow.find('label')[0].innerHTML.indexOf("John Doe") == -1).toBeFalsy();
        expect(accountRow.find('label')[1].innerHTML.indexOf("Active Assets Account") == -1).toBeFalsy();
        expect(accountRow.find('label')[2].innerHTML.indexOf("101-023148") == -1).toBeFalsy();
    });

});
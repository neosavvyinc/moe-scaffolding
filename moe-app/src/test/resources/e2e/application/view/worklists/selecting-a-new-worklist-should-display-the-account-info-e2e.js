'use strict';

describe('Should display the account info of the newly selected worklist', function () {

    it('Should display the first account as selected by default', function () {
        browser().navigateTo('/');
        expect(browser().window().hash()).toMatch('');
        browser().navigateTo('/#worklists');
        expect(browser().window().hash()).toMatch('/worklists');

        var nameLabel = element("#worklists-account-info-name");
        var accountTypeLabel = element("#worklists-account-info-account-type");
        var accountNumberLabel = element("#worklists-account-info-account-number");

        expect(nameLabel.text()).toBe("John Doe");
        expect(accountTypeLabel.text()).toBe("Active Assets Account");
        expect(accountNumberLabel.text()).toBe("101-023148");
    });

    it('Should change the account info displayed when the worklist is changed', function () {
        browser().navigateTo('/#worklists');
        expect(browser().window().hash()).toMatch('/worklists');

        element("#worklists-dropdown-menu li:nth-child(3)").click();

        var nameLabel = element("#worklists-account-info-name");
        var accountTypeLabel = element("#worklists-account-info-account-type");
        var accountNumberLabel = element("#worklists-account-info-account-number");

        expect(nameLabel.text()).toBe("Jane Doe");
        expect(accountTypeLabel.text()).toBe("Index, Hedged Account");
        expect(accountNumberLabel.text()).toBe("138-787891");
    });

});
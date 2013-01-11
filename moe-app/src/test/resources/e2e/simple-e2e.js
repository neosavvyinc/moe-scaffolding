'use strict'

describe('The Equity Ticket', function(){

    it('Should Display John Doe\'s Account', function(){
        browser().navigateTo('/');
        expect(browser().window().hash()).toMatch('');

        var accountNameEl
            ,accountTypeEl
            ,accountNumberEl;

        accountNameEl= element('#accountInfo p:nth-child(1)');
        accountTypeEl = element('#accountInfo p:nth-child(2)');
        accountNumberEl = element('#accountInfo p:nth-child(3)');

        expect(accountNameEl.text()).toMatch('John Doe');
        expect(accountTypeEl.text()).toMatch('Active Assets Account');
        expect(accountNumberEl.text()).toMatch('101-023148');
    });

    it('Should have a FA Number Dropdown and support changing values to 105', function(){

        var faNumElem = element("#faNumberInput");
        expect(faNumElem.val()).toMatch("101");

        using('#faNumberInput', '');
        input('selectedItem').enter('105');

        var submit = element("#submitOrders");
        submit.click();
        expect(browser().window().hash()).toMatch('/review');

        var faNumElem = element("#faNumber");
        expect(faNumElem.text()).toMatch("FA Number: 105");
    });

    it('Should have a valid review ticket',function(){
        browser().navigateTo('/#review');
        expect(browser().window().hash()).toMatch('/review');
        var faNumElem = element('#faNumber');
        expect(faNumElem.text()).toBe("FA Number: def");
    })

});

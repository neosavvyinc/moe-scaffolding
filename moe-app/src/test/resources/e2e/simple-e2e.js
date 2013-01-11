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

        var faVerifyNumElem = element("#faNumber");
        expect(faVerifyNumElem.text()).toMatch("FA Number: 105");
    });

    it('Should allow editting the ticket symbol, and reflect it on the review ticket', function() {
        browser().navigateTo('/');
        expect(browser().window().hash()).toMatch('');

        var symbolElement = element("#symbolInput", '');
        expect(symbolElement.val()).toMatch("IBM");

        using('#symbolInput', '');
        input('searchTerm').enter('AAPL');

        var submit = element("#submitOrders");
        submit.click();
        expect(browser().window().hash()).toMatch('/review');


        var symbolVerifyElem = element("#symbol", '');
        expect(symbolVerifyElem.text()).toMatch("Symbol: AAPL");

    });

    it('Should verify that buy, sell, sell short should be available in the basic equity ticket', function() {

        browser().navigateTo('/');
        expect(browser().window().hash()).toMatch('');

        var buyElement = element("#sideButtons button:nth-child(1)"),
            sellElement = element("#sideButtons button:nth-child(2)"),
            sellShortElement = element("#sideButtons button:nth-child(3)");

        expect(buyElement.text()).toMatch("Buy");
        expect(sellElement.text()).toMatch("Sell");
        expect(sellShortElement.text()).toMatch("Sell Short");

    });

    it('Should verify clicking on buy correctly updates review ticket', function() {

        browser().navigateTo('/');
        expect(browser().window().hash()).toMatch('');

        var buyElement = element("#sideButtons button:nth-child(1)");
        buyElement.click();

        var submit = element("#submitOrders");
        submit.click();
        expect(browser().window().hash()).toMatch('/review');

        var sideVerifyElement = element("#side", '');
        expect(sideVerifyElement.text()).toMatch("Side: Buy");

    });

    it('Should verify clicking on sell correctly updates review ticket', function() {

        browser().navigateTo('/');
        expect(browser().window().hash()).toMatch('');

        var buyElement = element("#sideButtons button:nth-child(2)");
        buyElement.click();

        var submit = element("#submitOrders");
        submit.click();
        expect(browser().window().hash()).toMatch('/review');

        var sideVerifyElement = element("#side", '');
        expect(sideVerifyElement.text()).toMatch("Side: Sell");

    });

    it('Should verify clicking on sell short correctly updates review ticket', function() {

        browser().navigateTo('/');
        expect(browser().window().hash()).toMatch('');

        var buyElement = element("#sideButtons button:nth-child(3)");
        buyElement.click();

        var submit = element("#submitOrders");
        submit.click();
        expect(browser().window().hash()).toMatch('/review');

        var sideVerifyElement = element("#side", '');
        expect(sideVerifyElement.text()).toMatch("Side: Sell Short");

    });

    it('Should support selecting cash from the dropdown beside side', function(){

        browser().navigateTo('/');
        expect(browser().window().hash()).toMatch('');

        var cashItemElement = element("#sharesMenuItems li:nth-child(2) a",'');
        expect(cashItemElement.text()).toMatch("Cash");
        cashItemElement.click();

        var submit = element("#submitOrders");
        submit.click();
        expect(browser().window().hash()).toMatch('/review');

        var sharesVerifyElement = element("#shareValue", '');
        expect(sharesVerifyElement.text()).toMatch("Share Value: Cash");

    });

    it('Should have a valid review ticket',function(){
        browser().navigateTo('/#review');
        expect(browser().window().hash()).toMatch('/review');
        var faNumElem = element('#faNumber');
        expect(faNumElem.text()).toBe("FA Number: def");
    })

});

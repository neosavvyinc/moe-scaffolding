'use strict';

describe("MOE Utils", function () {
    describe("MOE.Utils.CollectionUtils", function () {
        describe("update", function () {
            var utils = MOE.Utils.CollectionUtils;
            var item = {name: "Steve"};
            var chainedItem = {info: {name: "George"}};

            it("Should return null if the array is null", function () {
                expect(utils.update(null, item, "name")).toBeNull();
            });

            it("Should return an empty array if the array is empty", function () {

            });

            it("Should never update the item if the item with property is not found", function () {

            });

            it("Should be able to update an item with a single property", function () {

            });

            it("Should be able to update an item with a property chain", function () {

            });
        });
    });
});

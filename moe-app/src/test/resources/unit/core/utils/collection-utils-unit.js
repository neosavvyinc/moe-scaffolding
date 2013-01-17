'use strict';

describe("MOE.Utils.CollectionUtils", function () {
    describe("update", function () {
        var utils = MOE.Utils.CollectionUtils;
        var item = {name:"Steve", age:"46"};
        var chainedItem = {info:{name:"George"}, color:"Green"};

        it("Should return null if the array is null", function () {
            expect(utils.update(null, item, "name")).toBeNull();
        });

        it("Should return an empty array if the array is empty", function () {
            expect(utils.update([], item, "name")).toEqual([]);
        });

        it("Should never update the item if the item with property is not found", function () {
            expect(utils.update([
                {name:"Tom"},
                {name:"Jason"}
            ], item, "name")).toEqual([
                {name:"Tom"},
                {name:"Jason"}
            ]);
        });

        it("Should be able to update an item with a single property", function () {
            expect(utils.update([
                {name:"Steve"},
                {name:"Jason"}
            ], item, "name")).toEqual([
                {name:"Steve", age:"46"},
                {name:"Jason"}
            ]);
        });

        it("Should be able to update an item with a property chain", function () {
            expect(utils.update([
                {info:{name:"Mike"}},
                {info:{name:"George"}},
                {info:{name:"Bob"}}
            ], chainedItem, ["info", "name"])).toEqual([
                {info:{name:"Mike"}},
                {info:{name:"George"}, color:"Green"},
                {info:{name:"Bob"}}
            ]);
        });
    });
});

var MOE = MOE || {};
MOE.Utils = MOE.Utils || {};

MOE.Utils.CollectionUtils = (function () {

    function propertyChain(item, chainOrProperty) {
        if (item && chainOrProperty && chainOrProperty.length) {
            if (angular.isArray(chainOrProperty)) {
                return propertyChain(item[chainOrProperty.shift()], chainOrProperty);
            }
            return item[chainOrProperty];
        }
        return null;
    };

    return {
        update:function (array, item, uniqueProperties) {
            if (array && array.length) {
                var itemUniqueProperty = propertyChain(item, uniqueProperties);
                for (var i = 0; i < array.length; i++) {
                    if (propertyChain(array[i], uniqueProperties) == itemUniqueProperty) {
                        array[i] = item;
                    }
                }
            }
            return array;
        }
    };
})();
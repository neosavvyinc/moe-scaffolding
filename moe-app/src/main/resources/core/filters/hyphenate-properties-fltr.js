'use strict';

MOE.Filters.filter('hyphenateProperties', function () {
    return function hyphenateProperties(value) {
        if (value && arguments.length > 1) {
            var str = "";
            for (var i = 1; i < arguments.length; i++) {
                str += value[arguments[i]];
                if (i < (arguments.length - 1)) {
                    str += " - "
                }
            }
            return str;
        }
        return null;
    }
});

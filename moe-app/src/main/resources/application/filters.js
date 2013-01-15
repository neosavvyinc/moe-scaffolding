'use strict';

MOE.Filters.filter('toDateFormat', function () {
    return function (dateAndFormat) {
        if (dateAndFormat && dateAndFormat.date && dateAndFormat.format) {
            return dateAndFormat.date.strftime(dateAndFormat.format);
        }
        return null;
    }
});

MOE.Filters.filter('hyphenateProperties', function () {
    return function (value) {
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

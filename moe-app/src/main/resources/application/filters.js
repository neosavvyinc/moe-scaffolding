'use strict';

MOE.Filters.filter('toDateFormat', function () {
    return function (dateAndFormat) {
        if (dateAndFormat && dateAndFormat.date && dateAndFormat.format) {
            return dateAndFormat.date.strftime(dateAndFormat.format);
        }
        return null;
    }
});

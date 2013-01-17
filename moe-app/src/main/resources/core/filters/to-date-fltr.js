MOE.Filters.filter('toDateFormat',
    ['$filter', '$rootScope',
        function ($filter, $rootScope) {
            'use strict';

            return function toDateFormat(input, format) {

                if( !input && !format ) {
                    return;
                }

                return input.strftime(format);

            }

        }
    ]
);
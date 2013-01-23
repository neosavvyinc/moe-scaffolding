When taking notes for functionality use the following format:

- Execution Strategy (Requires stories)
     - Should be a row to configure the strategy used to execute the fills
     - Should have a strategy drop down with VWAP, Target POV, Arrival Price available
     - Should have a Start time and End time field that uses time inputs
     - Should have a dollar input field for Max Aggression
     - Should have a drop down for strategy parameters that contains Max % Volume, Target % Volume, None or Other

Then when placing this code in a JS file for end to end testing you can use the following regex replacements

Create the describe block:
(^-)(.*)
'use strict'; \n\ndescribe('$2', function(){ \n\n});

Create the xit sections:
(^[ \t]+(-))(.*)
\nxit('$3', function(){\n\nfail('unimplemented');\n});







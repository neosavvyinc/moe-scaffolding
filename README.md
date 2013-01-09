moe-scaffolding
===============

CSS Tricks:
http://css-tricks.com/snippets/css/clear-fix/
http://css.maxdesign.com.au/listamatic/horizontal01.htm


In order to compile the .less .css file, you will need to install npm and less for node.

1) $: curl http://npmjs.org/install.sh
2) $: npm -g install watch-lessc

You need to make sure to add the watch-lessc install folder (bin) to your $PATH variable.

3) In the assets/style folder, run the script ./watchStyles.sh, and your styles should automatically compile.

Running Tests
-------------

First you need to install Testacular:

    npm install -g testacular@canary

Make sure testacular is in your path:

    which testacular
    (it should return something like: /usr/local/share/npm/bin/testacular)

Then to run the tests:

    cd moe-scaffolding/moe-app
    testacular start src/test/resources/testacular-unit-config.js



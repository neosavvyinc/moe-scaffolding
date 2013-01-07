moe-scaffolding
===============

In order to compile the .less .css file, you will need to install npm and less for node.

1) $: curl http://npmjs.org/install.sh
2) $: npm -g install watch-lessc

You need to make sure to add the watch-lessc install folder (bin) to your $PATH variable.

3) In the assets/style folder, run the script ./watchStyles.sh, and your styles should automatically compile.
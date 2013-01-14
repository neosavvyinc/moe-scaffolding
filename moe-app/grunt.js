module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        lint: {
            all: ['src/main/resources/application/**/*.js']
        },
        jshint: {
            options: {
                browser: true
            }
        },
        pkg: '<json:package.json>',
//        meta: {
//            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
//                '<%= grunt.template.today("yyyy-mm-dd") %> */'
//        },
        concat: {
            dist: {
                src: ['src/main/resources/application/**/*.js'],
                dest: 'target/built.js'
            }
        },
        min: {
            dist: {
                src: ['target/built.js'],
                dest: 'target/built.min.js'
            }
        },
        testacular: {
            continuous: {
                configFile: 'src/test/resources/testacular-e2e-config.js',
                singleRun: true,
                browsers: ['PhantomJS']
            }
        }

    });

    grunt.loadNpmTasks('gruntacular');

    // Default task.
    grunt.registerTask('default', 'testacular:continuous');

};
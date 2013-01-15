module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        clean: {
            folder: "target/"
        },
        copy: {
            target: {
                options: {
                    cwd: 'src/main/resources/**/*'
                },
                files: {
                    'target/': [
                        'src/main/resources/*.html',
                        'src/main/resources/*.ico',
                        'src/main/resources/**/*.html',
                        'src/main/resources/lib/**/*'
                        ]
                }
            }
        },
        concat: {
            dist: {
                src: ['src/main/resources/application/**/*.js', 'src/main/resources/core/**/*.js'],
                dest: 'target/built.js'
            }
        },
        min: {
            dist: {
                src: ['target/built.js'],
                dest: 'target/built.min.js'
            }
        },
        less: {
            development: {
                files: {
                    "target/assets/style/css/style.css": "src/main/resources/assets/style/less/style.less"
                }
            }//,
//            production: {
//                options: {
//                    paths: ["assets/css"],
//                    yuicompress: true
//                },
//                files: {
//                    "path/to/result.css": "path/to/source.less"
//                }
//            }
        },
        htmlrefs: {
            dist: {
                /** @required  - string including grunt glob variables */
                src: 'target/index.html',
                /** @optional  - string directory name*/
                dest: 'target/',
                /** @optional  - references external files to be included */
                /** any other parameter included on the options will be passed for template evaluation */
                options: {
                    buildNumber: 47878
                }
            }
        },
        testacular: {
            endToEnd: {
                configFile: 'src/test/resources/testacular-e2e-config.js',
                singleRun: true,
                browsers: ['Chrome']
            },
            unit: {
                configFile: 'src/test/resources/testacular-unit-config.js',
                singleRun: true,
                browsers: ['Chrome']
            }
        },
        markdown: {
            all: {
                files: ['src/docs/**/*.md'],
                dest: 'target/docs/*',
                options: {
                    gfm: true,
                    highlight: 'auto'
                }
            }
        }

    });

    grunt.loadNpmTasks('gruntacular');
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-htmlrefs');

    // Default task.
    grunt.registerTask('default', 'clean less:development copy concat min testacular:endToEnd testacular:unit htmlrefs:dist');

};
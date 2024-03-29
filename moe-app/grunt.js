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
                    'target/moe/': [
                        'src/main/resources/*.html',
                        'src/main/resources/*.ico',
                        'src/main/resources/**/*.html',
                        'src/main/resources/lib/**/*',
                        'src/main/resources/**/*.json'
                        ]
                }
            }
        },
        concat: {
            dist: {
                src: ['src/main/resources/application/**/*.js', 'src/main/resources/core/**/*.js'],
                dest: 'target/moe/moe.js'
            }
        },
        min: {
            dist: {
                src: ['target/moe/moe.js'],
                dest: 'target/moe/moe.min.js'
            }
        },
        less: {
            development: {
                files: {
                    "target/moe/assets/style/css/style.css": "src/main/resources/assets/style/less/style.less"
                }
            }
        },
        htmlrefs: {
            dist: {

                src: 'target/moe/index.html',
                dest: 'target/moe/',
                options: {
                    buildNumber: 1
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
            },
            endToEndBuilt: {
                configFile: 'src/test/resources/testacular-e2e-built-config.js',
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
        },
        zip: {
            'target/moe.zip': ['target/moe/**/*']
        },
        complexity: {
            generic: {
                src: ['src/main/resources/application/**/*.js','src/main/resources/core/**/*.js'],
                options: {
                    cyclomatic: 10,
                    halstead: 20,
                    maintainability: 80
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
    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-complexity');

    // Default task.
    grunt.registerTask('default', 'clean less:development copy concat min htmlrefs:dist testacular:endToEnd testacular:unit testacular:endToEndBuilt zip complexity');


};
module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            'dist/bundle.js': ['scripts/module-xhr.js']
        },
        jshint: {
            files: ["scripts/**/*.js", "scripts/**/*.json"],
            options: {
                predef: ["document", "console"],
                esnext: true,
                globalstrict: true,
                globals: {},
                browserify: true
            }
        },
        sass: {
            dist: {
                files: {
                    "stylesheets/main.css": "sass/styles.scss"
                }
            }
        },
        watch: {
            javascripts: {
                files: ["scripts**/*.js"],
                tasks: ["jshint", "browserify"]
            },
            sass: {
                files: ["sass/**/*.scss"],
                tasks: ["sass"]
            }
        }
    });

    require("matchdep")
        .filter("grunt-*")
        .forEach(grunt.loadNpmTasks);

    grunt.registerTask("default", ['jshint', 'sass', 'browserify', 'watch']);
};
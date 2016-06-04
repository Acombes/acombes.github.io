module.exports = function (grunt) {
    var autoprefixer = require('autoprefixer'),
        cssnano = require('cssnano');

    grunt.initConfig({
        sass: {
            options: {
                sourcemap: "none"
            },
            dist: {
                files: {
                    "dist/styles.css": "stylesheets/styles.scss"
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    autoprefixer({browsers: 'last 2 versions'}),
                    cssnano()
                ]
            },
            dist: {
                files: {
                    "dist/styles.min.css": "stylesheets/styles.css"
                }
            }
        },
        watch: {
            options: {
                livereload: 35729
            },
            html: {
                files: 'index.html',
                tasks: []
            },
            styles: {
                files: ['stylesheets/**/*.scss', 'stylesheets/**/*.css', '!stylesheets/styles.css'],
                tasks: ['styles']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');


    grunt.registerTask('styles', ['sass', 'postcss']);
    grunt.registerTask('default', ['styles']);
};
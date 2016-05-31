module.exports = function (grunt) {

    grunt.initConfig({
        sass: {
            options: {
                sourcemap: "file"
            },
            dist: {
                files: {
                    "stylesheets/styles.css": "stylesheets/styles.scss"
                }
            }
        },
        watch: {
            options: {
                livereload: 35729
            },
            styles: {
                files: ['stylesheets/**/*.scss', 'stylesheets/**/*.css', '!stylesheets/styles.css'],
                tasks: ['styles']
            }
        },
        serve: {
            options: {
                port: 8080
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-serve');


    grunt.registerTask('styles', ['sass']);
    grunt.registerTask('default', ['styles']);
};
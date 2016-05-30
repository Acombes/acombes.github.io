module.exports = function(grunt) {

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
      }
      styles: {
        files: ['stylesheets/*.scss', 'stylesheets/*.css', '!stylesheets/styles.css'],
        tasks: ['styles']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');


  grunt.registerTask('styles', ['sass']);
  grunt.registerTask('default', ['styles']);
};
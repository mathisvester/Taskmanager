'use strict';

module.exports = function(grunt){

  /* Configure */
  var configs = {

    css_combine_files : [
      'src/css/styles.css'],

    watch_files : [
      'src/less/*.less',
      'src/less/**/*.less',
      'src/less/**/**/*.less']
  }

  /* Init */
  grunt.initConfig({
    less: {
      production: {
        files: {
          "src/css/index.css" : "src/less/index.less"
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'src/css/index.min.css' : configs.css_combine_files
        }
      }
    },
    watch: {
      src: {
        files: configs.watch_files,
        tasks: ['default']
      }
    },
  });

  // Add plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks
  grunt.registerTask('default', ['less','cssmin']);
  grunt.registerTask('build', ['less','cssmin','concat','uglify']);

  grunt.event.on('watch', function(action, filepath) {
    grunt.log.writeln(filepath + ' has ' + action);
  });

};

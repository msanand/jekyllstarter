module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	  cssmin : {
        compress : {
            files : {
                "assets/css/all.min.css" : ['assets/css/*.css']
            }
        }
    }
//    jekyll: {                            // Another target
//        options: {
//            drafts: true,
//            watch: true,
//            safe: true
//        }
//    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-jekyll');

  // Default task(s).
  grunt.registerTask('default', ['cssmin']);

};

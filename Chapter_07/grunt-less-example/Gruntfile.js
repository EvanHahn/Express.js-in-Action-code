module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      main: {
        options: {
          paths: ["my_css"]
        },
        files: {
          "tmp/serve/main.css": "my_css/main.less"
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-less");

  grunt.registerTask("default", ["less"]);
};

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
    },
    browserify: {
      client: {
        src: ["my_javascripts/main.js"],
        dest: "tmp/serve/main.js"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-browserify");

  grunt.registerTask("default", ["browserify", "less"]);
};

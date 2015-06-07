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
    },
    uglify: {
      myClient: {
        files: {
          "tmp/serve/main.min.js": ["tmp/serve/main.js"]
        }
      }
    },
    watch: {
      scripts: {
        files: ["**/*.js"],
        tasks: ["browserify"]
      },
      styles: {
        files: ["**/*.less"],
        tasks: ["less"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["browserify", "less", "uglify"]);
};

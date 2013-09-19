module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jekyll: {
      dist: {
        src: 'app/jekyll',
        dest: 'app/jekyll/_site'
      }
    },

    copy: {
      main: {
        files: [
          {
            'expand': true,
            'cwd': 'app/jekyll/_site',
            'src': ['**/*.html'],
            'dest': 'public/'
          },
          {
            'expand': true,
            'cwd': 'javascripts',
            'src': 'mock.js',
            'dest': 'public/javascripts'
          }
        ]
      }
    },

    sprite: {
      all: {
        src: 'app/images/sprite/*',
        destImg: 'public/images/graphics/sprite.png',
        destCSS: 'app/sass/ui/_sprites.scss',
        imgPath: '../images/graphics/sprite.png?version=7',
        cssFormat: 'scss'
      }
    },

    sass: {
      dev: {
        src: 'app/sass/app.scss',
        dest: 'public/stylesheets/app.css',
        options: {
          style: 'expanded',
          lineNumbers: true
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'javascripts/**/*.js', '!/javascripts/plugins/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['javascripts/plugins/*.js', 'javascripts/modules/*.js', 'javascripts/app.js'],
        dest: 'public/javascripts/app.js'
      }
    },

    watch: {
      stylesheets: {
        files: 'app/sass/**/*.scss',
        tasks: 'sass'
      },
      javascript: {
        files: ['Gruntfile.js'],
        tasks: ['jshint']
      },
      jsBuilder: {
        files: ['javascripts/**/*.js'],
        tasks: ['concat', 'uglify', 'copy']
      },
      jekyll: {
        files: ['app/jekyll/**/*.html','!app/jekyll/_site/**/*.html'],
        tasks: ['jekyll', 'copy']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['jekyll', 'copy', 'sass', 'jshint', 'concat']);
  grunt.registerTask('html', ['jekyll', 'copy']);

};

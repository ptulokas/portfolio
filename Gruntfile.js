module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      build: {
        expand: true,
        cwd: 'src/',
        src: '**/*.html',
        dest: 'dist/',
        flatten: false,
        filter: 'isFile',
      }
    },
    ts: {
      default : {
        tsconfig: true,
        src: "src/**/*.ts",
        outDir: "dist",
        options: {
          module: "system",
          verbose: true
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/**/*.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    less: {
      build: {
        files: {
          'dist/styles.css': 'src/**/*.less'
        }
      }
    },
    packageModules: {
      dist: {
        src: 'package.json',
        dest: 'dist'
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          livereload: 9002,
          hostname: 'localhost',
          base: {
            path: 'dist',
            options: {
              index: 'index.html'
            }
          }
        }
      }
    },
    watch: {
      options: {
          livereload: {
            port: 9002,
            host: '0.0.0.0'
          }
      },    
      scripts: {
        files: ['src/**/*.ts'],
        tasks: ['ts']
      },
      styles: {
        files: ['src/**/*.less'],
        tasks: ['less:build']
      },
      markup: {
        files: ['src/**/*.html'],
        tasks: ['copy']
      }

    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-package-modules');
  grunt.loadNpmTasks('grunt-ts');

  // Default task(s).
  // js grunt
  // grunt.registerTask('default', ['copy', 'uglify', 'less:build', 'packageModules', 'connect:server', 'watch']);
  // ts grunt
  grunt.registerTask('default', ['copy', 'ts', 'less:build', 'packageModules', 'connect:server', 'watch']);



};

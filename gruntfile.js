module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Check the Javascript for errors
        jshint: {
            all: ['gruntfile.js', 'src/js/*.js']
        },
        // Minify and combine the Javascript
        uglify: {
            js: {
                files: { 'build/js/scripts.js': ['src/js/script2.js', 'src/js/*.js'] },
                options: {
                    preserveComments: false
                }
            }
        },
        // Combine images from src/images/sprite/
        // Create build/images/sprite.png
        // Add the relevant CSS variables to src/sass/sprite.scss
        sprite: {
          all: {
            src: 'src/images/sprite/*.png',
            destImg: 'build/images/sprite.png',
            destCSS: 'src/sass/sprite.scss'
          }
        },
        // Compile the SASS and move to build folder
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'build/css/ie.css'    : 'src/sass/ie.scss',
                    'build/css/print.css' : 'src/sass/print.scss',
                    'build/css/screen.css': 'src/sass/screen.scss',
                }
            }
        },
        // Make certain CSS inline.
        inline: {
            dist: {
                src: ['src/index.html'],
                dest: ['index.html']
            }
        },
        // Process HTML to re-write the CSS links.
        processhtml: {
            options: {
            },
            dist: {
                files: {
                    'index.html': ['index.html']
                }
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);

    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.registerTask('default', ['sprite']);

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass']);

    grunt.loadNpmTasks('grunt-inline');
    grunt.registerTask('default', ['inline']);
    
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.registerTask('default', ['processhtml']);

};
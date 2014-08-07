module.exports = function(grunt) {

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
    // Combine all the images from the sprite directory
    // Add the relevant CSS variables to sprite.scss
    sprite:{
      all: {
        src: 'src/images/sprite/*.png',
        destImg: 'build/images/sprite.png',
        destCSS: 'src/sass/sprite.scss'
      }
    },
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
    }
});
    
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.registerTask('default', ['jshint']);
    
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.registerTask('default', ['uglify']);
    
grunt.loadNpmTasks('grunt-spritesmith');
grunt.registerTask('default', ['sprite']);
    
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.registerTask('default', ['sass']);

};
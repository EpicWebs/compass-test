module.exports = function(grunt) {

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        js: {
            files: { 'build/js/scripts.js': ['src/js/script2.js', 'src/js/*.js'] },
            options: {
                preserveComments: false
            }
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
    
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.registerTask('default', ['uglify']);
    
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.registerTask('default', ['sass']);

};
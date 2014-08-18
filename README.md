Deployment test, using Compass, SASS and Grunt.
==========

##GETTING STARTED##
This is just a test repository on using Grunt for running tasks.

####REQUIREMENTS####
- Install node.js on your machine
- Install npm (node package manager) on your machine
- Install grunt on your machine

####INSTALLATION####
- Fork and then clone the repo to your local machine
- Rename pre-commit.sample inside /your_project/.git/hooks/ to pre-commit (no extension)
- Put the following code inside pre-commit
```
#!/bin/sh
 
# Include the compile bash script
bash compile_site.sh
```

In the command line run the following commands
```
npm install
grunt
```

####SUCCESS!####
Now you should be up and running with the repository and be able to run grunt which does the following.
- Checks javascript with jshint
- Minifies the javascript
- Create sprites and necessary SASS
- Compiles the SASS
- Makes CSS files inline, if the CSS files have ?__inline=true in the link
```
<link href="../build/css/screen.css?__inline=true" media="screen, projection" rel="stylesheet" type="text/css" />
```
- Re-writes the urls of CSS files from ../build/ to build/
```
<!-- build:css build/css/print.css -->
<link href="../build/css/print.css" media="print" rel="stylesheet" type="text/css" />
<!-- /build -->
```

All of the files which you should edit are the source files inside src, these files are manipulated and then built inside the build folder.

Good luck!

##NOTES##

####IMPORTANT FILES TO LOOK AT####
The main files to look at are:
- gruntfile.js
- compile_site.sh
- src/index.html
- src/sass/sprite.scss
- src/images/sprite/

####JAVASCRIPT CONCATENATION ORDER####
Inside gruntfile.js you can specify the order of which javascript files are compressed and then combined. The order of the array items inside files in the example below is the same as the order in which they are combined, so 'src/js/script2.js' is at the top of the 'build/js/scripts.js' file. Useful for including scripts like jQuery first.
```
uglify: {
    js: {
        files: { 'build/js/scripts.js': ['src/js/script2.js', 'src/js/*.js'] },
        options: {
            preserveComments: false
        }
    }
}
```

####RE-WRITE EXTERAL FILE URLS####
The task inside gruntfile.js called processhtml re-writes the urls for external files. You can see which files are being re-written as they have the following comments around them.
```
<!-- build:css build/css/print.css -->
<link href="../build/css/print.css" media="print" rel="stylesheet" type="text/css" />
<!-- /build -->
```
These comments are then removed and the url is re-written.

####GRUNT MODULES####
A list of modules being used by this install. This list is also in the same order as they are executed.

**grunt-contrib-jshint**<br />
This module is being used for checking javascript files.


**grunt-contrib-uglify**<br />
This module is being used to minify javascript files.


**grunt-spritesmith**<br />
This module is being used to generate sprites.


**grunt-contrib-sass**<br />
This module is being used to compile SASS.


**grunt-inline**<br />
This module is being used to make CSS inline.


**grunt-processhtml**<br />
This module is being used to re-write the urls for external CSS files.

####OPERATING SYSTEM####
This README is based on MAC OS. If you need to install this on windows you might have to rework the github commit hook/compile script as it uses bash, you are able to install software to run bash scripts on windows operating systems. If you are unable to use bash then you will need to manually run grunt before any git commands.
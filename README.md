Deployment test, using Compass, SASS and Grunt.
==========

**SETUP**
- Install node.js on your machine
- Install npm (node package manager) on your machine
- Install grunt on your machine
- Clone or fork the repo to your local machine
- Rename pre-commit.sample inside /your_project/.git/hooks/ to pre-commit (no extension)
- Put the following code inside pre-commit
```
#!/bin/sh
 
# Include the compile bash script
bash compile_site.sh
```

- In the command line run the following commands
```
npm install
grunt
```

Now you should be up and running with the repository and be able to run grunt which does the following.
- Checks javascript with jshint
- Minify the javascript
- Create sprites and necessary SASS
- Compiles the SASS
- Makes CSS files inline

Good luck!
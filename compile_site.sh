#!/bin/sh
#
# this pre-commit script uses compass to compile and compress stylesheet partials
echo "Checking javascript with jshint.";
grunt jshint

echo "Making javascript Ugly.";
grunt uglify

echo "Compiling SASS.";
grunt sass

echo "Adding compiled files to git.";
wait $!
git add --all
#!/bin/sh
#
# Run grunt tasks for generally compiling, compressing and concatenating files.
echo -e "\nChecking javascript with jshint.";
grunt jshint

echo -e "\nMaking javascript Ugly.";
grunt uglify

echo -e "\nCreating Sprite.";
grunt sprite

echo -e "\nCompiling SASS.";
grunt sass

echo -e "\nAdding compiled files to git.";
wait $!
git add --all
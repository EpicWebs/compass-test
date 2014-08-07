#!/bin/sh
#
# this pre-commit script uses compass to compile and compress stylesheet partials
echo -e "\nChecking javascript with jshint.";
grunt jshint

echo -e "\nMaking javascript Ugly.";
grunt uglify

echo -e "\nCreating Sprite.";
grunt spritesmith

echo -e "\nCompiling SASS.";
grunt sass

echo -e "\nAdding compiled files to git.";
wait $!
git add --all
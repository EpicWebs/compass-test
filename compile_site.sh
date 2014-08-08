#!/bin/sh
#
# Run grunt tasks for generally compiling, compressing and concatenating files.
echo -e "\nChecking javascript with jshint.";
grunt jshint

wait $!
echo -e "\nMaking javascript ugly.";
grunt uglify

wait $!
echo -e "\nCreating sprite.";
grunt sprite

wait $!
echo -e "\nCompiling SASS.";
grunt sass

wait $!
echo -e "\nRe-writing CSS links.";
grunt processhtml

wait $!
echo -e "\nMaking CSS inline.";
grunt inline

echo -e "\nAdding compiled files to git.";
wait $!
git add --all
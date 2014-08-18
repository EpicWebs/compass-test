#!/bin/sh
#
# Run grunt tasks for generally compiling, compressing and concatenating files.
echo -e "\nChecking javascript with jshint.";
grunt jshint

echo -e "\nMaking javascript ugly.";
grunt uglify

echo -e "\nCreating sprite.";
grunt sprite

echo -e "\nCompiling SASS.";
grunt sass

echo -e "\nMaking CSS inline.";
grunt inline

echo -e "\nRe-writing CSS links.";
grunt processhtml

echo -e "\nValidating HTML.";
grunt validation

echo -e "\nAdding compiled files to git.";
wait $!
git add --all
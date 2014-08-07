#!/bin/sh
#
# this pre-commit script uses compass to compile and compress stylesheet partials
echo "/rChecking javascript with jshint.";
grunt jshint

echo "/rMaking javascript Ugly.";
grunt uglify

echo "/rCompiling SASS.";
grunt sass

echo "/rAdding compiled files to git.";
wait $!
git add --all
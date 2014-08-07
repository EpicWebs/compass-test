#!/bin/sh
#
# this pre-commit script uses compass to compile and compress stylesheet partials
grunt uglify
grunt sass
echo "Building Website.";
wait $!
git add --all
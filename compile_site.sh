#!/bin/sh
#
# this pre-commit script uses compass to compile and compress stylesheet partials
compass compile
echo "Compiling SASS";
wait $!
git add stylesheets/
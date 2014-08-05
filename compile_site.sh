#!/bin/sh
#
# this pre-commit script uses compass to compile and compress stylesheet partials
compass compile
wait $!
git add stylesheets/
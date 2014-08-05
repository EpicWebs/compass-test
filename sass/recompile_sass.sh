#!/bin/bash
 
# Make sure that the 'sass' command exists (see http://stackoverflow.com/a/677212/329911)
command -v sass >/dev/null 2>&1 || {
  echo >&2 "SASS does not appear to be available. Unable to re-compile stylesheets";
  exit 1;
}
 
# Define our paths and stylesheets
echo "Re-compiling stylesheets..."
cd sass/
 
sass screen.scss screen.css --style compressed
echo "screen.scss -> screen.css (compressed)"

sass screen.scss screen.css --style compressed
echo "reset.scss -> reset.css (compressed)"

sass screen.scss screen.css --style compressed
echo "print.scss -> print.css (compressed)"
 
sass ie.scss ie.css --style compressed
echo "ie.scss -> ie.css (compressed)"
 
echo "Sassification is complete"
exit 0
#!/bin/bash

start() {
  local fullname="$1"
  local filename=`basename "$1"`
  local fileext="${filename##*.}"
  local ext2lower=`echo "$ext" | tr A-Z a-z`
  #echo $fullname
}

scan() {
  local x;
  for e in "$1"/*; do
    x=${e##*/}
    if [ -d "$e" -a ! -L "$e" ]
    then
      if [ -d "$e/.git" ]; then
        rm -rf "$e/.git"
        echo "delete $e/.git"
      fi
      if [ -d "$e/.github" ]; then
        rm -rf "$e/.github"
        echo "delete $e/.github"
      fi
      scan "$e"
    fi
  done
}

echo "Scan dir = /vendor"
scan "vendor"
echo "Script post-install.sh completed."

# remove git warkhosh/component/.git
# if [ -d vendor/warkhosh/component/.git ]; then
#   rm -rf vendor/warkhosh/component/.git
# fi
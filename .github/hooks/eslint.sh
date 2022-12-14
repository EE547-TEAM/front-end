#!/bin/bash

# this script only check js and jsx staged files
echo 'checking syntax and styles of staged changes...'

for file in $(git diff --cached --name-only | grep -E '\.(js)$')
do
  git show ":$file" | eslint --stdin --stdin-filename "$file" # we only want to lint the staged changes, not any un-staged changes
  if [ $? -ne 0 ]; then
    echo "ESLint failed on staged file '$file'. Please check your code and try again. You can run ESLint manually via npm run eslint."
    exit 1 # exit with failure status
  fi
done
#!/bin/bash

cd dist

git init
git config user.name "$GH_USER"
git config user.email "$GH_EMAIL"

git checkout --orphan gh-pages

git add .
git commit -m "new build"
git push -f -q https://"$GH_USER":"$GH_TOKEN"@"$GH_REF" -gh-pages gh-pages &2>/dev/null


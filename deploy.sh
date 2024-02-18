#!/usr/bin/env sh

# abort on error
set -e

# build static assets
rm -rf dist
npm run build

# write and stage files
cd dist
git init
echo "akash.dev" > CNAME

cat << EOL > README.md
# festiveakp.github.io
This repo holds the static build output for my personal website, which is deployed through GitHub Pages.
You can find the actual source repo [here](https://github.com/FestiveAkp/website-v2).
EOL

git checkout -b master
git add -A
git commit -m "deploy: $(date +"%F %r")"

# push to repo festiveakp.github.io
git push -f "https://github.com/FestiveAkp/festiveakp.github.io.git" master

cd ..
echo ""
echo ">> Deploy successful"

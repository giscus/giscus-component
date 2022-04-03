rm -rf dist && mkdir dist
cp index.html dist/
cd preact && npm run build && cd ..
cd react && npm run build && cd ..
cd vue && npm run build && cd ..
cd svelte && npm run build && cd ..
cd web && npm run build && cd ..

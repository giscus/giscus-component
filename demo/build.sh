rm -rf dist && mkdir dist
cp {index.html,styles.css} dist/

for framework in preact react vue svelte solid web
do
  cd $framework && npm run build && mv dist ../dist/$framework && cd ..
done

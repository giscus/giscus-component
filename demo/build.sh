rm -rf dist && mkdir dist
cp {index.html,styles.css} dist/

for framework in preact react vue svelte web
do
  cd $framework && npm run build && cd ..
done

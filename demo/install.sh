for framework in preact react vue svelte web
do
  cd $framework && npm i && cd ..
done

for framework in preact react vue svelte solid web
do
  cd $framework && npm i && npm upgrade && cd ..
done

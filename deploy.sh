cd ./app
npm run build
mkdir -p ../server/public
rm -rf ../server/public/*
cp -R ./build/* ../server/public

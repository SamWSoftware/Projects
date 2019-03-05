if [ "$#" -ne 1 ]; then
    echo "Usage : ./build.sh lambdaName";
    exit 1;
fi

lambda=${1%/}; // # Removes trailing slashes
echo "Deploying $lambda";
cd $lambda;
if [ $? -eq 0 ]; then
    echo "...."
else
    echo "Couldn't cd to directory $lambda. You may have mis-spelled the lambda/directory name";
    exit 1
fi

echo "nmp installing...";
npm install
if [ $? -eq 0 ]; then
    echo "done";
else 
    echo "npm install failed";
    exit 1;
fi

echo "Checking that aws-cli is installed"
which aws
if [ $? -eq 0 ]; then
    echo "aws-cli is installed, continuing..."
else
    echo "You need aws-cli to deploy this lambda. Google 'aws-cli install'"
    exit 1
fi

echo "removing old zip"
rm archive.zip;

echo "creating a new zip file"
zip archive.zip *  -r -x .git/\* \*.sh tests/\* node_modules/aws-sdk/\* \*.zip

echo "Uploading $lambda";
aws lambda create-function --function-name $lambda --role arn:aws:iam::095363550084:role/lambdaBasic --runtime nodejs8.10 --handler index.handler --zip-file fileb://archive.zip --publish --profile samwcoding

if [ $? -eq 0 ]; then 
    echo "!! Create successful !!"
    exit 1;
fi

aws lambda update-function-code --function-name $lambda --zip-file fileb://archive.zip --publish --profile samwcoding

if [ $? -eq 0 ]; then
    echo "!! Update successful !!"
else 
    echo "Upload failed"
    echo "If the error was a 400, check that there are no slashes in your lambda name"
    echo "Lambda name = $lambda"
    exit 1;
fi
# Alexa skill using AWS Lambda  and nodejs

setup 
npm install -s alexa-sdk
npm install -s request
npm install -s pubnub


deploy 
zip -r AlexaIOT.zip *

upload 
Upload AlexaIOT.zip to Alexa Skill

note : pubnub is not used in the alexa  app , I initally tried 
to use this for my service and then reverted to calling api . 
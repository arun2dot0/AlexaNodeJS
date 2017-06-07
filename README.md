## Alexa skill using AWS Lambda  and nodejs

#related projects
Data Integration Code - https://github.com/arun2dot0/metrics-rest-service-redis
RasberryPi + GrovePi Code - https://github.com/arun2dot0/PubNubPython
#setup 
npm install -s alexa-sdk
npm install -s request
npm install -s pubnub


#final demo with data integration and rasberry pi module
![Imgur](http://imgur.com/MzQa5Rs)

#deploy 
zip -r AlexaIOT.zip *

#upload 
Upload AlexaIOT.zip to Alexa Skill

note : pubnub is not used in the alexa  app , I initally tried 
to use this for my service and then reverted to calling api . 
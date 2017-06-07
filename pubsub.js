var PubNub = require('pubnub')

var pubnub = new PubNub({
   publishKey : 'pub-c-5100138b-1286-477b-836e-55f23e3b0f8c',
        subscribeKey : 'sub-c-5c3f5f40-4190-11e7-86e2-02ee2ddab7fe'

    })

module.exports.send = function(message,callback) {
 
     this.light_operation = function () {
        console.log("switch "+message);
        var publishConfig = {
            channel : "iot",
            message : message
        }
        pubnub.publish(publishConfig, function(status, response) {
            console.log(status, response);
            callback(status,response);
        });
    }
};

// module.exports.receive = function() {

//    this.messageListener ={
//         message: function(message) {
//             console.log("New Message!!", message);
//             // pubnub.removeListener(this.messageListener);
//             stopListening();
//             return;
//         },
//         presence: function(presenceEvent) {
//             // handle presence
//              var action = p.action; // Can be join, leave, state-change or timeout
//              var channelName = p.channel; // The channel for which the message belongs
//              console.log(action,channelName);
//              return;
//         }
//     }  

//   pubnub.addListener (this.messageListener) ;
//     console.log("Subscribing..");
//     pubnub.subscribe({
//         channels: ['iot'] 
//     });

//     var stopListening = function() {
//         console.log('unsubscribe');
//         pubnub.unsubscribe({
//         channels: ['iot'] 
//         });
//         console.log('Stopping Listening');
//         pubnub.removeListener(this.messageListener);
//         console.log("all done");
//         return;
//     };
// };


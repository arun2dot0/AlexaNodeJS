var pubsub = require('./pubsub.js');
var metric = require('./metric.js');

 metric.getMetricData( function ( result){
            console.log(result);
            });

  metric.lightOpt( "off",function ( result){
            console.log(result);
            });
// var r = new pubsub.send('off',function( status, response)
// {
// 	console.log('status '+status.error);
// 	console.log('response time'+response.timetoken);
// });
// var r = new pubsub.send('off');
 // r.light_operation();

// pubsub.receive();
// console.log("Finished");
// return;
// var r2 = new pubsub.receive();
// r2.messageListener.message(message,function(response){
// 	console.log('response'+response);
// });

//console.log('message from r2' + r2.messageListener);

//new pubsub.removeListener()
//r2.messageListener();
return;
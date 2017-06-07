var request = require("request");


function getMetrics(callback)
{
	request.get({  
    url: "http://104.198.174.99:8080/metrics",
    timeout: 3000 
	}, function (err, res, body) {
   		console.log(body);
   		callback(err,body);
	});
}

function light(opt,callback)
{
	request.put({  
     url: "http://104.198.174.99:8080/light?opt="+opt,
    timeout: 3000 
	}, function (err, res, body) {
   		console.log(body);
   		callback(err,body);
	});
}


function getMetricData(cb)
{
	getMetrics(function( err,body){
	if(err)
		cb("Unable to fetch metric  data");
	else
	{
		var data = JSON.parse(body);
		cb("Temperature is "+ data.temperature +" Degrees ...");
	}
	})
}

function lightOpt(message,cb)
{
	light(message,function( err,body){
	if(err)
		cb("Unable to perform operation");
	else
	{
		cb(body);
	}
	})
}
// getMetricData( function ( result){
// 	console.log(result);
// })
exports.getMetricData = getMetricData;
exports.lightOpt = lightOpt;

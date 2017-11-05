/**
 * This micro service is used to read the results of image recognition.
 * 
 */

'use strict';

const Alexa = require('alexa-sdk');
var http = require('http');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

var SKILL_NAME = "Image_Recognizer";

const handlers = {
    'LaunchRequest': function () {
        this.emit('RecognizeIt');
    },
    'ImageRecIntent': function () {
        this.emit('RecognizeIt');
    },
    'RecognizeIt': function () {
        console.log("entering recognize");
        // Create speech output
        var speechOutput = 'Please try again later.';
        var self = this;
        
        var httpUrl = 'http://' + process.env.SERVER_ADDR + ':' + process.env.SERVER_PORT + '/result'
        console.log("Getting ready to send the request to: " + httpUrl);

        getResult(httpUrl, function (result) {
            if(result == '') {
                speechOutput = "Can not see anything. Please try again.";
            }
            else {
                speechOutput = 'I see ' + result;
            }
            self.emit(':tellWithCard', speechOutput, SKILL_NAME, speechOutput);
        });

        console.log("leaving recognize");
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', "I can not help here. Sorry.", "I can not help here. Sorry.");
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', "Good Bye!");
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', "Good Bye!");
    },
};

function getResult(options, callback){
    console.log("Get a result");
    http.get(options, function(res) {
        console.error("Got response: " + res.statusCode);
        res.on("data", function(chunk) {
            console.error("BODY: " + chunk);
            var body = '' + chunk;
            return callback(body);
        });
    }).on('error', function(e) {
        text = 'error' + e.message;
        console.error("Got error: " + e.message);
    });
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

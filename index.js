const xray = require('x-ray')();

exports.handler = function(event, context) {
    console.log('Received event:', JSON.stringify(event, null, 2));
    xray('http://apod.nasa.gov/apod/', 'img@src')(function(err, img) {
        console.log(img);
        context.succeed({
            statusCode: 200,
            headers: {},
            body: img
        })
    });
};

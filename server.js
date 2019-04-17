/**
 * @author Shayne F. Preston
 */

//Importing
var express = require('express');
var app = express();
var fs = require("fs");

//GET Request Handler
app.get('/lines/:line', function (req, res) {
    setImmediate(function(){
        console.log(req.params.line);
        if(req.params.line >= fileArr.length && req.params.line === parseInt(req.params.line)){ //line outside bounds
            res.status(413).end("");
        }
        else //line inside bounds
        {
            res.status(200).end(fileArr[req.params.line]);
        }
    })
})

//Create a read in stream
var fileArr = [];
const readStream = fs.createReadStream('./SpecialTextFile.txt');

//Parse file one chunk of data at a time
readStream.on('data', function(chunk) {
    const buffer = Buffer.from(chunk);
    fileArr = fileArr.concat(chunk.toString('ascii').split('\n'));
});

//File is done parsing start Server
readStream.on('end', function() {
    console.log('finished reading text of ' + fileArr.length + " lines");
    // Start Server
    var server = app.listen(8082, function () {
        var host = server.address().address // listen on 127.0.0.1
        var port = server.address().port //listen on port 8082
        console.log("Server listening at http://%s:%s", host, port)
    })
});

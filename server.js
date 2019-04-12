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
        if(req.params.line >= fileArr.length){ //line outside bounds
            res.status(413).end("");
        }
        else //line inside bounds
        {
            res.status(200).end(fileArr[req.params.line]);
        }
    })
})

var server = app.listen(8082, function () {
    var host = server.address().address // listen on 127.0.0.1
    var port = server.address().port //listen on port 8082
    console.log("Example app listening at http://%s:%s", host, port)
})

//Read in file and split into array by '\n'
var text = fs.readFileSync("./SpecialTextFile.txt").toString('ascii');
var fileArr = text.split('\n');
console.log(fileArr.length);
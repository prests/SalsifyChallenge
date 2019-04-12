var express = require('express');
var app = express();
var fs = require("fs");

app.get('/lines/:line', function (req, res) {
    setImmediate(function(){
        console.log(req.params.line);
        if(req.params.line >= fileArr.length){
            res.sendStatus(413);
        }
        else
        {
            res.status(200).end(fileArr[req.params.line]);
        }
    })
})

var server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})

var text = fs.readFileSync("./SpecialTextFile.txt").toString('ascii');
var fileArr = text.split('\n');
console.log(fileArr.length);
const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");


const Server= http.createServer(function (req, res){
    const parsedUrl = url.parse(req.url);
    const parsedQuery = querystring.parse(parsedUrl.query);
    const method = req.method;


fs.readFile(__dirname + req.url, function(err,data)
    {
        if(err) {
            res.statusCode = 404;
            res.end("The file isn't found")
        }
        else{
            res.statusCode = 200;
            res.end(data);
        }
   });

if(req.url.indexOf("/kxziner")===0){
      if(method === "GET"){
               res.setHeader('Content-Type','application/json');
               res.write(res.statusCode.toString(kxziner));
               res.end(kxziner);
      }
   }
});

Server.listen(3013);